import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import dsv from '@rollup/plugin-dsv';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), tailwindcss(), dsv(), svgr()],
    base: '/gps/',
    build: {
        outDir: 'gps',
    },
    server: {
        open: true,
        port: 3000,
    },
});
