import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // or '0.0.0.0'
    proxy:{
      '/api' :{
        target : 'http://localhost:3000',
        secure : false
      }
    }
  },
});