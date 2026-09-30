import { MessageCircle, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/packages'

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 md:bottom-8 md:right-6">
      <a
        href={CONTACT.line}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="แอดไลน์"
        className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/40 transition-transform hover:scale-110"
      >
        <MessageCircle className="size-6" />
      </a>
      <a
        href={`tel:${CONTACT.phone}`}
        aria-label="โทรหาเรา"
        className="flex size-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 transition-transform hover:scale-110 animate-pulse-glow"
      >
        <Phone className="size-6" />
      </a>
    </div>
  )
}
