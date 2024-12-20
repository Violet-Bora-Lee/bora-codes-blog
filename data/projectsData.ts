interface Project {
  title: string
  description: string
  link?: {
    href: string
    label: string
  }
  logo?: string
}

const projectsData: Project[] = [
  {
    title: 'AiGO Network',
    description:
      'As the lead blockchain engineer, I developed the MVP, designed the initial technical architecture, built the website, and presented at VC-focused conference.',
    link: { href: 'https://www.aigo.network/', label: 'www.aigo.network' },
    // TODO: add logo
  },
  {
    title: 'Ticker Capital',
    description:
      'Led the website renewal, integrated Google Analytics, and optimized for SEO to help internal decision-makers assess Ticker Capital’s brand awareness.',
    link: { href: 'https://www.ticker.capital/', label: 'www.ticker.capital' },
    // TODO: add logo
  },
  {
    title: 'Stargaze NFT Marketplace',
    description:
      'Fully responsible for all wallet-related tasks, including integrating MetaMask Snap for Cosmos projects. Developed and maintained the GraphQL resolver and client using a Rust-based indexer, and managed frontend tasks.',
    link: { href: 'https://www.stargaze.zone/', label: 'www.stargaze.zone' },
    // TODO: add logo
  },
  {
    title: 'Brokkr',
    description:
      'As a freelancer, I developed the Airdrop, IDO, and Protocol pages during a two-month engagement.',
    link: { href: 'https://brokkr.finance/', label: 'app.brokkr.finance' },
    // TODO: add logo
  },
  {
    title: 'Sturdy Exchange',
    description:
      'As a Senior Software Engineer, I minted 5,000 Flow-based NFTs for the HOODLUMS project, built the CI/CD pipeline, deployed the React-based frontend on Day 1, configured production-level settings such as SEO, and integrated monitoring and Intercom tools. Also managed engineering tasks and team priorities.',
  },
  {
    title: 'Musinsa',
    description:
      "Independently developed and optimized multiple frontend repositories at MUSINSA (13M+ users), South Korea's largest fashion commerce platform. Engineered a unified navigation(GNB, LNG, and FNB) architecture and led performance optimization initiatives for legacy projects.",
    link: { href: 'https://www.musinsa.com', label: 'www.musinsa.com' },
    // TODO: add logo
  },
]

export default projectsData
