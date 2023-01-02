# Wonderful Element

奇妙的 Vue3 UI 框架

## 项目说明

### package.json

- private: 设置为true，防止将主目录作为npm包发布。主目录仅作为管理 monorepo 使用。

### pnpm-workspace.yaml

`pnpm-workspace.yaml` 定义了[工作空间](https://pnpm.io/zh/workspaces)的根目录，并能够从工作空间中包含/排除目录 。

## 发包说明

1. 运行 `pnpm run changeset:add` 命令添加变更集。
2. 运行 `pnpm run changeset:version` 命令变更 semver 版本。
3. 运行 `pnpm run changeset:publish` 命令发布。
