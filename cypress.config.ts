import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    // indexHtmlFile: './cypress/support/component-index.html',
    // supportFile: './cypress/support/component.tsx',
  },
  fixturesFolder: false,
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: './cypress/support/e2e.tsx',
  },
});
