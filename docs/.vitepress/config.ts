import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Wonderful Element',
    titleTemplate: '奇妙的 Vue 3 UI 框架',
    lang: 'zh-CN',
    themeConfig: {
        nav: [
            {
                text: '组件',
                link: '/component/button'
            }
        ],
        sidebar: {
            '/component/': [
                {
                    text: 'Basic 基础组件',
                    items: [
                        { text: 'Button', link: '/component/button'}
                    ]
                }
            ]
        },
        outlineTitle: '目录',
    },
})