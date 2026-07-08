import { services } from '../data/services';

const site = 'https://bton.si';
const staticPages = ['/', '/politika-zasebnosti/', '/pogoji-uporabe/'];

export async function GET() {
  const urls = [
    ...staticPages,
    ...services.map((service) => `/storitve/${service.id}/`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${site}${path}</loc>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/storitve') ? '0.9' : '0.3'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
