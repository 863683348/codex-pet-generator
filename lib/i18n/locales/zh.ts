import type { Dict } from './en'

export const zh: Dict = {
  nav: {
    github: 'GitHub',
  },
  footer: {
    madeWith: '为 Codex 用户倾心打造',
    compatible: '兼容 OpenAI Codex',
    copyright: '© 2026 PetGen',
    privacy: '隐私政策',
    terms: '服务条款',
    faq: '常见问题',
    contact: '联系我们',
  },
  lang: {
    en: 'EN',
    zh: '中',
  },
  hero: {
    badge: 'AI 驱动的宠物生成器',
    titlePrefix: '把一张照片变成桌面上的',
    titleHighlight: '可安装的编程小伙伴',
    subtitle:
      '专为 Codex 打造，输出 spritesheet.webp 与 pet.json，兼容 Codex 自定义宠物。上传、确认角色基底、解锁动画压缩包，再从终端安装。',
    uploading: '上传中…',
    demo: '试试演示（无需上传）',
    baseTime: '约 90 秒生成基底',
    statesCount: '9 种动画状态',
    zipDownload: 'ZIP 下载',
    ready: '已可安装！',
  },
  steps: {
    upload: '上传',
    base: '基底',
    animate: '动画',
    install: '安装',
  },
  howItWorks: {
    title: '工作原理',
    desc: '从一张照片到桌面上的编程伙伴，只需四步。',
    s1title: '上传',
    s1desc: '拖入任意照片——宠物、头像或角色。支持 JPG、PNG 或 WebP。',
    s2title: '确认基底',
    s2desc: 'AI 把它变成像素角色。确认外观，或重新生成。',
    s3title: '解锁动画压缩包',
    s3desc: '9 种动画状态合成进 spritesheet.webp + pet.json。',
    s4title: '从终端安装',
    s4desc: '复制到 ~/.codex/pets/，你的伙伴就会出现在屏幕上。',
  },
  whatYouGet: {
    title: '你会得到什么',
    desc: '一份 Codex 就绪的打包文件：透明精灵图 + 元数据文件。',
    spritesheetTitle: 'spritesheet.webp',
    spritesheetMeta: '1536 × 1872',
    spritesheetDesc: '9 状态 × 8 帧，透明背景，正是 Codex 读取的网格。',
    jsonTitle: 'pet.json',
    jsonMeta: 'metadata',
    jsonDesc: '四个字段告诉 Codex 如何命名并定位你的宠物。就这么简单。',
    jsonCompatible: '兼容 OpenAI Codex 自定义宠物。',
  },
  upload: {
    drop: '拖拽图片到这里',
    dropActive: '松手放下！',
    or: '或',
    clickToBrowse: '点击选择文件',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    maxSize: '最大 10MB',
  },
  error: {
    unsupportedFormat: '不支持的格式：{type}。请使用 JPG、PNG 或 WebP。',
    fileTooLarge: '文件过大：{size}MB。最大 10MB。',
    generationFailed: '生成失败。',
    missingBackendConfig:
      '后端未配置。请在 .env.local 中添加 NEXT_PUBLIC_SUPABASE_URL 和 SUPABASE_SERVICE_ROLE_KEY，然后重启服务器。',
    openaiNotConfigured: '缺少图像生成 API 密钥。请在 .env.local 中添加 BAILIAN_API_KEY 或 OPENAI_API_KEY。',
    noFile: '没有选择图片文件。',
    dbError: '数据库错误。请检查 Supabase 的 pets 表和 storage bucket 是否已创建。',
    unknown: '出了点问题。请重试，或切换到演示模式。',
    bailianQuotaExhausted:
      '百炼免费额度已用尽。请完成实名认证并充值，或在百炼控制台「模型用量 → 免费额度」关闭「免费额度用完即停」开关。',
  },
  workspace: {
    generatingBase: '正在生成基底',
    sketching: 'AI 正在绘制你的像素角色…',
    waitingHintBase:
      'AI 正在把你的照片变成像素角色，大约需要 90 秒。请保持本页面打开，不要刷新或关闭。',
    step1: '步骤 1 / 3 · 约 90 秒',
    generatingStates: '正在生成 9 种动画状态',
    composing: '正在合成精灵图。每个状态完成后逐个出现。',
    waitingHintAnim:
      '9 张动画帧分别由 AI 单独生成，全部完成大约需要 2–5 分钟。进度会自动更新，请勿关闭页面。',
    step2: '步骤 2 / 3 · 约 2-5 分钟',
    petAlive: '你的宠物活过来了',
    allStates: '9 种动画状态已全部生成。你的伙伴已就绪，可以安装。',
    packageReady: '完整包已生成',
    downloadHint:
      '点击下方按钮下载 ZIP —— 内含 spritesheet.webp（透明精灵图）与 pet.json（元数据），可直接安装到 Codex。',
    petJsonTitle: 'pet.json',
    installMac: '安装 — macOS / Linux',
    installWin: '安装 — Windows',
  },
  basePreview: {
    title: '你的宠物基底',
    desc: '这是你宠物的基底形象。确认以生成全部 9 种动画状态，或重新生成换一个样子。',
    regenerating: '重新生成中...',
    approve: '确认并生成',
    regenerate: '重新生成',
  },
  download: {
    preparing: '准备中...',
    download: '下载 ZIP',
  },
  errorCard: {
    title: '生成失败',
    retry: '再试一次',
    tryDemo: '试试演示',
  },
  animationPreview: {
    title: '动画预览',
    desc: '已生成 9 种动画状态。点击任意状态播放。',
  },
  code: {
    copy: '复制',
    copied: '已复制',
  },
  animation: {
    idle: '待机',
    'running-right': '向右跑',
    'running-left': '向左跑',
    waving: '挥手',
    jumping: '跳跃',
    failed: '失败',
    waiting: '等待',
    running: '奔跑',
    review: '审阅',
  },
  demo: {
    banner:
      '演示模式 — 后端未配置。当前用你上传的图片预览完整流程。在 .env.local 中配置 Supabase 与 BAILIAN_API_KEY 或 OPENAI_API_KEY 后，可生成真实像素宠物。',
  },
}
