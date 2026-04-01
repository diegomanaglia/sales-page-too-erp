import Image from 'next/image';
import { LOGO_SRC } from '@/utils/constants';

export default function BrandBadge({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src={LOGO_SRC}
        alt="Logo"
        width={36}
        height={36}
        className="rounded-md object-contain"
        priority
      />
      <div className="text-sm sm:text-lg font-semibold tracking-tight leading-tight">
        Troca de Óleo<br className="block sm:hidden" /> Online ERP
      </div>
    </div>
  );
}
