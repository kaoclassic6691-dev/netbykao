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
  title: 'เก้า ไฟเบอร์ เซอร์วิส | ประสานงานติดตั้งเน็ตบ้าน',
  description:
    'เก้า ไฟเบอร์ เซอร์วิส ให้ข้อมูลและประสานงานติดตั้งเน็ตบ้าน AIS 3BB Fibre โดยผู้ประสานงานอิสระ ไม่มีสำนักงานรับลูกค้า และไม่ใช่เว็บไซต์ทางการของ AIS หรือ 3BB',
  keywords: ['เก้า ไฟเบอร์ เซอร์วิส', 'Kao Fiber Service', 'เน็ตบ้าน', '3BB', 'AIS Fibre', 'ประสานงานติดตั้งเน็ตบ้าน'],
  openGraph: {
    title: 'แพ็กเกจเน็ตบ้าน AIS 3BB Fibre | ติดต่อเซลล์เก้า',
    description: 'ข้อมูลแพ็กเกจอินเทอร์เน็ตบ้าน AIS 3BB Fibre สำหรับผู้สนใจสมัครบริการ ติดต่อผู้ประสานงานเก้า เว็บไซต์นี้ไม่ใช่เว็บไซต์ทางการของ AIS หรือ 3BB',
    type: 'website',
    locale: 'th_TH',
  },
  twitter: {
    card: 'summary',
    title: 'แพ็กเกจเน็ตบ้าน AIS 3BB Fibre | ติดต่อเซลล์เก้า',
    description: 'ข้อมูลแพ็กเกจและการประสานงานสมัครบริการ เว็บไซต์นี้ไม่ใช่เว็บไซต์ทางการของ AIS หรือ 3BB',
  },
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
