interface Project {
  title: string
  description: string
  link?: {
    href: string | '#'
    label: string
  }
  logo?: string
}

const projectsData: Project[] = [
  {
    title: 'AiGO Network',
    description:
      'As the lead blockchain engineer, I developed the MVP, designed the initial technical architecture, built the website, and presented at VC-focused conference.',
    link: { href: 'https://www.aigo.network/', label: 'AiGO Network' },
    // TODO: add logo
  },
  {
    title: 'Ticker Capital',
    description:
      'Led the website renewal, integrated Google Analytics, and optimized for SEO to help internal decision-makers assess Ticker Capital’s brand awareness.',
    link: { href: 'https://www.ticker.capital/', label: 'Ticker Capital' },
    // TODO: add logo
  },
  {
    title: 'Brokkr',
    description:
      'As a freelancer, I developed the Airdrop, IDO, and Protocol pages during a two-month engagement.',
    link: { href: 'https://brokkr.finance/', label: 'Brokkr Finance' },
    // TODO: add logo
  },
  {
    title: 'Sturdy Exchange',
    description:
      'As a Senior Software Engineer, I minted 5,000 Flow-based NFTs for the HOODLUMS project, built the CI/CD pipeline, deployed the React-based frontend on Day 1, configured production-level settings such as SEO, and integrated monitoring and Intercom tools. Also managed engineering tasks and team priorities.',
    link: { href: '#', label: 'Brokkr Finance' },
    // TODO: add logo
  },
  {
    title: 'Musinsa',
    description:
      'Developed and maintained a project to integrate GNB, LNB, and FNB source codes from multiple repositories into a single repository for better management, deploying the project into Spring and PHP-based systems. Also developed the newsfeed front-end project, optimized API calls for the integrated search project, and handled Google Analytics and Tag Manager for custom scripts.',
    link: { href: 'https://musinsa.com', label: 'Musinsa' },
    // TODO: add logo
  },
]

export default projectsData
