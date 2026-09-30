'use client'

import { useEffect, useState } from 'react'
import { Cookie } from 'lucide-react'

const STORAGE_KEY = 'sk9-cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  function decide(value: 'accepted' | 'declined') {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // ignore storage errors
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="การใช้คุกกี้และข้อมูลส่วนบุคคล"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-xl md:flex-row md:items-center md:gap-6 md:p-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-9 flex-none items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Cookie className="size-5" />
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            เว็บไซต์นี้ใช้คุกกี้และเก็บข้อมูลส่วนบุคคลเพื่อการให้ข้อมูลและประสานงานการสมัครบริการ
            ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA) อ่านรายละเอียดได้ที่{' '}
            <a href="/privacy" className="font-semibold text-primary underline underline-offset-2">
              นโยบายความเป็นส่วนตัว
            </a>
          </p>
        </div>
        <div className="flex flex-none gap-3 md:ml-auto">
          <button
            type="button"
            onClick={() => decide('declined')}
            className="min-h-11 flex-1 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary md:flex-none"
          >
            ปฏิเสธ
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="min-h-11 flex-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:flex-none"
          >
            ยอมรับ
          </button>
        </div>
      </div>
    </div>
  )
}
