// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'rwwise.dev',
  tagline: 'Rick\'s Web & AWS Playground',
  url: 'https://www.rwwise.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/zangrum-icon.ico',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          //Please change this to your repo.
          editUrl:
           'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
 
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'projects', // omitted => default instance
        path: 'projects',
        routeBasePath: 'projects',
        sidebarPath: require.resolve('./sidebarsProjects.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mylego',
        path: 'mylego',
        routeBasePath: 'mylego',
        sidebarPath: require.resolve('./sidebarsMyLego.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tabletopgames',
        path: 'tabletopgames',
        routeBasePath: 'tabletopgames',
        sidebarPath: require.resolve('./sidebarsTableTopGames.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/zangrum-icon.pn',
      navbar: {
        title: 'rwwise.dev',
        logo: {
          alt: 'Zangrum\'s Icon',
          src: 'img/zangrum-icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: '/projects/intro',
            activeBaseRegex: '/projects/',
            position: 'left',
            label: 'Projects',
          },
          {
            to: '/mylego/intro',
            activeBaseRegex: '/mylego/',
            position: 'left',
            label: 'My Lego',
          },
          {
            to: '/tabletopgames/intro',
            activeBaseRegex: '/tabletopgames/',
            position: 'left',
            label: 'Table Top Games',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Other Sites',
            items: [
              {
                label: 'rwwise.us',
                to: 'https://www.rwwise.us',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Richard W. Wise. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },
};
console.log("docusaurus.config.js: ",config);
console.log("docusaurus.config.js: ",config.plugins[0][1]);

module.exports = config;
