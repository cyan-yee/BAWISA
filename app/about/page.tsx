import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight, Compass, Heart, MapPin, Rocket } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ButtonLink } from '@/components/button-link'
import { LINKS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us | BAWISA',
  description:
    'How BAWISA started, what we do, where we are, and how to join our community of women in space and aerospace.',
}

const values = [
  {
    icon: Rocket,
    title: 'What we do',
    body: 'We host events, run mentorship circles, spotlight members, and share opportunities across the Bay Area space and aerospace ecosystem.',
  },
  {
    icon: MapPin,
    title: 'Where we are',
    body: 'Rooted in the San Francisco Bay Area — from the Peninsula to the South Bay — where so much of the industry calls home.',
  },
  {
    icon: Heart,
    title: 'Why it matters',
    body: 'Representation and community change careers. We create the space for women to connect, grow, and lead in the industry.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building community among women in space and aerospace"
        description="BAWISA began as a small group of women who wanted more connection in an industry they love. Today it is a growing network across the Bay Area."
      >
        <ButtonLink href={LINKS.joinForm} external size="lg">
          Join the Community <ArrowRight />
        </ButtonLink>
      </PageHero>

      {/* How it started */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Compass className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="font-display text-3xl font-bold text-foreground">
                How it started
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                BAWISA started around a simple idea: women in space and
                aerospace deserve a community that celebrates their work and
                supports their growth. What began as informal meetups quickly
                grew into a network of engineers, scientists, students, and
                leaders from across the region.
              </p>
              <p>
                Today, we bring people together through events, mentorship, and
                member spotlights — creating opportunities to connect, learn,
                and lift each other up. Whether you are just starting out or
                decades into your career, there is a place for you here.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border/60 bg-card p-5"
              >
                <value.icon
                  className="mb-3 h-6 w-6 text-accent"
                  aria-hidden="true"
                />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The person behind BAWISA */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[auto_1fr] md:items-center md:px-6 md:py-20">
          <div className="mx-auto w-48 shrink-0 overflow-hidden rounded-2xl border border-border/60 md:w-60">
            <Image
              src="/images/founder.png"
              alt="Jeanette, founder of BAWISA"
              width={400}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              The person behind BAWISA
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground">
              Meet Jeanette
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Jeanette founded BAWISA to create the community she wished she had
              earlier in her own career. Passionate about mentorship and
              connection, she leads the group's mission to make the Bay Area
              space and aerospace industry more welcoming, visible, and
              supportive for women.
            </p>
            <blockquote className="mt-6 border-l-2 border-accent pl-4 font-display text-lg italic text-foreground">
              &ldquo;When we build community, we build the future of this
              industry.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Join us CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-20">
        <h2 className="text-balance font-display text-3xl font-bold text-foreground">
          Ready to join us?
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
          Become part of a community that connects, celebrates, and empowers
          women across space and aerospace.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href={LINKS.joinForm} external size="lg">
            Join the Community <ArrowRight />
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
