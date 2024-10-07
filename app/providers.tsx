import React from 'react'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import { ThemeProviders } from './theme-providers'
import siteMetadata from '@/data/siteMetadata'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProviders>
      <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
      <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>{children}</SearchProvider>
    </ThemeProviders>
  )
}

export default Providers
