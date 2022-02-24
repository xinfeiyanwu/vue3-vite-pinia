/*
 * @Author: Lxx
 * @Date: 2022-01-21 15:11:21
 * @LastEditTime: 2022-02-22 09:24:26
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\vite.config.ts
 * 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  envDir: path.join(__dirname, 'src/env/'), //环境变量配置路径
  plugins: [vue()],
  server: {
    open: true,
  }
})
