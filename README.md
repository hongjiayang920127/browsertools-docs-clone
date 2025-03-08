# AgentDesk BrowserTools MCP 文档网站克隆

这是 AgentDesk BrowserTools MCP 文档网站的克隆版本。原始网站位于 [browsertools.agentdesk.ai](https://browsertools.agentdesk.ai/)。

## 功能

- BrowserTools 将 AI 代码编辑器和代理直接嵌入到您的网页浏览器中
- 提供安装指南、快速入门和贡献指南
- 响应式设计，支持明暗模式

## 技术栈

- Next.js - React 框架
- TypeScript - 类型安全的 JavaScript
- Tailwind CSS - 实用优先的 CSS 框架
- MDX - Markdown 与 JSX 的结合

## 项目结构

```
browsertools-docs-clone/
├── content/                # MDX 文档内容
│   ├── installation.mdx    # 安装指南
│   ├── quickstart.mdx      # 快速入门
│   └── contributing.mdx    # 贡献指南
├── public/                 # 静态资源
│   └── favicon.svg         # 网站图标
├── src/
│   ├── components/         # React 组件
│   │   ├── Layout.tsx      # 布局组件
│   │   ├── Navbar.tsx      # 导航栏
│   │   ├── Sidebar.tsx     # 侧边栏
│   │   ├── Footer.tsx      # 页脚
│   │   ├── ThemeToggle.tsx # 主题切换
│   │   └── mdx/            # MDX 相关组件
│   ├── lib/                # 工具函数
│   │   └── mdx.ts          # MDX 处理
│   ├── pages/              # 页面
│   │   ├── _app.tsx        # 应用入口
│   │   ├── _document.tsx   # 文档结构
│   │   ├── index.tsx       # 首页
│   │   ├── 404.tsx         # 404 页面
│   │   └── [slug].tsx      # 动态文档页面
│   └── styles/             # 样式
│       └── globals.css     # 全局样式
├── package.json            # 依赖管理
├── tsconfig.json           # TypeScript 配置
├── tailwind.config.js      # Tailwind 配置
└── next.config.js          # Next.js 配置
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 构建

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 贡献

欢迎提交 Pull Request 或创建 Issue 来改进这个项目。

## 许可证

MIT