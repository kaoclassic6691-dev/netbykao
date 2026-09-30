export const CONTACT = {
  name: 'เซลล์เก้า',
  contactPerson: 'ศฤงคาร พุทธรักษา',
  role: 'เซลล์ / ผู้ประสานงานสมัครบริการ AIS 3BB Fibre',
  phone: '0622014154',
  phoneDisplay: '062-201-4154',
  line: 'https://line.me/ti/p/fxpsLGpZHG',
  lineId: 'ติดต่อผู้ประสานงาน',
  email: 'singkanputtaraksa@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61590509522310',
  hours: 'ทุกวัน 08.00–20.00 น.',
  company: '',
  serviceArea: '',
  address: '',
}

export const DISCLAIMER =
  'เว็บไซต์นี้เป็นเว็บไซต์ส่วนบุคคลของผู้ให้ข้อมูลและผู้ประสานงานอิสระ ไม่ใช่เว็บไซต์ทางการของ AIS หรือ 3BB และไม่มีการรับรองจาก Google เว็บไซต์จะไม่ขอรหัสผ่าน OTP เลขบัตรประชาชนเต็ม หรือข้อมูลธนาคารผ่านหน้าเว็บ แชต หรืออีเมล กรุณาตรวจสอบช่องทางทางการของผู้ให้บริการก่อนส่งข้อมูลทุกครั้ง'

export const TRADEMARK_NOTICE =
  'ชื่อ โลโก้ และเครื่องหมายการค้า “AIS” และ “3BB” เป็นทรัพย์สินของบริษัท แอดวานซ์ อินโฟร์ เซอร์วิส จำกัด (มหาชน) และบริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน) ตามลำดับ ใช้เพื่ออ้างอิงบริการที่นำเสนอเท่านั้น'

export const PROMO_CONDITIONS: string[] = [
  'ราคาที่แสดงเป็นค่าบริการรายเดือน ยังไม่รวมภาษีมูลค่าเพิ่ม (VAT) เว้นแต่ระบุไว้เป็นอย่างอื่น',
  'ระยะเวลาสัญญาแตกต่างกันตามแพ็กเกจ (เช่น 12 หรือ 24 เดือน) กรุณาตรวจสอบเงื่อนไขของแต่ละแพ็กเกจก่อนสมัคร',
  'โปรโมชั่น สิทธิ์ค่าติดตั้ง ค่าอุปกรณ์ และสิทธิประโยชน์ต่าง ๆ เป็นไปตามที่ผู้ให้บริการ (AIS 3BB Fibre3) กำหนด',
  'ให้บริการเฉพาะพื้นที่ที่ผู้ให้บริการรองรับ กรุณาตรวจสอบพื้นที่ก่อนสมัคร',
  'บางโปรโมชั่นสำหรับลูกค้าใหม่เท่านั้น และอาจมีระยะเวลาสิ้นสุดโปรโมชั่นตามประกาศของผู้ให้บริการ',
  'เงื่อนไขการยกเลิกบริการเป็นไปตามข้อกำหนดในสัญญาของผู้ให้บริการ',
]

export const FAQS: { q: string; a: string }[] = [
  { q: 'สมัครใช้เอกสารอะไรบ้าง?', a: 'เอกสารและขั้นตอนขึ้นอยู่กับผู้ให้บริการ กรุณาเตรียมเอกสารผ่านช่องทางทางการที่ได้รับการยืนยันเท่านั้น และอย่าส่งรูปบัตรประชาชนเต็มใบผ่านเว็บไซต์ แชต หรืออีเมลนี้' },
  { q: 'ใช้เวลาติดตั้งกี่วัน?', a: 'โดยทั่วไปประมาณ 1–3 วัน ขึ้นอยู่กับพื้นที่และคิวติดตั้งของผู้ให้บริการ' },
  { q: 'มีค่าติดตั้งหรือไม่?', a: 'เป็นไปตามโปรโมชั่นและเงื่อนไขของผู้ให้บริการในแต่ละช่วงเวลา' },
  { q: 'ตรวจสอบพื้นที่ให้บริการได้หรือไม่?', a: 'สามารถติดต่อทีมงานเพื่อตรวจสอบพื้นที่ให้บริการก่อนสมัครได้' },
  { q: 'ข้อมูลส่วนตัวของฉันปลอดภัยหรือไม่?', a: 'เราจะใช้ข้อมูลเท่าที่จำเป็นสำหรับการให้ข้อมูลและประสานงานเท่านั้น เว็บไซต์นี้ไม่ขอรหัสผ่าน OTP ข้อมูลธนาคาร หรือเลขบัตรประชาชนเต็มใบ และแนะนำให้ยืนยันตัวตนผ่านช่องทางทางการของผู้ให้บริการเสมอ' },
]

export type Plan = {
  speed: string
  price: string
  detail?: string
  badge?: string
}

export type PackageGroup = {
  id: string
  eyebrow: string
  title: string
  description: string
  icon: string // lucide icon name key
  plans: Plan[]
  featured?: boolean
}

export const PACKAGES: PackageGroup[] = [
  {
    id: 'popular-1',
    eyebrow: 'แพ็กเกจยอดนิยม 1',
    title: 'เน็ต + กล้องวงจรปิด + ซิมมือถือ',
    description: 'ครบจบในแพ็กเดียว เน็ตแรง พร้อมกล้องวงจรปิด กล่องดูทีวี และซิมมือถือ',
    icon: 'shield',
    featured: true,
    plans: [
      { speed: '300/300 Mbps', price: '499' },
      { speed: '500/500 Mbps', price: '500' },
      { speed: '500/500 Mbps', price: '599', detail: 'เน็ตพร้อมกล้องวงจรปิด' },
      { speed: '500/500 Mbps', price: '599', detail: 'เน็ตพร้อมกล่องดู TV' },
      { speed: '500/500 Mbps', price: '599', detail: 'เน็ตพร้อมกล่องดู TV และซิม' },
      { speed: '500/500 Mbps', price: '698', detail: 'กล่องดู TV + ซิม + กล้องวงจรปิด' },
    ],
  },
  {
    id: 'broadband24',
    eyebrow: 'แพ็กเกจยอดนิยม 2',
    title: 'BROADBAND24 เน็ตอย่างเดียว',
    description: 'แพ็กเกจเน็ตบ้านสำหรับผู้ที่ต้องการความเร็วล้วน ๆ',
    icon: 'gauge',
    plans: [
      { speed: '300/300 Mbps', price: '499', detail: 'สัญญา 12 เดือน' },
      { speed: '500/500 Mbps', price: '500', detail: 'สัญญา 24 เดือน' },
      { speed: '500/500 Mbps', price: '600', detail: 'สัญญา 12 เดือน' },
      { speed: '1000/500 Mbps', price: '600', detail: 'สัญญา 24 เดือน' },
      { speed: '1000/500 Mbps', price: '700', detail: 'สัญญา 12 เดือน' },
      { speed: '1000/1000 Mbps', price: '1200', detail: 'สัญญา 12 เดือน' },
    ],
  },
  {
    id: 'entertainment',
    eyebrow: 'แพ็��เกจ',
    title: 'Entertainment Lover',
    description: 'ดูหนัง ฟังเพลง เติมเต็มทุกความบันเทิงด้วย NETFLIX',
    icon: 'clapperboard',
    plans: [
      { speed: '500/500 Mbps', price: '699', detail: 'NETFLIX แพ็กเกจพื้นฐาน HD · รับชมพร้อมกัน 1 เครื่อง' },
      { speed: '1000/500 Mbps', price: '799', detail: 'NETFLIX แพ็กเกจพื้นฐาน HD · รับชมพร้อมกัน 1 เครื่อง' },
      { speed: '1000/500 Mbps', price: '899', detail: 'NETFLIX แพ็กเกจมาตรฐาน FULL HD · รับชมพร้อมกัน 2 เครื่อง' },
      { speed: '1000/500 Mbps', price: '999', detail: 'NETFLIX แพ็กเกจพรีเมียม 4K Ultra HD · รับชมพร้อมกัน 4 เครื่อง', badge: '4K' },
    ],
  },
  {
    id: 'gang',
    eyebrow: 'แพ็กเกจ',
    title: 'Net Entertainment Gang',
    description: 'จอยแก็ง เน็ตบ้านแรง สนุกได้สุดไม่สะดุดทุกคอนเทนต์ พร้อม AIS PLAYBOX',
    icon: 'users',
    plans: [
      { speed: '500/500 Mbps', price: '599', detail: 'NetLite · PLAYBOX 1 ตัว ชมฟรี TV และได้สิทธิรับชมเพิ่ม 1 ช่อง HBO Max · WiFi6 Router AX3000' },
      { speed: '500/500 Mbps', price: '699', detail: 'NetInter · PLAYBOX 1 ตัว ชมฟรี TV และได้สิทธิรับชมเพิ่ม 2 ช่อง HBO Max + Disney+ · WiFi6 Router AX3000' },
      { speed: '1000/500 Mbps', price: '799', detail: 'NetStandard · PLAYBOX 1 ตัว ชมฟรี TV และได้สิทธิรับชมเพิ่ม 4 ช่อง HBO Max, Viu, iQIYI, WeTV · WiFi6 Router AX3000' },
      { speed: '1000/500 Mbps', price: '999', detail: 'NetSmart + ซิมมือถือ 10GB · PLAYBOX 1 ตัว ชมฟรี TV และได้สิทธิรับชมเพิ่ม 4 ช่อง HBO Max, Viu, iQIYI, WeTV · WiFi6 Router AX3000 x2' },
    ],
  },
  {
    id: 'mesh',
    eyebrow: 'แพ็กเกจ',
    title: 'Super MESH Plus',
    description: 'สัญญาณครอบคลุมทั่วบ้านด้วย MESH WiFi6 AX3000 2 ตัว พร้อมแอปดัง VIU · MONOMAX',
    icon: 'wifi',
    plans: [
      { speed: '500/500 Mbps', price: '599', detail: 'MESH WiFi6 AX3000 x2 + VIU' },
      { speed: '1000/500 Mbps', price: '799', detail: 'MESH WiFi6 AX3000 x2 + VIU · MONOMAX' },
    ],
  },
  {
    id: 'fibrelan',
    eyebrow: 'แพ็กเกจ',
    title: 'HOME FibreLAN',
    description: 'เน็ตแรง 2 กิกะบิตเดินสายทุกห้องทั่วบ้าน เลือกได้ตามจำนวนห้อง',
    icon: 'house',
    plans: [
      { speed: '2 ห้อง', price: '1199' },
      { speed: '3 ห้อง', price: '1499' },
      { speed: '4 ห้อง', price: '1799' },
      { speed: '5 ห้อง', price: '2099' },
    ],
  },
  {
    id: 'fibrelan-plus',
    eyebrow: 'แพ็กเกจ',
    title: 'HOME FibreLAN PLUS',
    description: 'เน็ตแรง 1 กิกะบิตเท่ากันทุกห้อง แถมเน็ตมือถือ 20GB',
    icon: 'house',
    plans: [
      { speed: '2 ห้อง', price: '899', detail: 'เน็ตมือถือ 20GB' },
      { speed: '3 ห้อง', price: '1199', detail: 'เน็ตมือถือ 20GB' },
      { speed: '4 ห้อง', price: '1499', detail: 'เน็ตมือถือ 20GB' },
      { speed: '5 ห้อง', price: '1799', detail: 'เน็ตมือถือ 20GB' },
    ],
  },
]
