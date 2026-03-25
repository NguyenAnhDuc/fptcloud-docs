import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "FPT Cloud Docs",
  tagline: "FPT Smart Cloud Documentation",
  favicon: "img/favicon.ico",
  url: "https://fptcloud-docs.ducna.xyz",
  baseUrl: "/",
  onBrokenLinks: "warn",
  trailingSlash: true,
  onBrokenMarkdownLinks: "warn",
  markdown: { format: "md" },
  i18n: {
    defaultLocale: "vi",
    locales: ["vi", "en", "ja"],
    localeConfigs: {
      vi: { label: "🇻🇳 Tiếng Việt", htmlLang: "vi" },
      en: { label: "🇬🇧 English", htmlLang: "en" },
      ja: { label: "🇯🇵 日本語", htmlLang: "ja" },
    },
  },
  presets: [
    ["classic", {
      docs: {
        routeBasePath: "/",
        path: "docs",
        sidebarPath: "./sidebars.ts",
      },
      blog: false,
      theme: { customCss: "./src/css/custom.css" },
    } satisfies Preset.Options],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "vi", "ja"],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/",
        searchResultLimits: 10,
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "FPT Cloud Docs",
      logo: {
        alt: "FPT Cloud Logo",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "defaultSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "FPT Cloud",
          items: [
            { label: "FPT Cloud Portal", href: "https://console.fptcloud.com" },
            { label: "FPT Cloud Website", href: "https://fptcloud.com" },
          ],
        },
        {
          title: "Support",
          items: [
            { label: "Contact Support", href: "https://fptcloud.com/contact" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FPT Smart Cloud. All rights reserved.`,
    },
  } satisfies Preset.ThemeConfig,
};
export default config;
