import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'WonderfulElement',
            fileName: 'wonderful-element',
        },
        minify: false,
        rollupOptions: {
            external: [
                // 除了 @openxui/shared，未来可能还会依赖其他内部模块，不如用正则表达式将 @openxui 开头的依赖项一起处理掉
                /@wonderful-element.*/,
                'vue',
            ],
        },
    },
});
