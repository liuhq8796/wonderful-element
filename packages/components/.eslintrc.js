module.exports = {
  rules: {
    // 本子项目为基础组件项目，导出时会带上前缀 'we-'，所以没有必要使用多个单词作为组件名
    'vue/multi-word-component-names': 'off',
  },
}
