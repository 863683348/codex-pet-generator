# Codex Pet Generator — MVP 交付概览

> 生成日期：2026-07-13
> 状态：MVP 代码完成，生产构建通过，本地渲染验证通过

## 交付内容

完整可运行的 Next.js 项目（含前端 + 后端 + 数据库 schema + 文档），位于 `codex-pet-generator/`。

## 已验证

| 验证项 | 结果 | 说明 |
|--------|------|------|
| `next build` 类型检查 | ✅ 通过 | TypeScript 全量编译无错误 |
| 静态页生成 | ✅ 4/4 | 首页 + 3 个内部路由 |
| 生产服务器渲染 | ✅ HTTP 200 | hero 文案 / 字体 link / 上传 CTA 均存在 |
| API 字段对齐 | ✅ | GET 路由返回字段与前端消费字段一致 |
| 构建产物 | ✅ 完整 | `.next/BUILD_ID`、`server/app`、`static/chunks`、`routes-manifest.json` 齐全 |

> 注：端到端生成流程需在用户机器配置 `OPENAI_API_KEY` + Supabase 环境变量后实测，本沙箱无相关凭据故未跑真实 AI 生成。

## 项目结构

```
codex-pet-generator/
├── app/
│   ├── api/pets/
│   │   ├── generate/route.ts          POST 上传图片→建 task
│   │   └── [taskId]/
│   │       ├── route.ts               GET 轮询任务状态
│   │       ├── approve/route.ts       POST 审批/重生成基底
│   │       └── download/route.ts      GET 下载 ZIP
│   ├── globals.css                    暗色赛博朋克像素主题
│   ├── layout.tsx                     <link> 加载字体（规避构建期联网）
│   └── page.tsx                       主页面状态机
├── components/
│   ├── layout/  Navbar, Footer
│   ├── pet/     UploadDropzone, StepIndicator, BasePreview,
│   │            SpritePlayer, AnimationPreview, DownloadButton, ErrorCard
│   └── ui/      ProgressRing, CodeBlock
├── lib/
│   ├── ai/      image-generator, sprite-composer, pet-json-builder
│   ├── storage/ Supabase Storage 操作
│   ├── supabase/ server/client
│   └── utils/   constants, validation
├── types/pet.ts
├── supabase/migrations/001_init.sql   pets 表 DDL
├── eslint.config.mjs                  flat config（Next 16 兼容）
├── .env.example
└── README.md
```

## 技术栈（实际安装版本）

| 层 | 技术 |
|----|------|
| Framework | Next.js **16** (App Router) |
| DB | Supabase (PostgreSQL + Storage) |
| 样式 | TailwindCSS **3.4** + Radix 思路自实现 |
| AI | OpenAI Images API (gpt-image-1) |
| 图片处理 | Sharp |
| 打包 | Archiver |
| 图标 | Lucide React |

## 关键修复记录

1. **字体构建期联网**：原用 `next/font/google` 在沙箱无网导致构建卡死 → 改为 `<link>` 标签运行时加载。
2. **OpenAI SDK 类型**：`Buffer` 不能直接构造 `File` → 改用 `new Uint8Array(...)` 包装。
3. **lint 脚本**：Next 16 移除了 `next lint` → 迁移为 ESLint 9 flat config（`eslint.config.mjs` + `eslint .`）。
4. **常量 typo**：`' neon'` 前导空格修正为 `'neon'`。
5. **SpritePlayer 动画**：styled-jsx 动态 keyframe 不稳定 → 改用 CSS 自定义属性驱动。
6. **sprite-composer**：帧合成改用 `composite` 方案避免边界裁切。

## 后续（用户机器上）

1. `cp .env.example .env.local` 填入 Supabase + OpenAI 凭据
2. Supabase SQL Editor 执行 `supabase/migrations/001_init.sql`
3. 创建 public Storage bucket `pet-assets`
4. `npm install && npm run dev`

## 升级路线

见 `../codex-pet-mvp-and-roadmap.md`（5 个 Phase 演进规划）。
