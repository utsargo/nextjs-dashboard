import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function DashboardLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row md:flex-col items-center justify-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 md:h-24 md:w-24 rotate-[15deg]" />
      <p className="text-[44px]">NextDash</p>
    </div>
  );
}
