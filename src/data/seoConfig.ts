import { PageId } from '../types';

export interface SeoRouteMeta {
  pageId: PageId;
  path: string;
  title: string;
  description: string;
  keywords: string;
  breadcrumbName: string;
  priority: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export const BRAND_LOGO_PATH = '/assets/aistudio/file_0000000056708211a5d9289307191d62_88c53f2d.png';
export const OWNER_PORTRAIT_PATH = '/assets/aistudio/Screenshot_20261012_132526_fbe3eb2c.jpg';

export const SEO_ROUTES: Record<PageId, SeoRouteMeta> = {
  home: {
    pageId: 'home',
    path: '/',
    title: 'Custom Website Development & Web Designer | Decent Web Engineering.com',
    description:
      'Hire Umair Web Designer at Decent Web Engineering.com for custom website development, responsive web design, high-converting landing pages, e-commerce stores & technical SEO.',
    keywords:
      'custom website development, web designer, responsive website design, business website developer, freelance web developer, landing page designer, e-commerce website development, UI UX designer, website redesign, SEO optimization services, Umair Web Designer, Decent Web Engineering.com',
    breadcrumbName: 'Home',
    priority: '1.0',
    changefreq: 'weekly',
  },
  services: {
    pageId: 'services',
    path: '/services',
    title: 'Web Development, UI/UX Design & SEO Services | Decent Web Engineering.com',
    description:
      'Explore 8 specialized web development services: custom business websites, high-converting landing pages, e-commerce stores, UI/UX design, website redesign & technical SEO optimization.',
    keywords:
      'website development services, business website design, e-commerce store developer, landing page development services, UI UX design agency, website redesign services, website maintenance, technical SEO optimization',
    breadcrumbName: 'Services',
    priority: '0.9',
    changefreq: 'weekly',
  },
  portfolio: {
    pageId: 'portfolio',
    path: '/portfolio',
    title: 'Web Design Portfolio & Live Website Specimens | Umair Web Designer',
    description:
      'Browse responsive website design specimens, e-commerce storefronts, corporate web platforms, and SaaS landing pages crafted by Umair Web Designer at Decent Web Engineering.com.',
    keywords:
      'web design portfolio, website developer portfolio, modern website examples, responsive web design showcase, e-commerce website portfolio, SaaS landing page design',
    breadcrumbName: 'Portfolio',
    priority: '0.9',
    changefreq: 'weekly',
  },
  pricing: {
    pageId: 'pricing',
    path: '/pricing',
    title: 'Website Design Cost & Fixed-Price Packages | Decent Web Engineering.com',
    description:
      'Transparent website development pricing and interactive cost calculator. Fixed-price packages for landing pages, business websites, e-commerce stores, and monthly maintenance.',
    keywords:
      'website design cost, custom website pricing, landing page cost, e-commerce website development price, affordable web developer packages, website cost calculator',
    breadcrumbName: 'Pricing',
    priority: '0.9',
    changefreq: 'weekly',
  },
  contact: {
    pageId: 'contact',
    path: '/contact',
    title: 'Hire a Web Developer & Request Free Quote | Decent Web Engineering.com',
    description:
      'Contact Umair Web Designer directly via WhatsApp (+92 316 6097993), email, or project inquiry form for custom web development, UI/UX design, and SEO audits within 24 hours.',
    keywords:
      'hire web developer, hire freelance web designer, website development quote, contact Umair Web Designer, custom website consultation, web design agency contact',
    breadcrumbName: 'Contact Us',
    priority: '0.9',
    changefreq: 'monthly',
  },
  about: {
    pageId: 'about',
    path: '/about',
    title: 'About Umair Web Designer | Founder of Decent Web Engineering.com',
    description:
      'Meet Umair Web Designer, founder and full-stack frontend engineer at Decent Web Engineering.com. Learn our zero-slop UI/UX standards, React & TypeScript craft, and client guarantee.',
    keywords:
      'Umair Web Designer, about Decent Web Engineering, freelance web designer, React TypeScript frontend engineer, custom code web studio',
    breadcrumbName: 'About Us',
    priority: '0.8',
    changefreq: 'monthly',
  },
  projects: {
    pageId: 'projects',
    path: '/projects',
    title: 'Web Engineering Case Studies & Speed Benchmarks | Decent Web Engineering.com',
    description:
      'In-depth web development case studies showing sub-second load times, 99/100 Lighthouse performance, mobile checkout optimization, and SEO architecture.',
    keywords:
      'web development case studies, website speed optimization results, Lighthouse 99 performance, e-commerce conversion optimization, corporate website case study',
    breadcrumbName: 'Projects',
    priority: '0.8',
    changefreq: 'monthly',
  },
  skills: {
    pageId: 'skills',
    path: '/skills',
    title: 'Full-Stack Web Skills: React, TypeScript, Next.js & SEO | Decent Web Engineering',
    description:
      'Technical stack and engineering proficiencies: React 19, TypeScript, Next.js, Tailwind CSS, Node.js, Figma UI/UX systems, Core Web Vitals, WCAG AA, and Schema.org SEO.',
    keywords:
      'React developer skills, TypeScript web engineer, Tailwind CSS expert, Core Web Vitals optimization, WCAG AA web accessibility, technical SEO specialist',
    breadcrumbName: 'Our Skills',
    priority: '0.8',
    changefreq: 'monthly',
  },
  testimonials: {
    pageId: 'testimonials',
    path: '/testimonials',
    title: 'Client Reviews & Verified Trust | Decent Web Engineering.com',
    description:
      'Read verified client feedback and discover Decent Web Engineering.com’s zero-fabrication review policy led by Umair Web Designer.',
    keywords:
      'Decent Web Engineering reviews, Umair Web Designer testimonials, trusted web development agency, verified web developer feedback',
    breadcrumbName: 'Testimonials',
    priority: '0.7',
    changefreq: 'weekly',
  },
  blog: {
    pageId: 'blog',
    path: '/blog',
    title: 'Web Development, UI/UX & Technical SEO Blog | Decent Web Engineering.com',
    description:
      'Expert guides on Core Web Vitals, sub-second websites, custom code vs page builders, zero-slop UI/UX design, and technical SEO for fast Google ranking.',
    keywords:
      'web development blog, technical SEO guide, Core Web Vitals tips, custom website vs WordPress, UI UX conversion design articles, how to rank website fast on Google',
    breadcrumbName: 'Blog & Insights',
    priority: '0.8',
    changefreq: 'weekly',
  },
  faq: {
    pageId: 'faq',
    path: '/faq',
    title: 'Web Development FAQs: Timelines, Pricing & Code Ownership | Decent Web Engineering',
    description:
      'Answers to common questions about custom website timelines, milestone payments, 100% source code ownership, mobile responsiveness, SEO setup, and maintenance plans.',
    keywords:
      'web development FAQ, website design timeline, source code ownership website, responsive web design questions, website maintenance FAQ',
    breadcrumbName: 'FAQ',
    priority: '0.8',
    changefreq: 'monthly',
  },
  privacy: {
    pageId: 'privacy',
    path: '/privacy-policy',
    title: 'Privacy Policy & Data Protection | Decent Web Engineering.com',
    description:
      'Read the Privacy Policy for Decent Web Engineering.com by Umair Web Designer covering inquiry data protection, GDPR/CCPA rights, and zero data selling.',
    keywords: 'Decent Web Engineering privacy policy, client data protection',
    breadcrumbName: 'Privacy Policy',
    priority: '0.4',
    changefreq: 'yearly',
  },
  terms: {
    pageId: 'terms',
    path: '/terms-and-conditions',
    title: 'Terms & Conditions & Client Ownership | Decent Web Engineering.com',
    description:
      'Commercial Terms & Conditions for Decent Web Engineering.com detailing payment milestones, 100% client intellectual property ownership, revisions, and warranty.',
    keywords: 'Decent Web Engineering terms and conditions, web development contract terms',
    breadcrumbName: 'Terms & Conditions',
    priority: '0.4',
    changefreq: 'yearly',
  },
};

export const PAGE_PATHS: Record<PageId, string> = Object.fromEntries(
  (Object.keys(SEO_ROUTES) as PageId[]).map((id) => [id, SEO_ROUTES[id].path])
) as Record<PageId, string>;

export function getPageFromPath(pathname: string): PageId {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const match = (Object.values(SEO_ROUTES) as SeoRouteMeta[]).find(
    (route) => route.path === clean
  );
  if (match) return match.pageId;

  // Friendly aliases for common crawler/user URLs
  if (clean === '/about-us') return 'about';
  if (clean === '/contact-us') return 'contact';
  if (clean === '/our-skills') return 'skills';
  if (clean === '/privacy') return 'privacy';
  if (clean === '/terms') return 'terms';

  return 'home';
}

export function buildRouteJsonLd(pageId: PageId, origin: string): Record<string, unknown> {
  const route = SEO_ROUTES[pageId];
  const canonicalUrl = `${origin}${route.path === '/' ? '/' : route.path}`;
  const logoUrl = `${origin}${BRAND_LOGO_PATH}`;
  const portraitUrl = `${origin}${OWNER_PORTRAIT_PATH}`;

  const baseOrganization = {
    '@type': 'ProfessionalService',
    '@id': `${origin}/#organization`,
    name: 'Decent Web Engineering.com',
    alternateName: 'Decent Web Engineering',
    url: `${origin}/`,
    logo: logoUrl,
    image: [logoUrl, portraitUrl],
    slogan: 'We Build Your Digital Future.',
    description:
      'Custom website development, responsive web design, high-converting landing pages, e-commerce stores, UI/UX design, and technical SEO optimization services led by Umair Web Designer.',
    email: 'muhammedumairamjadkhan85@gmail.com',
    telephone: '+923166097993',
    priceRange: '$$',
    currenciesAccepted: 'USD, EUR, GBP, PKR',
    areaServed: 'Worldwide',
    openingHours: 'Mo-Sa 09:00-20:00',
    founder: {
      '@type': 'Person',
      '@id': `${origin}/#founder`,
      name: 'Umair Web Designer',
      jobTitle: 'Founder, Lead Web Designer & Full-Stack Software Engineer',
      image: portraitUrl,
      email: 'muhammedumairamjadkhan85@gmail.com',
      telephone: '+923166097993',
      knowsAbout: [
        'Custom Website Development',
        'Responsive Web Design',
        'React',
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'UI/UX Design',
        'E-commerce Development',
        'Technical SEO',
        'Core Web Vitals',
      ],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Engineering & Digital Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Website Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing Page Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce Website Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Portfolio Website Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Redesign' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Maintenance' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization Services' } },
      ],
    },
  };

  const webSite = {
    '@type': 'WebSite',
    '@id': `${origin}/#website`,
    url: `${origin}/`,
    name: 'Decent Web Engineering.com',
    description: route.description,
    publisher: { '@id': `${origin}/#organization` },
    inLanguage: 'en-US',
  };

  const breadcrumbList = {
    '@type': 'BreadcrumbList',
    itemListElement:
      pageId === 'home'
        ? [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${origin}/`,
            },
          ]
        : [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${origin}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: route.breadcrumbName,
              item: canonicalUrl,
            },
          ],
  };

  const webPage = {
    '@type':
      pageId === 'about'
        ? 'AboutPage'
        : pageId === 'contact'
        ? 'ContactPage'
        : pageId === 'portfolio' || pageId === 'projects'
        ? 'CollectionPage'
        : 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: route.title,
    description: route.description,
    isPartOf: { '@id': `${origin}/#website` },
    about: { '@id': `${origin}/#organization` },
    primaryImageOfPage: pageId === 'about' ? portraitUrl : logoUrl,
    inLanguage: 'en-US',
  };

  const graph: Record<string, unknown>[] = [baseOrganization, webSite, webPage, breadcrumbList];

  if (pageId === 'home' || pageId === 'faq' || pageId === 'services') {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does custom website development take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Landing pages take 5 to 10 days (with 72–96 hour rush sprints available), business websites take 2 to 4 weeks, and full e-commerce stores take 3 to 6 weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I own 100% of the website source code and copyright?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Once your project is completed, you own 100% of the source code, UI/UX design assets, and domain with zero vendor lock-in.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are all websites mobile-responsive and SEO optimized for Google?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every website by Decent Web Engineering.com is engineered mobile-first with Core Web Vitals optimization, semantic HTML5, OpenGraph tags, XML sitemaps, and Schema.org JSON-LD structured data for fast Google ranking.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the cost of a custom website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fixed-price packages start at $499 for a high-converting Landing Page Starter, $1,299 for a Business Growth Website, and $2,499 for an E-commerce Flagship storefront.',
          },
        },
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function applyClientSeo(pageId: PageId, customBrandName?: string) {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;

  const route = SEO_ROUTES[pageId] || SEO_ROUTES.home;
  const origin = window.location.origin;
  const canonicalUrl = `${origin}${route.path === '/' ? '/' : route.path}`;
  const ogImageUrl = `${origin}${pageId === 'about' ? OWNER_PORTRAIT_PATH : BRAND_LOGO_PATH}`;

  const title =
    customBrandName && customBrandName !== 'Decent Web Engineering.com'
      ? route.title.replace(/Decent Web Engineering\.com/g, customBrandName)
      : route.title;

  document.title = title;
  upsertMeta('name', 'description', route.description);
  upsertMeta('name', 'keywords', route.keywords);
  upsertMeta(
    'name',
    'robots',
    'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  );
  upsertLink('canonical', canonicalUrl);

  upsertMeta('property', 'og:type', pageId === 'blog' ? 'article' : 'website');
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', route.description);
  upsertMeta('property', 'og:url', canonicalUrl);
  upsertMeta('property', 'og:image', ogImageUrl);

  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', route.description);
  upsertMeta('name', 'twitter:image', ogImageUrl);

  const jsonLdScriptId = 'dwe-route-jsonld';
  let scriptEl = document.getElementById(jsonLdScriptId) as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = jsonLdScriptId;
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(buildRouteJsonLd(pageId, origin));
}
