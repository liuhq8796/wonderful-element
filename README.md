# Wonderful Element

奇妙的 Vue3 UI 框架的主项目

## 项目说明

### 待办事项

- [x] monorepo 项目跑通
- [x] eslint 格式与错误检查
- [x] 保存时自动执行 eslint 格式化
- [ ] 提交时自动检查格式与错误
- [ ] 仅检查提交的内容
- [ ] 提交信息检查
- [ ] 添加 license
- [ ] 修复文档项目构建错误
- [ ] 完成文档项目样式隔离
- [ ] (长期)完成组件库建设
- [ ] (长期)完成单元测试建设

### 目录结构

```
|-- .changeset                  monorepo 版本管理发布工具配置文件目录
|-- .devcontainer               VS Code Dev Container 插件配置文件目录
|-- .vscode                     VS Code 工作区配置文件目录
|-- docs                        文档项目目录
|-- internal                    全局内部工具项目目录
|-- packages                    子项目目录
    |-- components              组件子项目目录
    |-- utils                   组件工具子项目目录
    |-- wonderful-element       入口子项目目录
```

### package.json

- private: 设置为true，防止将主目录作为npm包发布。主目录仅作为管理 monorepo 使用。
- workspace: 指定工作区，用来给 npm-check-updates 包读取，与 pnpm-workspace.yaml 文件同步。
- scripts: 脚本命令，放置项目内部脚本，目前包括：
  - "docs:dev": 文档项目开发命令。
  - "docs:build": 文档项目构建命令。
  - "docs:preview": 文档项目预览命令。
  - "changeset:add": changeset 添加变更集命令。
  - "changeset:version": changeset 变更版本号以及生成变更日志命令。
  - "changeset:publish": changeset 发布版本命令。
  - "lint": 使用 eslint 检查文件格式和错误，目前还不包括 json 和 md 文件。
  - "lint:fix": 使用上述 lint 命令检查格式和错误，并自动修复。
- dependencies: 依赖项，目前依赖项包含：
  - "@changesets/cli": monorepo 版本管理发布工具。

### pnpm-workspace.yaml

`pnpm-workspace.yaml` 定义了[工作空间](https://pnpm.io/zh/workspaces)的根目录，并能够从工作空间中包含/排除目录 。目前工作空间包括：

 - "packages/*": packages 目录下的所有子目录。
 - "docs": 文档项目目录，不需要发版，但为了统一依赖版本所以添加到工作空间中。

### 发包操作

1. 项目发生变更后，运行 `pnpm run changeset:add` 命令添加变更集。
2. 待项目变更足够发版后，运行 `pnpm run changeset:version` 命令变更 semver 版本。
3. 运行 `pnpm run changeset:publish` 命令发布。
