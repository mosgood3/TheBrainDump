/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://thebraindump.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/auth/'],
      },
    ],
  },
  exclude: ['/api/*', '/auth/*', '/auth/auth-code-error', '/auth/reset-password', '/verify-email', '/payment/*'],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority for specific pages
    const priorities = {
      '/': 1.0,
      '/lessons': 0.9,
      '/resources': 0.7,
      '/faq': 0.6,
      '/legal/privacy': 0.3,
      '/legal/terms': 0.3,
      '/legal/disclaimer': 0.3,
      '/legal/crisis-resources': 0.5,
    };

    const changefreqs = {
      '/': 'monthly',
      '/lessons': 'weekly',
      '/resources': 'monthly',
      '/faq': 'monthly',
      '/legal/privacy': 'yearly',
      '/legal/terms': 'yearly',
      '/legal/disclaimer': 'yearly',
      '/legal/crisis-resources': 'monthly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
