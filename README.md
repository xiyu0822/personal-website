# 习羽 · 个人展示网站

一个功能完整、设计现代的个人作品集网站，基于 **React + TypeScript + Vite + Tailwind CSS + shadcn/ui** 构建。

## ✨ 功能特性

- 📝 **Markdown 内容渲染** —— 所有富文本内容（简介、技能描述、经历详情、作品介绍）均通过 Markdown 编写与展示，支持 GFM（表格、任务列表、删除线等）
- 🌗 **深色 / 浅色主题切换** —— 跟随系统设置，一键切换，偏好持久化
- 📱 **响应式设计** —— 完美适配桌面端与移动端，移动端带抽屉式导航
- 🎬 **流畅页面切换动画** —— 基于 Framer Motion 的进入/退出过渡
- ⚡ **性能优化** —— 路由级懒加载（代码分割）、构建压缩、首屏快速呈现
- 🎨 **统一设计系统** —— 靛蓝品牌色体系、渐变元素、玻璃态效果、自定义 Markdown 排版

## 📂 项目结构

```
personal-website/
├── public/                     # 静态资源（直接复制到 dist）
│   ├── favicon.svg             # 站点图标
│   └── avatar.svg              # 头像占位图（替换为你的照片）
├── src/
│   ├── components/             # 通用组件
│   │   ├── layout/             # 布局组件（导航栏、页脚）
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                 # shadcn/ui 基础组件库（40+）
│   │   ├── MarkdownRenderer.tsx# Markdown 渲染器
│   │   ├── ThemeToggle.tsx     # 主题切换按钮
│   │   ├── PageTransition.tsx  # 页面切换动画包装
│   │   ├── SectionHeading.tsx  # 区块标题
│   │   └── SocialIcon.tsx      # 社交媒体图标
│   ├── content/                # ★ Markdown 内容文件（在此编辑富文本）
│   │   ├── about.md            # 首页「关于我」
│   │   └── contact.md          # 联系页介绍
│   ├── data/                   # ★ 结构化数据（在此维护卡片/时间轴内容）
│   │   ├── site.ts             # 站点配置：姓名、头衔、联系方式、社交链接
│   │   ├── skills.ts           # 个人特长（卡片数据）
│   │   ├── experience.ts       # 成长经历（时间轴数据）
│   │   └── projects.ts         # 作品集（项目数据）
│   ├── lib/
│   │   ├── theme.tsx           # 主题 Provider（next-themes）
│   │   └── utils.ts            # 工具函数（cn 类名合并）
│   ├── pages/                  # 页面组件
│   │   ├── Home.tsx            # 首页：简介 + 头像 + 数据亮点
│   │   ├── Skills.tsx          # 个人特长：卡片网格
│   │   ├── Experience.tsx      # 成长经历：时间轴
│   │   ├── Portfolio.tsx       # 作品集：可筛选卡片
│   │   ├── Contact.tsx         # 联系页：信息卡片 + 表单
│   │   └── NotFound.tsx        # 404 页
│   ├── App.tsx                 # 根组件（路由 + 布局）
│   ├── main.tsx                # 入口（ThemeProvider 包裹）
│   ├── index.css               # 全局样式 + 设计令牌 + Markdown 样式
│   └── vite-env.d.ts           # 类型声明
├── index.html                  # HTML 入口（字体、SEO 元信息）
├── tailwind.config.js          # Tailwind 主题配置
└── vite.config.ts              # Vite 构建配置
```

## 🛠 内容维护指南

### 1. 修改个人信息
编辑 `src/data/site.ts`：姓名、头衔、标语、邮箱、电话、所在地、社交链接。

### 2. 替换头像
将自己的照片放入 `public/` 目录，然后修改 `src/data/site.ts` 中的 `avatar` 字段（如 `"./avatar.jpg"`）。

### 3. 编辑富文本内容（首页简介、联系页）
直接编辑 `src/content/` 下的 `.md` 文件，支持完整 Markdown 语法。

### 4. 维护个人特长（卡片）
编辑 `src/data/skills.ts`：每张卡片包含图标（lucide 图标）、标题、**Markdown 描述**、标签与熟练度。

### 5. 维护成长经历（时间轴）
编辑 `src/data/experience.ts`：每条经历包含年份、标题、机构、类型（education/work/milestone）与 **Markdown 内容**。

### 6. 维护作品集
编辑 `src/data/projects.ts`：每个项目包含标题、分类、**Markdown 描述**、标签、链接与封面渐变色。

### 7. 自定义主题色彩
编辑 `src/index.css` 顶部的 CSS 变量（`:root` 与 `.dark`），调整 `--primary`、`--brand-from/via/to` 等令牌即可改变全站配色。

## 🚀 开发与构建

```bash
# 安装依赖
npm install

# 启动开发服务器（热更新）
npm run dev

# 构建生产版本（输出到 dist/）
npm run build

# 本地预览构建产物
npm run preview
```

## 🧱 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 19 + TypeScript |
| 构建 | Vite 7 |
| 样式 | Tailwind CSS 3 + shadcn/ui |
| 路由 | React Router 7（HashRouter） |
| 动画 | Framer Motion |
| Markdown | react-markdown + remark-gfm |
| 主题 | next-themes |
| 图标 | lucide-react |

## 📦 部署

构建后 `dist/` 目录为纯静态文件，可部署到任意静态托管平台：
- Vercel / Netlify / Cloudflare Pages
- GitHub Pages
- 腾讯云 CloudStudio 沙箱
- 任意 Nginx / 静态文件服务器

> 使用 HashRouter，无需服务端路由配置即可在任何静态环境正常运行。

---

_使用 ♥ 与 React · TypeScript · Tailwind 构建_
