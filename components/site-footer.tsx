import { Clock, Mail, MessageCircle, Phone, Wifi } from 'lucide-react'
import { CONTACT, DISCLAIMER, TRADEMARK_NOTICE } from '@/lib/packages'
import { FacebookIcon } from '@/components/facebook-icon'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Wifi className="size-5" />
            </span>
            <span className="text-lg font-bold">{CONTACT.name}</span>
          </div>
          <p className="mt-1 text-xs font-medium text-muted-foreground">เซลล์ / ผู้ประสานงานสมัครบริการ AIS 3BB Fibre</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            เว็บไซต์นี้เป็นเว็บไซต์ส่วนบุคคลของผู้ให้ข้อมูลและผู้ประสานงานอิสระ ไม่ใช่เว็บไซต์ทางการของ AIS หรือ 3BB และไม่ใช่ช่องทางรับชำระเงินของผู้ให้บริการ ให้ข้อมูลแพ็กเกจและประสานงานตามคำขอเท่านั้น
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            ผู้ดูแลเว็บไซต์: {CONTACT.contactPerson}<br />
            สถานะ: {CONTACT.role}<br />
            โทร: {CONTACT.phoneDisplay}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground">เมนู</h4>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
            <li><a href="/#packages" className="hover:text-foreground">แพ็กเกจ</a></li>
            <li><a href="/#about" className="hover:text-foreground">เกี่ยวกับเรา</a></li>
            <li><a href="/#faq" className="hover:text-foreground">คำถามที่พบบ่อย</a></li>
            <li><a href="/#contact" className="hover:text-foreground">ติดต่อเรา</a></li>
            <li><a href="/privacy" className="hover:text-foreground">นโยบายความเป็นส่วนตัว</a></li>
            <li><a href="/terms" className="hover:text-foreground">ข้อกำหนดการใช้งาน</a></li>
            <li><a href="/security" className="font-semibold text-primary hover:text-foreground">ความปลอดภัยและป้องกันฟิชชิง</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground">ติดต่อ</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            ผู้ประสานงาน: <span className="font-semibold text-foreground">{CONTACT.contactPerson}</span>
          </p>
          <ul className="mt-3 flex flex-col gap-3 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-foreground">
                <Phone className="size-4 text-green-500" /> {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={CONTACT.line} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground">
                <MessageCircle className="size-4 text-accent" /> LINE: {CONTACT.lineId}
              </a>
            </li>
            <li>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground">
                <FacebookIcon className="size-4 text-primary" /> Facebook
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 break-all hover:text-foreground">
                <Mail className="size-4 text-primary" /> {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-primary" /> {CONTACT.hours}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs leading-relaxed text-muted-foreground">
        <p className="mx-auto max-w-3xl px-4">หมายเหตุ: {DISCLAIMER}</p>
        <p className="mx-auto mt-3 max-w-3xl px-4">{TRADEMARK_NOTICE}</p>
        <p className="mt-3">
          © {new Date().getFullYear()} {CONTACT.name} · ผู้ให้ข้อมูลอิสระ · ประสานงานตามคำขอ
        </p>
      </div>
    </footer>
  )
}
