import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

// Reemplaza con el dominio de tu aplicación en Netlify
const hostname = 'https://allnaturaljoyas.com';

// Lista de rutas
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/products', changefreq: 'weekly', priority: 0.8 },
  { url: '/blogs', changefreq: 'weekly', priority: 0.7 },
  { url: '/blog/:postID', changefreq: 'monthly', priority: 0.6 },
  { url: '/product/:productID', changefreq: 'monthly', priority: 0.6 },
  { url: '/about', changefreq: 'yearly', priority: 0.5 },
  { url: '/faq', changefreq: 'yearly', priority: 0.5 },
];

// Genera el sitemap
async function generateSitemap() {
  const stream = new SitemapStream({ hostname });
  const writeStream = createWriteStream('./public/sitemap.xml');

  Readable.from(links).pipe(stream).pipe(writeStream);

  await streamToPromise(stream);
  console.log('Sitemap generado exitosamente en public/sitemap.xml');
}

generateSitemap().catch(console.error);
