import type { Metadata } from 'next'
import {
  ArrowRight,
  Briefcase,
  Globe,
  Mail,
  MessagesSquare,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ButtonLink } from '@/components/button-link'
import { LINKS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Connect | BAWISA',
  description:
    'Join the BAWISA community on Slack and our email list, follow us on LinkedIn, and stay in the loop with job postings and events.',
}

const channels = [
  {
    icon: MessagesSquare,
    title: 'Slack',
    body: 'Our most active space — join channels for job postings, events, mentorship, and everyday conversation with the community.',
    cta: 'Join our Slack',
    href: LINKS.slack,
  },
  {
    icon: Globe,
    title: 'LinkedIn',
    body: 'Follow BAWISA for community highlights, member features, and professional updates from across the industry.',
    cta: 'Follow on LinkedIn',
    href: LINKS.linkedin,
  },
  {
    icon: Mail,
    title: 'Newsletter',
    body: 'Get our email newsletter with upcoming events, member spotlights, and opportunities delivered to your inbox.',
    cta: 'Email us to subscribe',
    href: LINKS.email,
  },
]

export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Join the conversation"
        description="Become part of the BAWISA community across Slack, LinkedIn, and email — and never miss a job posting, event, or spotlight."
      >
        <ButtonLink href={LINKS.joinForm} external size="lg">
          Join the Community <ArrowRight />
        </ButtonLink>
      </PageHero>

      {/* Community sign up */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/15 to-accent/15 p-8 text-center md:p-12">
          <h2 className="text-balance font-display text-3xl font-bold text-foreground">
            Join the community
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Sign up to be added to our Slack and email list. It only takes a
            minute, and it is how we welcome new members.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={LINKS.joinForm} external size="lg">
              Sign up now <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="flex flex-col rounded-xl border border-border/60 bg-card p-6"
            >
              <channel.icon
                className="mb-4 h-7 w-7 text-primary"
                aria-hidden="true"
              />
              <h3 className="font-display text-xl font-semibold text-foreground">
                {channel.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {channel.body}
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={channel.href}
                  external
                  variant="outline"
                  size="sm"
                >
                  {channel.cta}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jobs & opportunities */}
      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="mb-3 flex items-center gap-3">
                <Briefcase
                  className="h-6 w-6 text-accent"
                  aria-hidden="true"
                />
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Job postings &amp; opportunities
                </h2>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                Members share job openings, events, and opportunities in our
                Slack every week. It is one of the best reasons to join.
              </p>
            </div>
            <ButtonLink href={LINKS.slack} external>
              Browse in Slack <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
