import { Camera, Film, Gift, Router, Smartphone, Tv } from 'lucide-react'

const ITEMS = [
  { icon: Camera, text: 'กล้องวงจรปิด ดูผ่านมือถือ' },
  { icon: Tv, text: 'กล่องดูทีวี AIS PLAYBOX' },
  { icon: Smartphone, text: 'ซิมมือถือแถมฟรี' },
  { icon: Film, text: 'Netflix · MONOMAX · VIU' },
  { icon: Router, text: 'WiFi 6 Router AX3000' },
  { icon: Gift, text: 'โปรพิเศษเฉพาะลูกค้าใหม่' },
]

export function PromoMarquee() {
  const loop = [...ITEMS, ...ITEMS]
  return (
    <div className="relative overflow-hidden border-y border-border bg-secondary/40 py-4">
      <div className="flex w-max animate-marquee gap-10">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 whitespace-nowrap px-2 text-sm font-medium text-muted-foreground">
            <item.icon className="size-4 text-primary" />
            {item.text}
            <span className="ml-6 text-primary/40">◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}
