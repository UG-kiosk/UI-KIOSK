import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    indexHtmlFile: './index.html',
    supportFile: false,
  },
  fixturesFolder: false,
  video: false,
  screenshotOnRunFailure: false,
});
