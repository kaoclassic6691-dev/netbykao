'use client'

import { useEffect, useState } from 'react'
import { Menu, Phone, Wifi, X } from 'lucide-react'
import { CONTACT } from '@/lib/packages'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'แพ็กเกจ', href: '#packages' },
  { label: 'เกี่ยวกับเรา', href: '#about' },
  { label: 'คำถามที่พบบ่อย', href: '#faq' },
  { label: 'ติดต่อเรา', href: '#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-background/70 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            <Wifi className="size-5" />
          </span>
            <span className="text-lg font-bold leading-none">
            {CONTACT.name} | ผู้ประสานงานสมัครบริการ AIS 3BB Fibre
            <span className="block text-[11px] font-medium text-muted-foreground">เว็บไซต์ส่วนบุคคลของเซลล์ / ผู้ประสานงานอิสระ ไม่ใช่เว็บไซต์ทางการของ AIS หรือ 3BB</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={`tel:${CONTACT.phone}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-green-500 bg-green-500/10 px-5 py-2.5 text-sm font-semibold text-green-500 transition-transform hover:scale-105"
          >
            <Phone className="size-4" />
            {CONTACT.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          aria-label="เปิดเมนู"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${CONTACT.phone}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-green-500 bg-green-500/10 px-5 py-3 text-sm font-semibold text-green-500"
            >
              <Phone className="size-4" />
              โทรเลย {CONTACT.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
