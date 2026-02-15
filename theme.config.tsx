import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 800 }}>SanctumAI Docs</span>,
  project: {
    link: 'https://github.com/SanctumSec/sanctum',
  },
  docsRepositoryBase: 'https://github.com/SanctumSec/sanctum-docs/tree/main',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="SanctumAI — Identity Control Plane for Autonomous AI Agents" />
      <meta name="og:title" content="SanctumAI Documentation" />
    </>
  ),
  banner: {
    key: 'beta-banner',
    content: '🚧 SanctumAI is in beta. APIs may change before v1.0.',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  footer: {
    content: (
      <span>
        © {new Date().getFullYear()} SanctumAI · <a href="https://sanctumai.dev">sanctumai.dev</a>
      </span>
    ),
  },
}

export default config
