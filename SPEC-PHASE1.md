# Spec - codexpetgenerator Phase 1 (P0 内容层) v1.0

> 生成日期：2026-08-13
> 基于：用户批准的 Phase 1 方案（/spec + /guide + FAQ 增强）
> 状态：已确认（用户口头批准 "phase1 先完成"）
> 专家团：大湾区靓仔(总监) | 高见远(架构师) | 颜好看(设计师) | 贾思敏(前端)

---

## 1. 产品定义
- **一句话描述**：为 codexpetgenerator.com 增加开发者向技术规格页与教程聚合页，补齐 FAQ 内链，提升 SEO 外链与内部链接权重。
- **目标用户**：OpenAI Codex 用户、pixel-art 爱好者、技术博主/记者（会被引用）、新手用户（找教程）。
- **核心问题**：现有站点缺技术参考页（pet.json/spritesheet 规格）与教程聚合入口，FAQ 孤立无内链。

## 2. MVP 范围（锁定）
| 优先级 | 功能 | 验收标准摘要 |
|--------|------|-------------|
| P0 | `/spec` 技术规格页 | 含精灵图布局/9状态表/pet.json/安装命令/校验，TechArticle JSON-LD |
| P0 | `/guide` 博客分类索引页 | 30 篇 posts 分 4-5 类展示，CollectionPage/ItemList JSON-LD |
| P0 | FAQ 增强 | FAQ 页底部加 /spec、/guide 内链 CTA（不改问答本身） |
| P0 | 导航入口 | Navbar 加 Spec / Guide 链接（lucide 图标） |

## 3. 明确不做（Out-of-Scope）
| 不做的功能 | 原因 | 何时考虑 |
|------------|------|----------|
| 多语言翻译 /spec、/guide 正文 | 现有博客内容为英文，保持一致；避免改 6 语言文件 | v2 若流量证明需本地化 |
| 宠物标签系统 /collections | 属 P1/T3，需新建 DB 表 | Phase 2 |
| 排行榜 /leaderboard | 属 P1/T3.5 | Phase 2 |
| 提交页 /submit | 属 P1 | Phase 2 |

## 4. 技术架构（锁定）
| 层 | 技术 | 版本 | 锁定原因 |
|----|------|------|----------|
| 框架 | Next.js (App Router) | 16.2.10 | 现有 |
| UI | React | 19.0.0 | 现有 |
| 样式 | Tailwind CSS | 3.4.17 | 现有 token 体系 |
| 图标 | lucide-react | 0.468.0 | **P0-1 锁定，禁止 emoji** |
| SEO | buildMetadata + JsonLd | - | 复用现有 lib/seo.ts、components/seo/JsonLd.tsx |
| 后端 | 无新增 | - | 纯静态 server component |

## 5. API 端点清单
**无新增 API。** 全部为静态页面，复用现有 `posts` 数据层（编译期导入）。

## 6. 数据库表清单
**无新增表。** 不触碰 Supabase schema。

## 7. 页面清单（锁定）
| 页面 | 路由 | 核心组件 | 对应 JSON-LD | 设计 Token |
|------|------|----------|--------------|-----------|
| Spec | /spec | CodeBlock / 网格示意图 / 状态表 | TechArticle | primary 纯色、glass-card |
| Guide | /guide | 分类区块 + 文章卡片(复用 BlogIndexView 样式) | CollectionPage + ItemList | glass-card |
| FAQ 增强 | /faq | 现有 FAQItem + 底部内链 CTA | 已有 FAQPage | glass-card |

## 8. 设计 Token（锁定）
- 主色：`primary`（品牌紫，纯色使用，禁止紫→粉渐变）
- 背景：bg-base / bg-surface / bg-elevated
- 文字：text-primary / text-secondary / text-muted
- 边框：border
- 字体：font-pixel (Press Start 2P，仅标题/logo) / font-sans (Inter) / font-mono (JetBrains Mono，代码块)
- 图标库：lucide-react，尺寸 16/20/24px
- 现有类复用：glass-card、grid-bg

## 9. 验收标准（EARS）
| 编号 | 功能 | EARS 格式 |
|------|------|-----------|
| AC-01 | /spec | While 用户访问 /spec，系统**必须**返回 200 且含 TechArticle JSON-LD |
| AC-02 | /spec | While 用户查看 /spec，系统**必须**展示 9 动画状态表（帧数与 types/pet.ts 一致） |
| AC-03 | /spec | If 用户点击复制按钮，系统**必须**将安装命令写入剪贴板 |
| AC-04 | /guide | While 用户访问 /guide，系统**必须**按分类展示全部 30 篇 posts |
| AC-05 | 导航 | When 渲染 Navbar，系统**必须**含 Spec 与 Guide 链接（lucide 图标，非 emoji） |
| AC-06 | FAQ | While 用户滚动至 FAQ 底部，系统**必须**展示指向 /spec 与 /guide 的内链卡片 |

## 10. 边界与约束
- 响应式断点：移动端单列，sm 以上多列
- 性能：/spec、/guide 为静态 server component，ISR/SSG 友好
- ⛔ P0-1：禁止 emoji 图标，全站 lucide-react
- ⛔ P0-2：禁止紫→粉渐变 + 发光 + 毛玻璃三位一体
- ⛔ P0-3：禁止硬编码颜色值（走 Token）、禁止 AI 模板味文案

## 11. 内嵌已知坑
| 坑 | 指纹 | 根因 | 修法 |
|----|------|------|------|
| 含单引号路径 .git 损坏 | C:/Users/l'x | git 在含单引号 cwd 下损坏 .git | 本次只改源码不提交；提交时用 GIT_DIR 模式 |
| next build 需 node 22 | next@16 | engines.node=22.x | 用 node 22.22.2 构建 |

## 12. 端到端验证
```bash
# 1. 类型检查
cd codexpetgenerator-recover && npx tsc --noEmit
# 2. 构建（验证页面可编译）
npm run build
# 3. 本地起服务验证路由
npm run start & curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/spec
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/guide
```

## 13. 变更记录
| 日期 | 变更 | 原因 | 影响 |
|------|------|------|------|
| 2026-08-13 | 初版 Spec | 用户批准 Phase 1 | 新增 /spec、/guide、FAQ 增强 |
