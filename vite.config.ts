import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~]/,
        replacement: '',
      },
      {
        find: 'root',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: 'app',
        replacement: path.resolve(__dirname, 'src/app'),
      },
      {
        find: 'processes',
        replacement: path.resolve(__dirname, 'src/processes'),
      },
      {
        find: 'pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: 'widgets',
        replacement: path.resolve(__dirname, 'src/widgets'),
      },
      {
        find: 'features',
        replacement: path.resolve(__dirname, 'src/features'),
      },
      {
        find: 'entities',
        replacement: path.resolve(__dirname, 'src/entities'),
      },
      {
        find: 'shared',
        replacement: path.resolve(__dirname, 'src/shared'),
      },
    ],
    extensions: ['.css', '.scss', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
});
