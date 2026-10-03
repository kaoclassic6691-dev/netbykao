import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { PromoMarquee } from '@/components/promo-marquee'
import { Packages } from '@/components/packages'
import { PromoDetails } from '@/components/promo-details'
import { AboutUs } from '@/components/about-us'
import { WhyUs } from '@/components/why-us'
import { Faq } from '@/components/faq'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { CookieConsent } from '@/components/cookie-consent'

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SiteHeader />
      <Hero />
      <PromoMarquee />
      <Packages />
      <PromoDetails />
      <AboutUs />
      <WhyUs />
      <Faq />
      <ContactCta />
      <SiteFooter />
      <FloatingContact />
      <CookieConsent />
    </main>
  )
}
