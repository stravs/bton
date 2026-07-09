// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://bton.si',
  trailingSlash: 'ignore',
  build: {
    // Inline the small CSS payload to remove render-blocking stylesheet requests.
    inlineStylesheets: 'always',
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
