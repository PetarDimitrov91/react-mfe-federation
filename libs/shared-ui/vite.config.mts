import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'SharedUI', 
            formats: ['es'], 
            fileName: (format) => `shared-ui.${format}.js`,
        },
        outDir: resolve(__dirname, './dist/shared-ui'), 
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});