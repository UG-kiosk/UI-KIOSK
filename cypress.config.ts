import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: './cypress/fixtures',
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: './cypress/support/e2e.tsx',
  },
});
