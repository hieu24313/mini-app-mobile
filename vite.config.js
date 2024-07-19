// import { defineConfig } from 'vite'
// import reactRefresh from '@vitejs/plugin-react-refresh'

// // https://vitejs.dev/config/
// export default () => {
//   return defineConfig({
//     root: './src',
//     base: '',
//     plugins: [reactRefresh()],
//   })
// }
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react(), 
    {
      name: 'override-config',
      config: () => ({
        build: {
          target: 'esnext',
        },
      }),
    }
  ],
  base: "./",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].[hash].module.js",
        chunkFileNames: "assets/[name].[hash].module.js",
      },
    },
  },
});