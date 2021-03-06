// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ekidney blog',
  tagline: 'A blog by ekidney',
  url: 'https://ekidney-blog.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/eknew3.png',
  organizationName: 'ekidneyrh', // Usually your GitHub org/user name.
  projectName: 'ekidneyblog', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: 'A blog by ekidney',
          blogDescription: 'Documenting experience as a design intern for Fedora.',
          path: './blog',
          editUrl: 'https://github.com/',
          showReadingTime: true,
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ekidneys blog',
        logo: {
          alt: 'My Site Logo',
          src: 'img/eknew3.png',
        },
        items: [
         // {
          //  type: 'doc',
           // docId: 'intro',
           // position: 'left',
           // label: 'Tutorial',
         // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ekidneyrh/ekidneyblog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Fedora Community',
            items: [
              {
                label: 'Join Fedora',
                href: 'https://docs.fedoraproject.org/en-US/project/join/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/fedoracommunity',
              },
              {
                label: 'Fedora Magazine',
                href: 'https://fedoramagazine.org/',
              },
            ],
          },
          {
            title: 'More from ekidney',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ekidneyrh',
              },
              {
                label: 'IRC: @ekidney:matix.org',
                href: '/'
              },
              {
                label: 'Email: ekidney@redhat.com',
                href: '/'
              }
            ],
          },
        ],
        copyright: 'Built with Docusaurus.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
