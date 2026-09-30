import type { Metadata } from 'next'
import { LegalPage, LegalBlock } from '@/components/legal-page'
import { DISCLAIMER, TRADEMARK_NOTICE } from '@/lib/packages'

export const metadata: Metadata = {
  title: 'ข้อกำหนดการใช้งาน | เซลล์เก้า',
  description: 'ข้อกำหนดและเงื่อนไขการใช้งานเว็บไซต์',
}

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="ข้อกำหนด"
      title="ข้อกำหนดการใช้งาน"
      intro="การใช้งานเว็บไซต์นี้ถือว่าท่านยอมรับเงื่อนไขดังต่อไปนี้"
    >
      <LegalBlock heading="เงื่อนไขการใช้งาน">
        <ul className="ml-4 list-disc space-y-1.5">
          <li>เว็บไซต์ใช้เพื่อให้ข้อมูลเกี่ยวกับบริการอินเทอร์เน็ตบ้าน</li>
          <li>โปรโมชั่นอาจเปลี่ยนแปลงตามประกาศของผู้ให้บริการ</li>
          <li>ผู้ดูแลเว็บไซต์มีสิทธิ์เปลี่ยนแปลงข้อมูลโดยไม่ต้องแจ้งล่วงหน้า</li>
          <li>การติดตั้งขึ้นอยู่กับผลการตรวจสอบพื้นที่และคิวของผู้ให้บริการ</li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="ความสัมพันธ์กับผู้ให้บริการ">
        <p>{DISCLAIMER}</p>
      </LegalBlock>

      <LegalBlock heading="เครื่องหมายการค้า">
        <p>{TRADEMARK_NOTICE}</p>
      </LegalBlock>
    </LegalPage>
  )
}
