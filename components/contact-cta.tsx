import { Clock, Mail, MessageCircle, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/packages'
import { Reveal } from '@/components/reveal'
import { FacebookIcon } from '@/components/facebook-icon'

const CARDS = [
  {
    icon: Phone,
    label: 'โทรหาเรา',
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phone}`,
    tone: 'green' as const,
  },
  {
    icon: MessageCircle,
    label: 'LINE',
    value: CONTACT.lineId,
    href: CONTACT.line,
    tone: 'accent' as const,
    external: true,
  },
  {
    icon: FacebookIcon,
    label: 'Facebook',
    value: 'เพจ เซลล์เก้า',
    href: CONTACT.facebook,
    tone: 'primary' as const,
    external: true,
  },
  {
    icon: Mail,
    label: 'อีเมลผู้ประสานงาน',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    tone: 'primary' as const,
  },
] satisfies {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href: string
  tone: 'primary' | 'accent' | 'green'
  external?: boolean
}[]

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 md:p-14">
            <div className="absolute -right-16 -top-16 size-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 size-72 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative text-center">
              <h2 className="text-balance text-3xl font-extrabold md:text-5xl">
                ต้องการตรวจสอบแพ็กเกจหรือพื้นที่ให้บริการไหม?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                ติดต่อ {CONTACT.name} เพื่อขอข้อมูลเบื้องต้นเท่านั้น การสมัคร การชำระเงิน และการส่งเอกสารต้องดำเนินการผ่านช่องทางทางการของผู้ให้บริการ
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {CARDS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={
                      c.tone === 'green'
                        ? 'group flex flex-col items-center gap-3 rounded-2xl border-2 border-green-500 bg-green-500/10 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-green-400'
                        : 'group flex flex-col items-center gap-3 rounded-2xl border border-border bg-background/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50'
                    }
                  >
                    <span
                      className={
                        c.tone === 'accent'
                          ? 'flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent'
                          : c.tone === 'green'
                            ? 'flex size-12 items-center justify-center rounded-2xl bg-green-500/15 text-green-500'
                            : 'flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary'
                      }
                    >
                      <c.icon className="size-6" />
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">{c.label}</span>
                    <span className="break-all text-base font-bold text-foreground">{c.value}</span>
                  </a>
                ))}
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                โปรดกรอกเฉพาะข้อมูลที่จำเป็นสำหรับการติดต่อกลับและประสานงานสมัครบริการเท่านั้น ผู้ดูแลเว็บไซต์จะไม่ขอรหัสผ่านบัญชีธนาคาร รหัส PIN หรือ OTP ผ่านเว็บไซต์หรือทางแชต หากมีการขอข้อมูลเพิ่มเติม กรุณาตรวจสอบวัตถุประสงค์และผู้รับข้อมูลก่อนให้ข้อมูล
              </p>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm text-muted-foreground">
                <Clock className="size-4 text-primary" />
                เวลาทำการ {CONTACT.hours} · ตอบกลับภายในวันเดียว
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
