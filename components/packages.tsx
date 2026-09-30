import {
  Clapperboard,
  Gauge,
  House,
  MessageCircle,
  Phone,
  Shield,
  Users,
  Wifi,
  type LucideIcon,
} from 'lucide-react'
import { CONTACT, PACKAGES, PROMO_CONDITIONS, type PackageGroup, type Plan } from '@/lib/packages'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const ICONS: Record<string, LucideIcon> = {
  shield: Shield,
  gauge: Gauge,
  clapperboard: Clapperboard,
  users: Users,
  wifi: Wifi,
  house: House,
}

function PlanCard({ plan, accentAlt }: { plan: Plan; accentAlt: boolean }) {
  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10',
      )}
    >
      {plan.badge && (
        <span
          className={cn(
            'absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[11px] font-bold',
            accentAlt ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground',
          )}
        >
          {plan.badge}
        </span>
      )}
      <div>
        <p className="text-sm font-semibold text-muted-foreground">ความเร็ว</p>
        <p className="text-xl font-extrabold text-foreground">{plan.speed}</p>
        {plan.detail && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.detail}</p>}
      </div>
      <div className="mt-5 flex items-end justify-between">
        <p className="flex flex-col">
          <span className="flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-gradient">{plan.price}</span>
            <span className="text-sm font-medium text-muted-foreground">บาท/เดือน</span>
          </span>
          <span className="mt-0.5 text-[11px] text-muted-foreground">ไม่รวม VAT · เป็นไปตามเงื่อนไขผู้ให้บริการ</span>
        </p>
        <a
          href={CONTACT.line}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-2 text-xs font-semibold text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
        >
          สอบถามแพ็กเกจ
        </a>
      </div>
    </div>
  )
}

function PackageBlock({ group, index }: { group: PackageGroup; index: number }) {
  const Icon = ICONS[group.icon] ?? Wifi
  const accentAlt = index % 2 === 1
  return (
    <Reveal className="scroll-mt-24" delay={0}>
      <div id={group.id}>
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex items-start gap-4">
            <span
              className={cn(
                'flex size-12 shrink-0 items-center justify-center rounded-2xl',
                accentAlt ? 'bg-accent/15 text-accent' : 'bg-primary/15 text-primary',
              )}
            >
              <Icon className="size-6" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{group.eyebrow}</p>
              <h3 className="text-2xl font-bold md:text-3xl">{group.title}</h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">{group.description}</p>
            </div>
          </div>
          {group.featured && (
            <span className="w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              ⭐ ยอดนิยม
            </span>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {group.plans.map((plan, i) => (
            <PlanCard key={`${group.id}-${i}`} plan={plan} accentAlt={accentAlt} />
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export function Packages() {
  return (
    <section id="packages" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span id="promotions" className="scroll-mt-24 text-sm font-semibold uppercase tracking-wide text-primary">
            โปรโมชั่นทั้งหมด
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold md:text-5xl">
            เลือกแพ็กเกจที่ <span className="text-gradient">ใช่สำหรับคุณ</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            ราคาและสิทธิประโยชน์เป็นไปตามโปรโมชั่นและเงื่อนไขของ AIS 3BB Fibre สอบถามและให้เราช่วยประสานงานการสมัครผ่านไลน์หรือโทรได้เลย
          </p>
          <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground">
            ราคาและสิทธิประโยชน์เป็นไปตามโปรโมชั่นและเงื่อนไขของผู้ให้บริการ กรุณาตรวจสอบรายละเอียดล่าสุดก่อนสมัคร · ราคาที่ยังไม่รวม VAT จะแสดงตามข้อมูลของแต่ละแพ็กเกจ
          </p>
        </Reveal>

        <div className="flex flex-col gap-16">
          {PACKAGES.map((group, i) => (
            <PackageBlock key={group.id} group={group} index={i} />
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-gradient-to-r from-primary/15 to-accent/15 p-8 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-xl font-bold md:text-2xl">ไม่แน่ใจว่าแพ็กเกจไหนเหมาะกับบ้านคุณ?</h3>
              <p className="mt-1 text-sm text-muted-foreground">ทักหาเซลล์เก้าได้เลย เราช่วยแนะนำแพ็กเกจที่เหมาะกับบ้านคุณและตรวจสอบพื้นที่ให้ฟรี</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={CONTACT.line}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                <MessageCircle className="size-4" />
                ปรึกษาผ่านไลน์
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <Phone className="size-4" />
                โทร {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-secondary/40 p-6 md:p-8">
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
              เงื่อนไขโปรโมชั่นและราคา
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {PROMO_CONDITIONS.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
                  <span className="mt-1 size-1.5 flex-none rounded-full bg-primary" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
