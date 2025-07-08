/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://drebarrera.com',
  generateRobotsTxt: true,
  exclude: [
    '/startups/*',
    '/startups',
    '/corazon',
    '/austin-nonprofits'
  ]
}
