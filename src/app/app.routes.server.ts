import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'test/:level',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { level: '1' },
        { level: '2' },
        { level: '3' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
