import siteMetadata from '@/data/siteMetadata'
import { Container } from '@/components/Container'
import SocialIcon from '@/components/social-icons'

export default function Home({ posts }) {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer specializing in blockchain and front-end engineering.
          </h1>
          <div className="mt-6 flex gap-6">
            <SocialIcon kind="x" href={siteMetadata.x} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          </div>
        </div>
      </Container>
    </>
  )
}
