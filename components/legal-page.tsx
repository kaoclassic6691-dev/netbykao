import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: string
  intro?: string
  children: React.ReactNode
}) {
  return (
    <main className="relative min-h-screen">
      <header className="border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="size-4" />
            กลับหน้าแรก
          </Link>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <span className="inline-flex items-center rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-balance text-3xl font-extrabold md:text-4xl">{title}</h1>
          {intro ? (
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{intro}</p>
          ) : null}
          <div className="mt-10 flex flex-col gap-8">{children}</div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

export function LegalBlock({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <h2 className="text-xl font-bold text-foreground">{heading}</h2>
      <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  )
}
