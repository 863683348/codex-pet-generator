# CodexPetGenerator — Cloudflare 域名托管操作清单

> 目标：把 `codexpetgenerator.com` 的 DNS 托管从 Spaceship 注册商转移到 Cloudflare。
> 现状（2026-07-21 核验）：NS = `launch1/launch2.spaceship.net`，A `@ → 76.76.21.21`，`www CNAME → cname.vercel-dns.com` 已在 Spaceship 配好。
> 配套脚本：`cloudflare-dns-setup.sh`（自动建 zone + 加两条灰云记录 + 设 Full Strict SSL）。

---

## 一、为什么用 Cloudflare（必要性速记）
- 免费且更强的 DNS 管理（解析快、TTL 可控）。
- 免费 DDoS/WAF/Bot 防护，前置防火墙保护接支付的站点。
- 隐藏 Vercel 真实 IP（开代理后）。
- 全球 CDN 加速（出海站受益）。
- 与你其他出海项目统一到一个控制台；未来可接 Turnstile / R2 / Workers。
- **非必须**：Vercel 已自带 SSL+CDN；但强烈建议用，分阶段接入最稳。

## 二、执行顺序（关键：先建记录，再翻 NS）
1. 在 Cloudflare 建好记录 → 2. 拿到 Cloudflare 的 NS → 3. 去 Spaceship 把 NS 改成 Cloudflare 的。
   ⚠️ 顺序反了会导致域名短暂失联。

---

## 三、步骤清单

### 步骤 1 — Cloudflare 添加站点
- 登录 Cloudflare → **Add a Site** → 输入 `codexpetgenerator.com` → 选 **Free** 计划。
- 等待 DNS 扫描（会从 Spaceship 现有记录自动抓取）。

### 步骤 2 — 确认/补齐 DNS 记录（灰云 = DNS only）
| 类型 | 名称 | 内容 | 代理 |
|------|------|------|------|
| A | `@` | `76.76.21.21` | ⚪ 灰云（不代理） |
| CNAME | `www` | `cname.vercel-dns.com` | ⚪ 灰云（不代理） |

> 若扫描没抓全，手动加这两条。初期**务必灰云**，避免 SSL 死循环。

### 步骤 3 — SSL/TLS 模式（防死循环）
- `SSL/TLS → Overview → 模式` 设为 **Full (Strict)**。
- 即使现在灰云也先设好，将来开橙云就不会忘。
- ❌ 绝不能用 **Flexible**（Cloudflare→Vercel 走 HTTP + 强制 HTTPS = 无限重定向）。

### 步骤 4 — 拿到 Cloudflare 分配的 Nameserver
- Cloudflare 会给出 2 个，形如 `xxx.ns.cloudflare.com` / `yyy.ns.cloudflare.com`。
- 复制下来。

### 步骤 5 — 去 Spaceship 改 NS
- 打开你域名后台（截图里那个）→ 把名称服务器从
  `launch1.spaceship.net` / `launch2.spaceship.net`
  改成 Cloudflare 给的两个 → **保存**。
- ⚠️ 改 NS 后，Spaceship 那边的 DNS 记录失效，**所以步骤 2 的记录必须已在 Cloudflare 建好**。

### 步骤 6 — 回 Cloudflare 点 "Check nameservers"
- 等状态变 **Active**（几分钟到 24h，邮件会通知）。

---

## 四、自动化（可选）
用 `cloudflare-dns-setup.sh` 可一键完成步骤 1–4 的 Cloudflare 侧操作：
```bash
CLOUDFLARE_API_TOKEN=xxxx CLOUDFLARE_ACCOUNT_ID=yyyy bash cloudflare-dns-setup.sh
```
Token 需权限：**Zone:Read + Zone:DNS:Edit + Account:Read**。
脚本会输出 Cloudflare 分配的 NS，你复制到 Spaceship 即可（步骤 5 仍需手动）。

---

## 五、验证（你本地跑，沙盒环境查不到公网解析）
```bash
dig codexpetgenerator.com NS        # 应返回 cloudflare 的 NS
curl -I https://codexpetgenerator.com      # 200 + 证书有效
curl -I https://www.codexpetgenerator.com   # 应 301 到 apex（vercel.json 生效）
```
Vercel 端**不用动**，域名状态保持 Valid。

---

## 六、第二阶段（可选）：开橙云拿 CDN
1. 把两条记录点成 **橙云（代理）**。
2. 确认 SSL 为 **Full (Strict)**。
3. 配 **Cache Rules**：`/api/*` 设 `Bypass cache`，避免缓存生成/下载/支付回调。
4. 可选开 WAF 托管规则、Bot Fight Mode、Turnstile。

---

## 七、常见坑
- ❌ Flexible SSL + 强制 HTTPS = 死循环。要么灰云，要么 Full Strict。
- ❌ 改 NS 前没在 Cloudflare 建记录 = 域名短暂失联。
- ⚠️ 域名注册费仍向 Spaceship 续缴；想更省可日后转入 Cloudflare Registrar（成本价）。
- ⚠️ 出海为主可忽略；兼顾国内可把 www CNAME 改用 `cname-china.vercel-dns.com`。
