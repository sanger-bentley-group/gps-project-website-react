import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dsv from '@rollup/plugin-dsv';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), dsv(), svgr()],
    base: '/gps/',
    build: {
        outDir: 'gps',
    },
    server: {
        open: true,
        port: 3000,
    },
});
