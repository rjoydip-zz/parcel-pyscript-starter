import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/**/*.{tsx,css}'],
    splitting: false,
    sourcemap: false,
    clean: true,
    dts: true,
    minify: false,
    platform: 'node',
    format: ['cjs', 'esm', 'iife'],
    tsconfig: './tsconfig.json'
})