import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { dirname } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@assets' : path.resolve(__dirname , './src/assets'),
      '@components' : path.resolve(__dirname , './src/components')
    }
  },
  plugins: [react()],
  
})
