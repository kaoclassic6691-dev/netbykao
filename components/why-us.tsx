import { BadgeCheck, HeadphonesIcon, Rocket, Wallet } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const FEATURES = [
  {
    icon: Rocket,
    title: 'นัดติดตั้งตามคิวผู้ให้บริการ',
    desc: 'ประสานงานนัดหมายให้สะดวก ระยะเวลาติดตั้งขึ้นอยู่กับพื้นที่และคิวช่างของผู้ให้บริการ',
  },
  {
    icon: Wallet,
    title: 'โปรโมชั่นจาก AIS 3BB Fibre3',
    desc: 'แจ้งแพ็กเกจและสิทธิประโยชน์ตามโปรโมชั่นของผู้ให้บริการ เริ่มต้น 499 บาท/เดือน (เป็นไปตามเงื่อนไข)',
  },
  {
    icon: BadgeCheck,
    title: 'ให้ข้อมูลอย่างโปร่งใส',
    desc: 'ช่วยให้ข้อมูลและประสานงานการสมัครอย่างถูกต้องตามเงื่อนไขของผู้ให้บริการแต่ละแพ็กเกจ',
  },
  {
    icon: HeadphonesIcon,
    title: 'ดูแลประสานงานหลังการขาย',
    desc: 'มีปัญหาการใช้งานทักได้ เราช่วยประสานงานกับผู้ให้บริการเพื่อแก้ไขให้',
  },
]

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">ทำไมต้องเรา</span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold md:text-5xl">
            สมัครกับ <span className="text-gradient">เซลล์เก้า</span> ดียังไง
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <f.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
