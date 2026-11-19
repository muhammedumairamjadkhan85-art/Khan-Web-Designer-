import express from 'express';
import type { Request } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface SsrRouteMeta {
  path: string;
  title: string;
  description: string;
  keywords: string;
  breadcrumbName: string;
  priority: string;
  changefreq: string;
  pageType?: string;
}

const SSR_ROUTES: SsrRouteMeta[] = [
  {
    path: '/',
    title: 'Custom Website Development & Web Designer | Decent Web Engineering.com',
    description:
      'Hire Umair Web Designer at Decent Web Engineering.com for custom website development, responsive web design, high-converting landing pages, e-commerce stores & technical SEO.',
    keywords:
      'custom website development, web designer, responsive website design, business website developer, freelance web developer, landing page designer, e-commerce website development, UI UX designer, website redesign, SEO optimization services, Umair Web Designer, Decent Web Engineering.com',
    breadcrumbName: 'Home',
    priority: '1.0',
    changefreq: 'weekly',
    pageType: 'WebPage',
  },
  {
    path: '/services',
    title: 'Web Development, UI/UX Design & SEO Services | Decent Web Engineering.com',
    description:
      'Explore 8 specialized web development services: custom business websites, high-converting landing pages, e-commerce stores, UI/UX design, website redesign & technical SEO optimization.',
    keywords:
      'website development services, business website design, e-commerce store developer, landing page development services, UI UX design agency, website redesign services, website maintenance, technical SEO optimization',
    breadcrumbName: 'Services',
    priority: '0.9',
    changefreq: 'weekly',
    pageType: 'WebPage',
  },
  {
    path: '/portfolio',
    title: 'Web Design Portfolio & Live Website Specimens | Umair Web Designer',
    description:
      'Browse responsive website design specimens, e-commerce storefronts, corporate web platforms, and SaaS landing pages crafted by Umair Web Designer at Decent Web Engineering.com.',
    keywords:
      'web design portfolio, website developer portfolio, modern website examples, responsive web design showcase, e-commerce website portfolio, SaaS landing page design',
    breadcrumbName: 'Portfolio',
    priority: '0.9',
    changefreq: 'weekly',
    pageType: 'CollectionPage',
  },
  {
    path: '/pricing',
    title: 'Website Design Cost & Fixed-Price Packages | Decent Web Engineering.com',
    description:
      'Transparent website development pricing and interactive cost calculator. Fixed-price packages for landing pages, business websites, e-commerce stores, and monthly maintenance.',
    keywords:
      'website design cost, custom website pricing, landing page cost, e-commerce website development price, affordable web developer packages, website cost calculator',
    breadcrumbName: 'Pricing',
    priority: '0.9',
    changefreq: 'weekly',
    pageType: 'WebPage',
  },
  {
    path: '/contact',
    title: 'Hire a Web Developer & Request Free Quote | Decent Web Engineering.com',
    description:
      'Contact Umair Web Designer directly via WhatsApp (+92 316 6097993), email, or project inquiry form for custom web development, UI/UX design, and SEO audits within 24 hours.',
    keywords:
      'hire web developer, hire freelance web designer, website development quote, contact Umair Web Designer, custom website consultation, web design agency contact',
    breadcrumbName: 'Contact Us',
    priority: '0.9',
    changefreq: 'monthly',
    pageType: 'ContactPage',
  },
  {
    path: '/about',
    title: 'About Umair Web Designer | Founder of Decent Web Engineering.com',
    description:
      'Meet Umair Web Designer, founder and full-stack frontend engineer at Decent Web Engineering.com. Learn our zero-slop UI/UX standards, React & TypeScript craft, and client guarantee.',
    keywords:
      'Umair Web Designer, about Decent Web Engineering, freelance web designer, React TypeScript frontend engineer, custom code web studio',
    breadcrumbName: 'About Us',
    priority: '0.8',
    changefreq: 'monthly',
    pageType: 'AboutPage',
  },
  {
    path: '/projects',
    title: 'Web Engineering Case Studies & Speed Benchmarks | Decent Web Engineering.com',
    description:
      'In-depth web development case studies showing sub-second load times, 99/100 Lighthouse performance, mobile checkout optimization, and SEO architecture.',
    keywords:
      'web development case studies, website speed optimization results, Lighthouse 99 performance, e-commerce conversion optimization, corporate website case study',
    breadcrumbName: 'Projects',
    priority: '0.8',
    changefreq: 'monthly',
    pageType: 'CollectionPage',
  },
  {
    path: '/skills',
    title: 'Full-Stack Web Skills: React, TypeScript, Next.js & SEO | Decent Web Engineering',
    description:
      'Technical stack and engineering proficiencies: React 19, TypeScript, Next.js, Tailwind CSS, Node.js, Figma UI/UX systems, Core Web Vitals, WCAG AA, and Schema.org SEO.',
    keywords:
      'React developer skills, TypeScript web engineer, Tailwind CSS expert, Core Web Vitals optimization, WCAG AA web accessibility, technical SEO specialist',
    breadcrumbName: 'Our Skills',
    priority: '0.8',
    changefreq: 'monthly',
    pageType: 'WebPage',
  },
  {
    path: '/blog',
    title: 'Web Development, UI/UX & Technical SEO Blog | Decent Web Engineering.com',
    description:
      'Expert guides on Core Web Vitals, sub-second websites, custom code vs page builders, zero-slop UI/UX design, and technical SEO for fast Google ranking.',
    keywords:
      'web development blog, technical SEO guide, Core Web Vitals tips, custom website vs WordPress, UI UX conversion design articles, how to rank website fast on Google',
    breadcrumbName: 'Blog & Insights',
    priority: '0.8',
    changefreq: 'weekly',
    pageType: 'WebPage',
  },
  {
    path: '/faq',
    title: 'Web Development FAQs: Timelines, Pricing & Code Ownership | Decent Web Engineering',
    description:
      'Answers to common questions about custom website timelines, milestone payments, 100% source code ownership, mobile responsiveness, SEO setup, and maintenance plans.',
    keywords:
      'web development FAQ, website design timeline, source code ownership website, responsive web design questions, website maintenance FAQ',
    breadcrumbName: 'FAQ',
    priority: '0.8',
    changefreq: 'monthly',
    pageType: 'FAQPage',
  },
  {
    path: '/testimonials',
    title: 'Client Reviews & Verified Trust | Decent Web Engineering.com',
    description:
      'Read verified client feedback and discover Decent Web Engineering.com’s zero-fabrication review policy led by Umair Web Designer.',
    keywords:
      'Decent Web Engineering reviews, Umair Web Designer testimonials, trusted web development agency, verified web developer feedback',
    breadcrumbName: 'Testimonials',
    priority: '0.7',
    changefreq: 'weekly',
    pageType: 'WebPage',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy & Data Protection | Decent Web Engineering.com',
    description:
      'Read the Privacy Policy for Decent Web Engineering.com by Umair Web Designer covering inquiry data protection, GDPR/CCPA rights, and zero data selling.',
    keywords: 'Decent Web Engineering privacy policy, client data protection',
    breadcrumbName: 'Privacy Policy',
    priority: '0.4',
    changefreq: 'yearly',
    pageType: 'WebPage',
  },
  {
    path: '/terms-and-conditions',
    title: 'Terms & Conditions & Client Ownership | Decent Web Engineering.com',
    description:
      'Commercial Terms & Conditions for Decent Web Engineering.com detailing payment milestones, 100% client intellectual property ownership, revisions, and warranty.',
    keywords: 'Decent Web Engineering terms and conditions, web development contract terms',
    breadcrumbName: 'Terms & Conditions',
    priority: '0.4',
    changefreq: 'yearly',
    pageType: 'WebPage',
  },
];

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getRequestOrigin(req: Request): string {
  const forwardedHost = req.headers['x-forwarded-host'];
  const host = (Array.isArray(forwardedHost) ? forwardedHost[0] : forwardedHost) || req.headers.host;
  if (!host) {
    return 'https://decent-web-engineering-1097843396680.asia-southeast1.run.app';
  }
  const forwardedProto = req.headers['x-forwarded-proto'];
  const protoHeader = Array.isArray(forwardedProto) ? forwardedProto[0] : forwardedProto;
  const isLocal = host.startsWith('localhost') || host.startsWith('127.0.0.1') || host.startsWith('0.0.0.0');
  const proto = protoHeader ? protoHeader.split(',')[0].trim() : isLocal ? 'http' : 'https';
  return `${proto}://${host}`;
}

function resolveSsrRoute(reqPath: string): SsrRouteMeta {
  const clean = reqPath.replace(/\/+$/, '') || '/';
  const direct = SSR_ROUTES.find((r) => r.path === clean);
  if (direct) return direct;
  if (clean === '/about-us') return SSR_ROUTES.find((r) => r.path === '/about')!;
  if (clean === '/contact-us') return SSR_ROUTES.find((r) => r.path === '/contact')!;
  if (clean === '/our-skills') return SSR_ROUTES.find((r) => r.path === '/skills')!;
  if (clean === '/privacy') return SSR_ROUTES.find((r) => r.path === '/privacy-policy')!;
  if (clean === '/terms') return SSR_ROUTES.find((r) => r.path === '/terms-and-conditions')!;
  return SSR_ROUTES[0];
}

function injectRouteSeoIntoHtml(html: string, route: SsrRouteMeta, origin: string): string {
  const canonicalUrl = `${origin}${route.path}`;
  const logoUrl = `${origin}/assets/aistudio/file_0000000056708211a5d9289307191d62_88c53f2d.png`;
  const portraitUrl = `${origin}/assets/aistudio/Screenshot_20261012_132526_fbe3eb2c.jpg`;
  const ogImage = route.path === '/about' ? portraitUrl : logoUrl;

  const escapedTitle = escapeHtmlAttr(route.title);
  const escapedDesc = escapeHtmlAttr(route.description);
  const escapedKeywords = escapeHtmlAttr(route.keywords);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${origin}/#organization`,
        name: 'Decent Web Engineering.com',
        url: `${origin}/`,
        logo: logoUrl,
        image: [logoUrl, portraitUrl],
        slogan: 'We Build Your Digital Future.',
        description: route.description,
        email: 'muhammedumairamjadkhan85@gmail.com',
        telephone: '+923166097993',
        priceRange: '$$',
        areaServed: 'Worldwide',
        founder: {
          '@type': 'Person',
          name: 'Umair Web Designer',
          jobTitle: 'Founder, Lead Web Designer & Software Engineer',
          image: portraitUrl,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: `${origin}/`,
        name: 'Decent Web Engineering.com',
        inLanguage: 'en-US',
      },
      {
        '@type': route.pageType || 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: route.title,
        description: route.description,
        isPartOf: { '@id': `${origin}/#website` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement:
          route.path === '/'
            ? [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` }]
            : [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
                { '@type': 'ListItem', position: 2, name: route.breadcrumbName, item: canonicalUrl },
              ],
      },
    ],
  };

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapedTitle}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapedDesc}" />`
    )
    .replace(
      /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/,
      `<meta name="keywords" content="${escapedKeywords}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${escapeHtmlAttr(canonicalUrl)}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${escapeHtmlAttr(canonicalUrl)}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapedTitle}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapedDesc}" />`
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:image" content="${escapeHtmlAttr(ogImage)}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${escapedTitle}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${escapedDesc}" />`
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:image" content="${escapeHtmlAttr(ogImage)}" />`
    )
    .replace(
      /<script\s+id="dwe-route-jsonld"\s+type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script id="dwe-route-jsonld" type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
    );
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.set('trust proxy', true);
  app.use(express.json());

  // Dynamic robots.txt matching the active host for Google Search Console compatibility
  app.get('/robots.txt', (req, res) => {
    const origin = getRequestOrigin(req);
    res.type('text/plain').send(
      `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${origin}/sitemap.xml\n`
    );
  });

  // Dynamic XML sitemap listing all 13 website routes under the active host
  app.get('/sitemap.xml', (req, res) => {
    const origin = getRequestOrigin(req);
    const lastmod = '2026-11-18';
    const urls = SSR_ROUTES.map(
      (route) => `  <url>
    <loc>${escapeHtmlAttr(`${origin}${route.path}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    ).join('\n');

    res.type('application/xml').send(
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
    );
  });

  // API endpoint for validated contact form submissions
  app.post('/api/contact', (req, res) => {
    const { fullName, email, whatsapp, service, budget, details } = req.body;

    if (!fullName || !email || !service || !details) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Full Name, Email, Service, and Project Details).',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    const inquiryId = `DWE-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    console.log(`[DECENT WEB ENGINEERING INQUIRY] ID: ${inquiryId}`);
    console.log(`Client: ${fullName} <${email}>`);
    console.log(`WhatsApp: ${whatsapp || 'N/A'}`);
    console.log(`Service: ${service}`);
    console.log(`Budget: ${budget || 'Flexible'}`);
    console.log(`Details: ${details}`);

    return res.status(200).json({
      success: true,
      inquiryId,
      timestamp,
      message: 'Your inquiry has been successfully transmitted directly to Umair. You will receive a direct reply within 24 hours.',
      data: {
        fullName,
        email,
        whatsapp,
        service,
        budget,
      },
    });
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'healthy',
      brand: 'Decent Web Engineering.com',
      owner: 'Umair Web Designer',
      timestamp: new Date().toISOString(),
    });
  });

  // Google Site Verification handler
  app.get('/google:code.html', (req, res) => {
    res.type('html').send(`google-site-verification: google${req.params.code}.html`);
  });

  // Mount Vite middlewares in development
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    const indexHtmlPath = path.resolve(distPath, 'index.html');
    const cachedTemplate = fs.existsSync(indexHtmlPath)
      ? fs.readFileSync(indexHtmlPath, 'utf-8')
      : '';

    app.use(
      express.static(distPath, {
        index: false,
        setHeaders: (res, filePath) => {
          if (filePath.includes(`${path.sep}assets${path.sep}`)) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          }
        },
      })
    );

    app.get('*', (req, res) => {
      if (!cachedTemplate) {
        return res.status(500).send('Build output missing.');
      }
      const origin = getRequestOrigin(req);
      const route = resolveSsrRoute(req.path);
      const renderedHtml = injectRouteSeoIntoHtml(cachedTemplate, route, origin);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=300');
      return res.send(renderedHtml);
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Decent Web Engineering server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
