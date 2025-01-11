import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/next': {
        target: 'http://localhost:3000', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/next/, ''),
      },
    },
  },
})
