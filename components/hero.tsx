import Image from 'next/image'
import { ArrowRight, MessageCircle, Phone, Zap } from 'lucide-react'
import { CONTACT } from '@/lib/packages'

const STATS = [
  { value: '2', unit: 'Gbps', label: 'ความเร็วสูงสุด' },
  { value: '499', unit: 'บาท', label: 'เริ่มต้นเพียง' },
  { value: '1-3', unit: 'วัน', label: 'ติดตั้งตามคิวผู้ให้บริการ' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      {/* background image + glow */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-fiber.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute -left-20 top-24 size-72 rounded-full bg-primary/25 blur-3xl animate-pulse-glow" />
        <div className="absolute -right-16 top-40 size-80 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <div className="max-w-xl rounded-2xl border border-primary/30 bg-primary/10 p-4 text-sm leading-relaxed text-foreground">
            <p className="font-semibold">เว็บไซต์นี้จัดทำโดยเซลล์ / ผู้ประสานงานอิสระ</p>
            <p className="mt-1 text-muted-foreground">ให้ข้อมูลแพ็กเกจอินเทอร์เน็ตบ้าน AIS 3BB Fibre และประสานงานการสมัครบริการ เว็บไซต์นี้ไม่ใช่เว็บไซต์ทางการของ AIS หรือ 3BB</p>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight md:text-6xl">
            เน็ตบ้าน<span className="text-gradient">ไฟเบอร์แรง</span>
            <br />
            รับข้อมูลแพ็กเกจจาก {CONTACT.name}
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            บริการให้ข้อมูลและประสานงานการสมัครเน็ตบ้าน 3BB / AIS ความเร็วสูงสุด 2 Gbps พร้อมกล้องวงจรปิด
            กล่องดูทีวี ซิมมือถือ Netflix และ MONOMAX เลือกแพ็กเกจที่เหมาะกับคุณ เริ่มต้น 499 บาท/เดือน ตรวจสอบพื้นที่ก่อนสมัคร
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              <Zap className="size-4" />
              ดูโปรโมชั่นทั้งหมด
              <ArrowRight className="size-4" />
            </a>
            <a
              href={CONTACT.line}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-6 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
            >
              <MessageCircle className="size-4" />
              สอบถามข้อมูลบริการ
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-green-500 bg-green-500/10 px-5 py-3 text-sm font-semibold text-green-500 transition-colors hover:bg-green-500/20"
            >
              <Phone className="size-4" />
              {CONTACT.phoneDisplay}
            </a>
          </div>

          <a href="/security" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-primary underline-offset-4 hover:underline">
            ตรวจสอบตัวตนและแนวทางป้องกันฟิชชิง
          </a>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur">
                <dd className="text-2xl font-extrabold text-foreground md:text-3xl">
                  {s.value}
                  <span className="ml-1 text-sm font-semibold text-primary">{s.unit}</span>
                </dd>
                <dt className="mt-1 text-xs text-muted-foreground">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl" />
          <Image
            src="/home-devices.png"
            alt="ครอบครัวนั่งดูทีวีในห้องนั่งเล่นที่เชื่อมต่ออินเทอร์เน็ตบ้านความเร็วสูง"
            width={720}
            height={720}
            priority
            className="mx-auto w-full max-w-md animate-float-slow rounded-[2rem] border border-border shadow-2xl lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  )
}
