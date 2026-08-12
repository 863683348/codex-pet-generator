# Spec - codexpetgenerator Phase 2 (社区增强) v1.0

> 生成日期：2026-08-13
> 基于：Phase 2 架构交付（高见远）+ 设计交付（颜好看）
> 状态：已确认（用户 "继续Phase 2" 批准进入实现）
> 专家团：大湾区靓仔(总监) | 高见远(架构师) | 颜好看(设计师) | 贝洛奇(后端) | 贾思敏(前端)
> 依赖：Phase 1 已提交 db451d4（/spec /guide FAQ增强），本 Phase 在其之上叠加社区功能

---

## 1. 产品定义
- **一句话描述**：为 PetGen 社区补完「浏览—筛选—排行—精选—投稿」闭环，提升社区活跃度与 SEO 内链/外链权重。
- **目标用户**：已生成宠物的登录用户（投稿/上榜）、游客（浏览画廊/排行榜/标签/首页精选）。
- **核心问题**：现有画廊无筛选、无排行、无精选入口、无标签体系，社区感弱。

## 2. MVP 范围（锁定）
| 优先级 | 功能 | 验收标准摘要 |
|--------|------|-------------|
| T3.2 | 画廊筛选 | 按 style(pixel/chibi/realistic) + 排序(最新/最多分享) 客户端筛选 |
| T3.5 | 排行榜 `/leaderboard` | Top 用户按 points 展示（隐藏 email/user_id） |
| T3.6 | 首页精选区 | 首页展示 featured 宠物（回退 top share_count） |
| P1 | `/collections` 标签系统 | 8 标签总览 + `/collections/[slug]` 按标签浏览 |
| P1 | `/submit` 投稿页 | 登录用户提交已公开宠物进精选候选（submissions 表） |

## 3. 明确不做（Out-of-Scope）
| 不做的功能 | 原因 | 何时考虑 |
|------------|------|----------|
| 策展人管理后台 UI | MVP 用 Supabase 后台手动 UPDATE + revalidatePath('/') | Phase 2.x / Phase 3 |
| 用户自由标签 | 垃圾/审核负担，破坏 SEO 稳定 URL | v2 |
| 多语言翻译新页面正文 | 现有 i18n 仅英文为主，保持一致 | v2 |
| "You" 个人排行高亮 | 服务端组件无请求令牌，匹配需 user_id（已隐藏） | 后续 |

## 4. 技术架构（锁定）
| 层 | 技术 | 版本 | 锁定原因 |
|----|------|------|----------|
| 框架 | Next.js (App Router) | 16.2.10 | 现有 |
| UI | React | 19.0.0 | 现有 |
| 样式 | Tailwind CSS | 3.4.17 | 现有 token 体系 |
| 图标 | lucide-react | 0.468.0 | **P0-1 锁定** |
| 后端 | Supabase (service-role 服务端 / anon 客户端) | - | 现有 |
| SEO | buildMetadata + JsonLd | - | 复用 lib/seo.ts |

## 5. API 端点清单（锁定）
| Method | Path | 认证 | 请求体 | 响应 |
|--------|------|------|--------|------|
| POST | `/api/submissions` | Bearer | `{petId, message?}` | `201 {id,status}` / `409` 重复 / `400` 未公开 / `403` 非本人 / `404` |
| GET | `/api/leaderboard` | 公开 | `?limit=`(默认20,上限50) | `200 [{rank,displayName,points}]` |
| GET | `/api/featured` | 公开 | — | `200 [{id,displayName,baseImageUrl,shareCount,style}]` |

> 画廊 loader（`loadSharedPets`）新增 `style` + `created_at` 字段；`/collections/[slug]`、`/leaderboard`、`/collections` 为服务端组件直接查库，无额外 API。

## 6. 数据库表清单（005_community.sql，锁定）
新增列/表（在 001–004 之后执行）：
- `pets.featured BOOLEAN NOT NULL DEFAULT FALSE` + 部分索引 `idx_pets_featured (created_at DESC) WHERE featured=true`
- `user_usage.display_name TEXT` + 索引 `idx_user_usage_points (points DESC)`
- `pet_tags(id, slug UNIQUE, name, created_at)`
- `pet_tag_map(pet_id, tag_id, PK(pet_id,tag_id))` + 两索引
- `submissions(id, pet_id, user_id, message, status DEFAULT 'pending', created_at, reviewed_at)` + 3 索引
- 种子 8 标签：cat/dog/fantasy/robot/anime/game/celebrity/original
- RLS：pets/tag/tag_map/submissions 启用；公开读策略 + submissions 本人增/读策略（service-role 绕过）
- 完整 SQL 见文末附录 A

## 7. 页面清单（锁定）
| 路由 | 用途 | 数据源 | 动态性 |
|------|------|--------|--------|
| `/leaderboard` | 排行榜 | server 读 user_usage(points desc) | server, revalidate=300 |
| `/collections` | 标签总览 | server 读 pet_tags | server, revalidate=300 |
| `/collections/[slug]` | 按标签浏览 | server join pet_tag_map→pets | server, revalidate=300, notFound() 未知 slug |
| `/submit` | 投稿表单 | client: GET /api/pets/mine → POST /api/submissions | client |
| `/gallery` | 增强筛选栏 | loader 加 style；客户端筛选 | server ISR 300 不变 |
| `/` | 增强 featured 区 | client FeaturedPets fetch /api/featured | client（首页为 use client） |

## 8. 设计 Token（锁定，复用现有，无新增）
- primary(#6C5CE7 实色) / accent(#00D9FF) / success / bg-base / bg-surface / bg-elevated / text-primary / text-secondary / text-muted / border
- font-pixel / font-sans / font-mono；glass-card / grid-bg
- 图标：lucide-react（Trophy/Tags/Send 用于 nav；Boxes/Smile/Aperture/Clock/Share2 画廊；Cat/Dog/Sparkles/Bot/Clapperboard/Gamepad2/Star/Shapes 标签；Medal 前3；ArrowLeft/ArrowRight/LogIn/Loader2/Check 等）
- ⛔ P0：禁止 emoji、禁止紫(#7C3AED)→粉(#EC4899)渐变+发光+毛玻璃三位一体、禁止硬编码色值、禁止 AI 模板味文案

## 9. 验收标准（EARS）
| 编号 | 功能 | EARS |
|------|------|------|
| AC-01 | 画廊筛选 | While 用户在 /gallery 选 style/sort，系统**必须**即时过滤已加载集合且不影响 ISR |
| AC-02 | 排行榜 | While 用户访问 /leaderboard，系统**必须**展示 Top≤50 用户(points desc) 且不暴露 email/user_id |
| AC-03 | 首页精选 | If 存在 featured=true 宠物，首页精选区**必须**展示它们；If 无，则**必须**回退 top share_count |
| AC-04 | 标签总览 | While 用户访问 /collections，系统**必须**展示 8 个标签卡，点击进 /collections/[slug] |
| AC-05 | 标签详情 | While 用户访问 /collections/[slug]，系统**必须**展示该标签已公开宠物；If slug 未知则**必须** 404 |
| AC-06 | 投稿 | When 登录用户向 /api/submissions 提交本人已公开宠物，系统**必须**插入 submissions(status=pending) 并返回 201 |
| AC-07 | 投稿去重 | If 同 pet 已存在 submission，系统**必须**返回 409 + 已有记录 |
| AC-08 | 导航 | When 渲染 Navbar，系统**必须**含 Collections / Leaderboard / Submit 链接（lucide 图标，非 emoji） |
| AC-09 | SEO | While 部署后，/leaderboard /collections /submit **必须**出现在 sitemap.ts |

## 10. 边界与约束
- 画廊客户端筛选仅对前 60 条生效（与现有 limit 一致）
- featured 回退保证首页冷启动有内容
- 投稿审核：Phase 2 由运营经 Supabase 后台 `UPDATE pets SET featured=true` + `revalidatePath('/')`，无管理 UI
- 响应式：移动单列，sm+ 多列；可点击元素 min-h-[44px]
- ⛔ P0 三条绝对规则全程生效

## 11. ADR（MADR）
- **ADR-002** /submit = 提交至首页精选候选队列（与分享/积分解耦）。Accepted。
- **ADR-003** 标签=策展人固定分类法，MVP 不做用户自由标签。Accepted。
- **ADR-004** featured 回退策略（优先 featured，空则 top share_count）。Accepted。
- **ADR-005** 画廊筛选客户端化，保 ISR。Accepted。

## 12. OPEN-DECISIONS 裁定（由总监拍板）
| # | 项 | 裁定 | 状态 |
|---|----|------|------|
| OPEN-1 | 排行榜 email 隐私 | **不返回 email/user_id**；displayName 缺省回退 email 本地前缀（如 `john`）。前端/API 层截断 | Closed |
| OPEN-2 | 审核 UX | Phase 2 用手动 Supabase UPDATE + `revalidatePath('/')`；管理后台延后 | Closed |
| OPEN-3 | 每 pet 单条 submission | 采纳：任意 status 已存在即 `409` 返回已有 | Closed |
| OPEN-4 | 首页精选注入 | 采纳：新增 `GET /api/featured` + 客户端 `FeaturedPets` 组件（首页为 use client，规避重构风险） | Closed |
| OPEN-5 | featured 需 is_public | 约定：策展人只置 is_public 宠物为 featured；DB 不强制 CHECK | Closed |

## 13. 内嵌已知坑
| 坑 | 指纹 | 根因 | 修法 |
|----|------|------|------|
| 含单引号路径 .git 损坏 | C:/Users/l'x | git 在含单引号 cwd 下损坏 .git | 提交用 GIT_DIR/GIT_WORK_TREE 模式 |
| next build 需 node 22 | next@16 | engines.node=22.x | 用 node 22.22.2 构建 |
| Vercel FOT 软封禁 | team hobby | 12 站 402 不可部署 | 本 Phase 仅本地实现+提交，待升级 Pro 后 push |

## 14. 端到端验证
```bash
cd codexpetgenerator-recover
npx tsc --noEmit
npm run build
# 本地起服务（需 .env.local 含 Supabase 变量 + 已执行 005_community.sql）
npm run start
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/leaderboard   # 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/collections   # 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/collections/cat # 200
curl -s http://localhost:3000/api/featured | head -c 200                    # JSON
curl -s http://localhost:3000/api/leaderboard | head -c 200                 # JSON (无 email)
```

## 15. 变更记录
| 日期 | 变更 | 原因 | 影响 |
|------|------|------|------|
| 2026-08-13 | 初版 Spec | 用户批准 Phase 2 | T3.2/T3.5/T3.6/P1 全锁定 |

---

## 附录 A：005_community.sql
```sql
-- 005_community.sql — Phase 2 Community Migration (在 001–004 之后执行)
ALTER TABLE pets ADD COLUMN IF NOT EXISTS featured BOOLEAN NOT NULL DEFAULT FALSE;
CREATE INDEX IF NOT EXISTS idx_pets_featured ON pets (created_at DESC) WHERE featured = TRUE;

ALTER TABLE user_usage ADD COLUMN IF NOT EXISTS display_name TEXT;
CREATE INDEX IF NOT EXISTS idx_user_usage_points ON user_usage (points DESC);

CREATE TABLE IF NOT EXISTS pet_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS pet_tag_map (
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES pet_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (pet_id, tag_id)
);
CREATE INDEX IF NOT EXISTS idx_pet_tag_map_tag_id ON pet_tag_map (tag_id);
CREATE INDEX IF NOT EXISTS idx_pet_tag_map_pet_id ON pet_tag_map (pet_id);

CREATE TABLE IF NOT EXISTS submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions (status);
CREATE INDEX IF NOT EXISTS idx_submissions_pet_id ON submissions (pet_id);
CREATE INDEX IF NOT EXISTS idx_submissions_user_id ON submissions (user_id);

INSERT INTO pet_tags (slug, name) VALUES
  ('cat','Cats'),('dog','Dogs'),('fantasy','Fantasy'),('robot','Robots'),
  ('anime','Anime'),('game','Game Characters'),('celebrity','Celebrities'),('original','Original')
ON CONFLICT (slug) DO NOTHING;

ALTER TABLE pets ENABLE ROW LEVEL SECURITY;
ALTER TABLE pet_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE pet_tag_map ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public read public pets" ON pets;
CREATE POLICY "public read public pets" ON pets FOR SELECT USING (is_public = TRUE);
DROP POLICY IF EXISTS "public read tags" ON pet_tags;
CREATE POLICY "public read tags" ON pet_tags FOR SELECT USING (TRUE);
DROP POLICY IF EXISTS "public read tag map" ON pet_tag_map;
CREATE POLICY "public read tag map" ON pet_tag_map FOR SELECT USING (TRUE);
DROP POLICY IF EXISTS "users insert own submissions" ON submissions;
CREATE POLICY "users insert own submissions" ON submissions FOR INSERT WITH CHECK (user_id = auth.uid()::TEXT);
DROP POLICY IF EXISTS "users read own submissions" ON submissions;
CREATE POLICY "users read own submissions" ON submissions FOR SELECT USING (user_id = auth.uid()::TEXT);
```

## 附录 B：types/community.ts
```ts
import type { PetStyle } from './pet'
export type SubmissionStatus = 'pending' | 'approved' | 'rejected'
export interface Submission { id:string; petId:string; userId:string; message:string|null; status:SubmissionStatus; createdAt:string; reviewedAt:string|null }
export interface PetTag { id:string; slug:string; name:string; createdAt:string }
export interface PetTagMap { petId:string; tagId:string }
export interface FeaturedPet { id:string; displayName:string|null; baseImageUrl:string|null; shareCount:number; style:PetStyle }
export interface LeaderboardEntry { rank:number; displayName:string; points:number }
```
