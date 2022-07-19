// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
const lightCodeTheme = require("prism-react-renderer/themes/github");
// @ts-ignore
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Does it meta?",
  tagline: "NFTs are cool",
  url: "https://doesitmeta.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "doesitmeta", // Usually your GitHub org/user name.
  projectName: "doesitmeta.github.io", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  customFields: {
    resolve: {
      fallback: { fs: false },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  // @ts-ignore
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    // @ts-ignore
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      navbar: {
        style: "primary",
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/cuube-loogo200x200.svg",
        },
        items: [
          {
            type: "doc",
            docId: "meta",
            position: "left",
            label: "Tutorial",
          },

          { to: "/treasure_hunt", label: "Treasure_Hunt", position: "left" },
          {
            href: "https://testnets.opensea.io/collection/nft-sketch-collection",
            label: "NFT_Sketch_Collection",
            position: "left",
          },
          {
            href: "/about",
            label: "The_D.A.O",
            position: "left",
          },
          {
            href: "https://github.com/doesitmeta",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Does it META ?",
            items: [
              {
                label: "Tutorial",
                to: "/docs/meta",
              },
              {
                label: "Treasure_Hunt",
                to: "/treasure_hunt",
              },
              {
                label: "NFT_Sketch_Collection",
                href: "https://testnets.opensea.io/collection/nft-sketch-collection",
              },
              {
                label: "The_D.A.O",
                href: "/about",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UCpksmtvlhhzLWv98DMTYbVw",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/doesitmeta_tuberlin",
              },
              {
                label: "TikTok",
                href: "https://vm.tiktok.com/ZMNrKa663",
              },
              {
                label: "GitHub",
                href: "https://github.com/doesitmeta",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Metaspaces, TU Berlin. \n Built with ♥️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  // @ts-ignore
};

module.exports = config;
