import { HelpCircle } from 'lucide-react'
import { FAQS } from '@/lib/packages'
import { Reveal } from '@/components/reveal'

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">
              <HelpCircle className="size-4" />
              คำถามที่พบบ่อย
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold md:text-4xl">
              เรื่องที่ลูกค้าถามบ่อย
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <details className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
                  {f.q}
                  <span className="flex size-7 flex-none items-center justify-center rounded-full bg-primary/15 text-primary transition-transform duration-300 group-open:rotate-45">
                    <span className="text-lg leading-none">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
