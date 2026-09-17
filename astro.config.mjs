import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://danielhong.org',
  // Prefetches a page's HTML as soon as a link to it enters the viewport,
  // so the ClientRouter's view-transition swap has it ready instead of
  // fetching on click — makes nav feel instant on this mostly-static site.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
