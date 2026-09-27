# A1 项目说明

这是同一个 Next.js 网站中的两个区域：Labs 展示 HTML 练习，Kambaz 展示教学管理系统原型。代码保存在本地；运行开发服务器不会自动上传 GitHub 或提交作业。

## 本地查看

在项目终端执行 `npm.cmd run dev`，打开终端显示的地址（通常是 http://localhost:3000）。保持终端运行，保存代码后浏览器会更新。停止时按 Ctrl+C。

依赖只需在首次下载项目或依赖改变后安装：`npm.cmd install`。`npm.cmd run lint` 检查代码，`npm.cmd run build` 验证能否生成生产版本。

## 文件地图

| 路径 | 作用 |
| --- | --- |
| `app/layout.tsx` | 全站外壳：HTML 和页面标题；按教材注释掉全局 CSS 导入 |
| `app/globals.css` | A1 不导入此文件，使用浏览器默认样式；高亮组件保留教材的内联样式 |
| `app/labs/page.tsx` | Labs 目录、姓名、GitHub 链接、Lab 1–5 入口 |
| `app/labs/layout.tsx`、`TOC.tsx` | 所有练习页共用的左侧目录 |
| `app/labs/lab1/page.tsx` | 导入各个组件，将它们组合成完整 Lab 1 |
| `HeadingTags.tsx`、`ParagraphTag.tsx` | 标题、段落以及个人和 AI 扩展练习 |
| `ListTags.tsx`、`Tables.tsx`、`Images.tsx` | 列表、成绩表与个人表格、远程及本地图片 |
| `HighlightedParagraph.tsx` | 通过属性传入文字、背景、边框、圆角 |
| `HighlightedBox.tsx` | 用相同的样式属性包住任意嵌套内容 |
| `AnchorTag.tsx` | 教材 lipsum / 教师 GitHub 链接，以及个人和 AI 文档链接 |
| `app/labs/lab1/forms/Forms.tsx` | 组合教材表单，最后显示唯一的个人表单 |
| `forms/YourForm.tsx` | 个人 Student Profile 练习；与 Kambaz 的 Profile 页面不同 |
| `forms/` 其他组件 | 文本框、文本域、单选、复选框、下拉框、其他输入和按钮 |
| `app/labs/lab2` 至 `lab5` | 占位页面，本次不需要完成后续章节的练习 |
| `app/(kambaz)/layout.tsx`、`Navigation.tsx` | Kambaz 共用侧栏和页面布局 |
| `app/(kambaz)/page.tsx` | 将首页重定向到登录页 |
| `account/` | 登录、注册、个人资料、账户导航；目前是原型 |
| `dashboard/` | 显示三张 CourseCard；图片、标题和 Go 按钮进入课程 |
| `courses/[cid]/layout.tsx`、`Navigation.tsx` | 各课程共用的布局和导航 |
| `courses/[cid]/home/` | Modules 与 Course Status 并排显示 |
| `courses/[cid]/modules/` | Module 表示一周，Lesson 表示周内的小节，children 放具体内容 |
| `courses/[cid]/assignments/` | 作业列表及可复用 AssignmentItem |
| `courses/[cid]/assignments/[aid]/page.tsx` | 作业编辑原型，Cancel / Save 返回列表 |
| `piazza`、`zoom`、`quizzes`、`grades`、`people/table` | 课程占位页 |
| `app/not-found.tsx` | Calendar、Inbox 按教材故意没有页面，显示 Page Not Found 和返回 Dashboard 链接 |
| `public/` | 可以通过网址直接读取的图片等资源 |
| `package.json`、`package-lock.json` | 项目命令、依赖以及固定安装版本 |
| `node_modules/` | 自动安装的第三方依赖，不需要手写或提交 |
| `.next/` | 自动生成的开发和构建输出，不需要提交 |
| `.gitignore` | 告诉 Git 哪些文件不上传 |
| `tsconfig.json`、`next.config.ts`、`eslint.config.mjs`、`postcss.config.mjs` | TypeScript、Next.js、代码检查、CSS 工具配置 |
| `AGENTS.md`、`CLAUDE.md` | 给编程助手的项目说明，不是网页内容 |

## 看懂页面需要的几个概念

- `page.tsx`：一个可访问页面，例如 `app/labs/lab1/page.tsx` 对应 `/labs/lab1`。
- `layout.tsx`：多个页面共用的外壳。`children` 是当前页面内容，显示在布局指定的位置。
- `(kambaz)`：整理文件用的路由分组，不进入网址。登录地址是 `/account/signin`。
- `[cid]`：课程编号占位符。例如 `/courses/1234/home` 的 cid 是 `1234`。
- `[aid]`：作业编号占位符。例如 `/courses/1234/assignments/123` 的 aid 是 `123`。
- 组件：可以重复使用的网页片段，如每门课都用同一个 CourseCard。
- props：组件接收的参数，例如标题、图片、边框颜色。
- `id="wd-..."`：老师的检查工具用来定位元素的标识，同一页面内应唯一。
- `htmlFor` 对应输入框的 `id`，点击标签就能聚焦输入框或切换选项。
- radio 用相同的 `name` 实现同组互斥；不同组使用不同的 `name`。
- `defaultValue` / `defaultChecked`：表单首次显示的内容。用户在浏览器里修改，不会自动改写源码。
- `"use client"`：需要在浏览器处理点击或提交事件的组件使用它。

## 查看顺序

1. `/labs`：检查姓名、仓库链接、Lab 1–5 和 Chapter 1 导航。
2. `/labs/lab1`：从标题向下看，检查列表、10 行成绩表（平均 90.7）、图片、两份表单、高亮框和链接。
3. 在个人表单试选 radio、checkbox、多选框，点击 label；Save 应保持当前页面。本次不保存到数据库。
4. `/account/signin`：点击 Sign in 进入 Dashboard，不需要真实账号密码。
5. Dashboard：分别打开三门课程，查看 Home 的列表及全部状态按钮。
6. 课程导航：打开 Modules、Assignments 和各占位页。
7. 点击 A1、A2、A3，检查编辑字段以及 Cancel / Save 返回。教材允许三个作业暂时展示相同编辑内容。

## 本次本地修改和待办

依据：[在线 Chapter 1](https://webdev-client.vercel.app/book/ch1)。完整示例恢复教材原文、属性、默认值和表格布局，包括 Lab 1 示例、账户页面、CourseCard、导航、Module / Lesson、高亮组件和 NotFound。分步代码按本章最终状态组合，例如 Sign in 最终进入 Dashboard。

保留作业要求的个人练习和 With AI 扩展。教材留空的 Course Status、Assignments、Editor 按清单补全。Profile 使用教材 Alice / Wonderland / Faculty 示例；你自己的资料放在 Labs 和唯一的 `forms/YourForm.tsx`。

个人资料：Zhihao Qian，qian.zhi@northeastern.edu，Computer Science 研二、full-time，预计 2027 年毕业。入学月份为本人提供的 2025 年 9 月，日期控件暂用 2025-09-01。兴趣、书籍、食谱和目标是经本人同意拟写的练习内容，个人密码留空。浏览器里的修改不保存到数据库。

必要的实现调整：Editor 文本域用 React 的 `defaultValue`；共享 TOC 提供唯一的 `wd-kambaz-link`，正文保留第二个不重复 ID 的链接；Modules / Status 按钮明确使用 `type="button"`。原生 img 是教材练习，因此 Images.tsx 单独关闭 Next.js 的图片组件建议。格式化只调整缩进和换行。

Calendar、Inbox 和 TOC 中的 `/book/ch1` 显示 404 是本章明确要求。恢复默认 HTML 样式后，字体、间距和控件大小会与旧版本不同。

本地修改上传并部署后才会出现在 Vercel。最终应让 `a1` 分支保存完成的 A1 版本，并核对 Vercel 部署的分支。部署后在 `https://kambaz.dev/assignments/a1` 用 Canvas 对应的学校邮箱登录，Clear → Run checks，再提交 GitHub 和 Vercel URL。Run checks 本身不会提交作业；人工评分和 Canvas 提交也要按课程要求完成。

## 图片来源

- Tesla Bot：Benjamin Ceci，[Optimus Tesla](https://commons.wikimedia.org/wiki/File:Optimus_Tesla.jpg)，公共领域，本地原图 `public/images/teslabot.jpg`。
- Starship：恢复 §1.3.5 中 Star Advertiser 的远程图片地址，宽 400px。
- HTML5 标识：[W3C HTML5 Logo](https://www.w3.org/html/logo/)。
- 三张课程缩略图使用教材站点的 reactjs.jpg、nodejs.jpg、mongodb.jpg。
