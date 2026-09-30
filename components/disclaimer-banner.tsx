import { Info } from 'lucide-react'
import { DISCLAIMER } from '@/lib/packages'

export function DisclaimerBanner() {
  return (
    <div className="border-b-2 border-primary/40 bg-primary/10">
      <div className="mx-auto flex max-w-7xl items-start gap-2.5 px-4 py-3 md:px-6">
        <Info className="mt-0.5 size-4 flex-none text-primary" aria-hidden="true" />
        <p className="text-xs leading-relaxed text-foreground md:text-sm">
          <span className="font-bold text-primary">ความปลอดภัยสำคัญ: </span>
          {DISCLAIMER}
        </p>
      </div>
    </div>
  )
}
