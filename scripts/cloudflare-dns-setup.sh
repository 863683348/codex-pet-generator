#!/usr/bin/env bash
# Cloudflare DNS setup for codexpetgenerator.com
# 在 Cloudflare 侧自动：建/查 zone + 加两条灰云(DNS-only)记录 + 设 Full Strict SSL
# 用法（本地 Git Bash / macOS / Linux）：
#   CLOUDFLARE_API_TOKEN=xxxx CLOUDFLARE_ACCOUNT_ID=yyyy bash cloudflare-dns-setup.sh
# Token 所需权限：Zone:Read + Zone:DNS:Edit + Account:Read
# 注意：脚本不会 echo token；NS 翻转到 Spaceship 仍需手动。

set -euo pipefail

: "${CLOUDFLARE_API_TOKEN:?请设置环境变量 CLOUDFLARE_API_TOKEN}"
: "${CLOUDFLARE_ACCOUNT_ID:?请设置环境变量 CLOUDFLARE_ACCOUNT_ID}"

API="https://api.cloudflare.com/client/v4"
ZONE_NAME="codexpetgenerator.com"
AUTH="Authorization: Bearer $CLOUDFLARE_API_TOKEN"

# 轻量 JSON 解析（优先 python3，回退 jq）
if command -v python3 >/dev/null 2>&1; then
  JQ_PY=1
elif command -v jq >/dev/null 2>&1; then
  JQ_PY=0
else
  echo "需要 python3 或 jq 来解析 JSON"; exit 1
fi
json_get () { # $1=json $2=python表达式
  if [ "$JQ_PY" = "1" ]; then python3 -c "import sys,json;d=json.load(sys.stdin);print($2)" <<<"$1"; else echo "$1" | jq -r "$3"; fi
}

echo "==> 查找或创建 zone: $ZONE_NAME"
LIST=$(curl -s "$API/zones?name=$ZONE_NAME" -H "$AUTH")
ZONE_ID=$(json_get "$LIST" "d['result'][0]['id'] if d.get('result') else ''" ".result[0].id // empty")

if [ -z "$ZONE_ID" ]; then
  echo "    未找到，创建中 (type=full) ..."
  RESP=$(curl -s -X POST "$API/zones" -H "$AUTH" -H "Content-Type: application/json" \
    -d "{\"name\":\"$ZONE_NAME\",\"account\":{\"id\":\"$CLOUDFLARE_ACCOUNT_ID\"},\"type\":\"full\"}")
  ZONE_ID=$(json_get "$RESP" "d['result']['id'] if d['success'] else ''" ".result.id // empty")
  if [ -z "$ZONE_ID" ]; then echo "创建失败:"; echo "$RESP"; exit 1; fi
  echo "    已创建 ZONE_ID=$ZONE_ID"
else
  echo "    已存在 ZONE_ID=$ZONE_ID"
fi

echo "==> 添加 A 记录 @ -> 76.76.21.21 (灰云)"
curl -s -X POST "$API/zones/$ZONE_ID/dns_records" -H "$AUTH" -H "Content-Type: application/json" \
  -d "{\"type\":\"A\",\"name\":\"$ZONE_NAME\",\"content\":\"76.76.21.21\",\"ttl\":1,\"proxied\":false}" \
  | python3 -c "import sys,json;d=json.load(sys.stdin);print('   ', 'OK' if d['success'] else d)" 2>/dev/null \
  || echo "    (已存在或需查看返回)"

echo "==> 添加 CNAME www -> cname.vercel-dns.com (灰云)"
curl -s -X POST "$API/zones/$ZONE_ID/dns_records" -H "$AUTH" -H "Content-Type: application/json" \
  -d "{\"type\":\"CNAME\",\"name\":\"www.$ZONE_NAME\",\"content\":\"cname.vercel-dns.com\",\"ttl\":1,\"proxied\":false}" \
  | python3 -c "import sys,json;d=json.load(sys.stdin);print('   ', 'OK' if d['success'] else d)" 2>/dev/null \
  || echo "    (已存在或需查看返回)"

echo "==> SSL 模式设为 full_strict"
curl -s -X PATCH "$API/zones/$ZONE_ID/settings/ssl" -H "$AUTH" -H "Content-Type: application/json" \
  -d '{"value":"full_strict"}' \
  | python3 -c "import sys,json;d=json.load(sys.stdin);print('   ', d['result']['value'] if d['success'] else d)" 2>/dev/null \
  || echo "    (需查看返回)"

echo "==> 获取 Cloudflare 分配的 NS"
NS=$(curl -s "$API/zones/$ZONE_ID" -H "$AUTH" | python3 -c "import sys,json;d=json.load(sys.stdin);print(' '.join(d['result']['name_servers']))" 2>/dev/null || echo "")
echo "=========================================="
if [ -n "$NS" ]; then
  echo "去 Spaceship 把名称服务器改成："
  echo "  $NS"
  echo "保存后等 Cloudflare 显示 Active，再跑验证命令。"
else
  echo "未能读取 NS，请到 Cloudflare 控制台 Overview 复制 Nameservers。"
fi
echo "=========================================="
