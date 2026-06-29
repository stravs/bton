// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://bton.si',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Use the built-in sharp service for optimized responsive images.
    responsiveStyles: true,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
