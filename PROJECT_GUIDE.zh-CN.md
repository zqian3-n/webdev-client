# A1 项目说明

这是同一个 Next.js 网站中的两个区域：Labs 展示 HTML 练习，Kambaz 展示教学管理系统原型。代码保存在本地；运行开发服务器不会自动上传 GitHub 或提交作业。

## 本地查看

在项目终端执行 `npm.cmd run dev`，打开终端显示的地址（通常是 http://localhost:3000）。保持终端运行，保存代码后浏览器会更新。停止时按 Ctrl+C。

依赖只需在首次下载项目或依赖改变后安装：`npm.cmd install`。`npm.cmd run lint` 检查代码，`npm.cmd run build` 验证能否生成生产版本。

## 文件地图

| 路径 | 作用 |
| --- | --- |
| `app/layout.tsx` | 全站外壳：HTML、页面标题和全局 CSS |
| `app/globals.css` | 基本字体、标题大小、列表、表格边框、表单样式 |
| `app/labs/page.tsx` | Labs 目录、姓名、GitHub 链接、Lab 1–5 入口 |
| `app/labs/layout.tsx`、`TOC.tsx` | 所有练习页共用的左侧目录 |
| `app/labs/lab1/page.tsx` | 导入各个组件，将它们组合成完整 Lab 1 |
| `HeadingTags.tsx`、`ParagraphTag.tsx` | 标题、段落以及个人和 AI 扩展练习 |
| `ListTags.tsx`、`Tables.tsx`、`Images.tsx` | 列表、成绩表与个人表格、远程及本地图片 |
| `HighlightedParagraph.tsx` | 通过属性传入文字、背景、边框、圆角 |
| `HighlightedBox.tsx` | 用相同的样式属性包住任意嵌套内容 |
| `AnchorTag.tsx` | 外部链接和页内跳转 |
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
| `calendar`、`inbox` | 简单占位页，避免全局导航进入 404 |
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
- `[aid]`：作业编号占位符。例如 `/courses/1234/assignments/a1` 的 aid 是 `a1`。
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

已补充：教材标题/段落/列表、高亮组件完整样式参数及示例、个人表单控件结构、表格日期、下拉框默认值、课程缩略图和状态按钮。已处理重复 ID、图片坏链和全局导航中的两个 404。

Personal content is now filled in: Zhihao Qian, qian.zhi@northeastern.edu, second-year Computer Science graduate student, full-time, expected graduation in 2027. The user supplied September 2025 as the program start month; 2025-09-01 is the illustrative day used by the date control. Interests, books, recipe, goals, and learning preferences were drafted with the user's permission. The existing computer illustration and weekly practice schedule remain. Account Profile has the confirmed email; its password and birthday are blank rather than invented. Browser edits do not persist; change defaults in source to update the submitted page.

本地检查不等于老师评分：Vercel 公开访问、课程网站 Run checks、人工评分和最终提交均需在部署后确认。A1 代码保存在 `a1` 分支，部署时需要选择这个分支；若部署仍跟踪 `main`，不会自动展示 `a1` 的修改。

## 图片来源

- Tesla Bot：Benjamin Ceci，[Optimus Tesla](https://commons.wikimedia.org/wiki/File:Optimus_Tesla.jpg)，公共领域，本地原图 `public/images/teslabot.jpg`。
- Starship：Lars Plougmann，[原图页面](https://commons.wikimedia.org/wiki/File:Starship_SN15_flap_and_nosecone_(51437260707).jpg)，CC BY-SA 2.0，使用远程原图。
- HTML5 标识：[W3C HTML5 Logo](https://www.w3.org/html/logo/)。
- 三张课程缩略图为本项目编写的简单 SVG 文字卡片。
