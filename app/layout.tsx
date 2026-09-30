import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Prompt } from 'next/font/google'
import './globals.css'

const prompt = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-prompt',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'แพ็กเกจเน็ตบ้าน AIS 3BB Fibre | ติดต่อเซลล์เก้า',
  description:
    'ข้อมูลแพ็กเกจอินเทอร์เน็ตบ้าน AIS 3BB Fibre สำหรับผู้สนใจสมัครบริการ ติดต่อเซลล์/ผู้ประสานงานเก้า โทร 062-201-4154 เว็บไซต์นี้ไม่ใช่เว็บไซต์ทางการของ AIS หรือ 3BB',
  keywords: ['เน็ตบ้าน', '3BB', 'AIS Fibre', 'ไฟเบอร์', 'เซลล์เก้า', 'สมัครเน็ตบ้าน', 'อินเทอร์เน็ตบ้าน'],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0f1526',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className={`${prompt.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
