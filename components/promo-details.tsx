import { BadgePercent, CheckCircle2, Gift, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import { CONTACT } from '@/lib/packages'
import { Reveal } from '@/components/reveal'

const PERKS = [
  { icon: Gift, text: 'สิทธิ์ค่าติดตั้งตามโปรโมชั่นของผู้ให้บริการ (เงื่อนไขเป็นไปตามแพ็กเกจและพื้นที่)' },
  { icon: ShieldCheck, text: 'รับสิทธิ์ยืมอุปกรณ์ GPON ONT ตามเงื่อนไขของผู้ให้บริการ' },
  { icon: BadgePercent, text: 'ระยะเวลาสัญญาแตกต่างกันตามแพ็กเกจ กรุณาตรวจสอบเงื่อนไขก่อนสมัคร' },
  { icon: MapPin, text: 'ให้บริการเฉพาะพื้นที่ที่ผู้ให้บริการรองรับ ตรวจสอบพื้นที่ให้บริการฟรี' },
]

const STEPS = [
  'ติดต่อเพื่อขอข้อมูลและตรวจสอบพื้นที่',
  'แชร์โลเคชั่นพิกัด หรือบอกที่อยู่ เพื่อตรวจสอบพื้นที่ให้บริการ',
  'หากต้องดำเนินการต่อ ให้ยืนยันตัวตนและส่งเอกสารผ่านช่องทางทางการของผู้ให้บริการเท่านั้น',
  'รับรายละเอียดการชำระเงินจากช่องทางทางการของผู้ให้บริการเท่านั้น',
  'ชำระค่าบริการผ่านระบบหรือช่องทางทางการของผู้ให้บริการเท่านั้น ห้ามโอนเข้าบัญชีส่วนบุคคลตามคำแนะนำบนเว็บไซต์นี้',
]

export function PromoDetails() {
  return (
    <section id="promo-detail" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Promo details */}
          <Reveal className="lg:col-span-3">
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-border bg-card p-8 md:p-10">
              <div className="absolute -right-16 -top-16 size-56 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">
                  <BadgePercent className="size-4" />
                  โปรโมชั่น AIS 3BB
                </span>
                <h2 className="mt-4 text-balance text-3xl font-extrabold md:text-4xl">
                  ขอข้อมูลแพ็กเกจ AIS 3BB Fibre3 แล้วตรวจสอบกับช่องทางทางการก่อนสมัคร
                </h2>

                <ul className="mt-8 flex flex-col gap-4">
                  {PERKS.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-9 flex-none items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <p.icon className="size-5" />
                      </span>
                      <span className="leading-relaxed text-foreground">{p.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={CONTACT.line}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.03]"
                  >
                    <MessageCircle className="size-5" />
                    สอบถามข้อมูลและตรวจสอบพื้นที่
                  </a>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-green-500 bg-green-500/10 px-6 py-3.5 text-sm font-bold text-green-500 transition-colors hover:bg-green-500/20"
                  >
                    <Phone className="size-5" />
                    โทร {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* How to apply + address */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-[2rem] border border-border bg-card p-8">
                <h3 className="text-xl font-extrabold text-accent md:text-2xl">
                  แนวทางขอข้อมูลและสมัครผ่านช่องทางทางการ
                </h3>
                <ol className="mt-6 flex flex-col gap-4">
                  {STEPS.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex size-7 flex-none items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-[2rem] border border-border bg-secondary/40 p-8">
                <h3 className="flex items-center gap-2 text-lg font-extrabold text-primary">
                  <MapPin className="size-5" />
                  ข้อมูลผู้ให้บริการ
                </h3>
                <div className="mt-4 space-y-2 text-sm leading-relaxed">
                  <p className="font-bold text-foreground">AIS 3BB Fibre3</p>
                  <p className="text-muted-foreground">
                    รายละเอียดบริการเป็นของผู้ให้บริการ เว็บไซต์นี้ทำหน้าที่ให้ข้อมูลอ้างอิงและประสานงานตามคำขอเท่านั้น ไม่ใช่เว็บไซต์ทางการหรือช่องทางรับชำระเงิน
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">พื้นที่ให้บริการ : </span>
                    {CONTACT.serviceArea} (ตรวจสอบพื้นที่ก่อนสมัคร)
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <h4 className="text-sm font-bold text-foreground">ผู้ประสานงานข้อมูลบริการ (อิสระ ไม่ใช่เว็บไซต์ทางการ)</h4>
                  <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">ชื่อ : </span>
                      {CONTACT.contactPerson}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">โทร : </span>
                      {CONTACT.phoneDisplay}
                    </p>
                    <p className="break-all">
                      <span className="font-semibold text-foreground">อีเมล : </span>
                      {CONTACT.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
