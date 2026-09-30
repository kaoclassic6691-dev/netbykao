import type { Metadata } from 'next'
import { AlertTriangle, CheckCircle2, ExternalLink, LockKeyhole, ShieldCheck } from 'lucide-react'
import { LegalPage, LegalBlock } from '@/components/legal-page'
import { CONTACT } from '@/lib/packages'

export const metadata: Metadata = {
  title: 'ความปลอดภัยและป้องกันฟิชชิง | เซลล์เก้า',
  description: 'แนวทางตรวจสอบเว็บไซต์ ป้องกันฟิชชิง และปกป้องข้อมูลส่วนบุคคลก่อนติดต่อผู้ประสานงาน',
}

export default function SecurityPage() {
  return (
    <LegalPage
      eyebrow="ความปลอดภัย"
      title="ความปลอดภัยและป้องกันฟิชชิง"
      intro="เว็บไซต์นี้เป็นเว็บไซต์ส่วนบุคคลสำหรับให้ข้อมูลและประสานงานตามคำขอ ไม่ใช่เว็บไซต์ทางการของ AIS หรือ 3BB โปรดตรวจสอบตัวตนและช่องทางทางการก่อนส่งข้อมูลทุกครั้ง"
    >
      <LegalBlock heading="สิ่งที่เว็บไซต์นี้จะไม่ขอ">
        <ul className="ml-4 list-disc space-y-2">
          <li>รหัสผ่าน รหัส OTP หรือรหัสยืนยันจาก SMS</li>
          <li>ข้อมูลบัตรเครดิต บัญชีธนาคาร หรือ PIN</li>
          <li>สำเนาบัตรประชาชนเต็มใบผ่านเว็บไซต์ แชต หรืออีเมล</li>
        </ul>
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/10 p-4 text-foreground">
          <LockKeyhole className="mt-0.5 size-5 flex-none text-primary" aria-hidden="true" />
          <p>หากมีผู้ขอข้อมูลเหล่านี้ในนามเว็บไซต์ ให้หยุดการติดต่อและตรวจสอบกับช่องทางทางการของผู้ให้บริการโดยตรง</p>
        </div>
      </LegalBlock>

      <LegalBlock heading="วิธีตรวจสอบก่อนติดต่อ">
        <ul className="ml-4 list-disc space-y-2">
          <li>ตรวจสอบชื่อโดเมนและ URL ให้ตรงกับเว็บไซต์ที่ตั้งใจเข้าชม</li>
          <li>อย่าดาวน์โหลดโปรแกรมหรือติดตั้งส่วนขยายจากลิงก์ที่ไม่รู้จัก</li>
          <li>ยืนยันรายละเอียดแพ็กเกจ ราคา และเงื่อนไขกับผู้ให้บริการทางการก่อนชำระเงิน</li>
          <li>อย่าโอนเงินไปยังบัญชีบุคคลโดยไม่ตรวจสอบข้อมูลกับผู้ให้บริการ</li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="ปกป้องอุปกรณ์ของคุณ">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 size-5 flex-none text-primary" aria-hidden="true" />
          <p>อัปเดตระบบปฏิบัติการ เบราว์เซอร์ และซอฟต์แวร์ป้องกันไวรัสให้เป็นเวอร์ชันล่าสุด สแกนอุปกรณ์เป็นประจำ และใช้รหัสผ่านที่ไม่ซ้ำกัน</p>
        </div>
      </LegalBlock>

      <LegalBlock heading="หากพบกิจกรรมน่าสงสัย">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 flex-none text-primary" aria-hidden="true" />
          <p>หยุดการสนทนา เก็บภาพหน้าจอและ URL ไว้ เปลี่ยนรหัสผ่านที่เกี่ยวข้อง และรายงานผ่านช่องทางทางการของผู้ให้บริการหรือแพลตฟอร์มที่ใช้ติดต่อ</p>
        </div>
        <p className="mt-3">สำหรับข้อสงสัยเกี่ยวกับข้อมูลบนเว็บไซต์นี้ ติดต่อผู้ประสานงานได้ที่ {CONTACT.phoneDisplay} หรือ {CONTACT.email} โดยไม่ส่งข้อมูลลับ</p>
      </LegalBlock>

      <LegalBlock heading="การยืนยันตัวตน">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 size-5 flex-none text-primary" aria-hidden="true" />
          <p>การสมัคร การยืนยันตัวตน การชำระเงิน และการส่งเอกสารควรดำเนินการผ่านช่องทางทางการของผู้ให้บริการเท่านั้น เว็บไซต์นี้ทำหน้าที่ให้ข้อมูลและประสานงานตามคำขอ</p>
        </div>
        <a href="/privacy" className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">
          อ่านนโยบายความเป็นส่วนตัว
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </LegalBlock>
    </LegalPage>
  )
}
