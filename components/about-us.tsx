import { CheckCircle2, Clock, HeartHandshake, Info, ShieldCheck } from 'lucide-react'
import { CONTACT, TRADEMARK_NOTICE } from '@/lib/packages'
import { Reveal } from '@/components/reveal'

const SERVICES = [
  'สมัครอินเทอร์เน็ตบ้าน',
  'ตรวจสอบพื้นที่ให้บริการ',
  'แจ้งโปรโมชั่นล่าสุด',
  'นัดหมายติดตั้ง',
  'ติดตามสถานะการสมัคร',
]

const VALUES = [
  { icon: ShieldCheck, title: 'ซื่อสัตย์ โปร่งใส', text: 'ให้ข้อมูลที่ถูกต้องตามเงื่อนไขของผู้ให้บริการ' },
  { icon: HeartHandshake, title: 'บริการเป็นกันเอง', text: 'ดูแลตั้งแต่สอบถามจนถึงวันติดตั้ง' },
  { icon: Clock, title: 'ตอบไวทุกวัน', text: `ทำการ ${CONTACT.hours}` },
]

export function AboutUs() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent">
                เกี่ยวกับเว็บไซต์
              </span>
              <h2 className="mt-4 text-balance text-3xl font-extrabold md:text-4xl">
                {CONTACT.name} | ผู้ให้ข้อมูลอิสระ
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                เว็บไซต์นี้จัดทำขึ้นเพื่อให้ข้อมูลแพ็กเกจอินเทอร์เน็ตบ้าน AIS 3BB Fibre และอำนวยความสะดวกในการติดต่อสอบถามและประสานงานสมัครบริการกับผู้ให้บริการ
                ผู้ดูแลเว็บไซต์ทำหน้าที่ให้ข้อมูลและประสานงานกับผู้สนใจสมัครบริการ ไม่ได้อ้างว่าเป็นเว็บไซต์ทางการของ AIS หรือ 3BB
                ข้อมูลแพ็กเกจ ราคา ความเร็ว สิทธิประโยชน์ และเงื่อนไขต่าง ๆ อาจเปลี่ยนแปลงตามโปรโมชั่นและเงื่อนไขของผู้ให้บริการ กรุณาตรวจสอบรายละเอียดก่อนสมัครทุกครั้ง
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="size-5 flex-none text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
                >
                  <span className="flex size-12 flex-none items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <v.icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-6 md:p-8">
            <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
              <Info className="size-5 flex-none text-primary" />
              ความสัมพันธ์กับ AIS และ 3BB
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              เว็บไซต์นี้เป็นเว็บไซต์ส่วนบุคคลของผู้ให้ข้อมูลอิสระ สำหรับให้ข้อมูลอ้างอิงและประสานงานตามคำขอเกี่ยวกับบริการ AIS 3BB Fibre3
              ไม่ใช่เว็บไซต์ทางการของ AIS หรือ 3BB ราคา โปรโมชั่น พื้นที่ให้บริการ และเงื่อนไขการสมัครทั้งหมด
              เป็นไปตามที่ผู้ให้บริการกำหนด
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{TRADEMARK_NOTICE}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
