import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const organizationName = 'pwningcode'
const projectName = 'community-network';
const deploymentBranch = 'gh-pages';

const config: Config = {
  title: 'Our Community Network App',
  tagline: 'A platform that empowers local communities with sufficiency, resiliency, and camaraderie',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  deploymentBranch,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // https://holocron.so/github/pr/{owner}/{repo}/{branch}/editor/{path}
          // editUrl: `https://github.com/${organizationName}/${projectName}/tree/${deploymentBranch}/`,
          editUrl: `https://holocron.so/github/${organizationName}/${projectName}/edits/editor/`,
        },
        blog: {
          blogTitle: 'News',
          blogSidebarTitle: 'News',
          showReadingTime: true,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: `https://github.com/${organizationName}/${projectName}/tree/${deploymentBranch}/`,
          editUrl: `https://holocron.so/github/${organizationName}/${projectName}/edits/editor/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Our Community Network App',
      hideOnScroll: true,
      logo: {
        alt: 'Our Community Network',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/blog', label: 'News', position: 'left' },
        { to: '/roadmap', label: 'Roadmap', position: 'left' },
        { to: '/discussions', label: 'Discussions', position: 'left' },
        { to: '/feedback', label: 'Feedback', position: 'left' },
        {
          type: 'dropdown',
          label: 'Documentation',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'guide',
              label: 'User Guide',
            },
            {
              type: 'docSidebar',
              sidebarId: 'knowledge',
              label: 'Knowledge Base',
            },
            {
              type: 'docSidebar',
              sidebarId: 'research',
              label: 'Community Research',
            },
            {
              type: 'docSidebar',
              sidebarId: 'requirements',
              label: 'Requirements',
            },
            {
              type: 'docSidebar',
              sidebarId: 'technical',
              label: 'Technical Requirements',
            },
          ],
        },

        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
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
              href: `https://github.com/${organizationName}/${projectName}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jason A Barnes`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
