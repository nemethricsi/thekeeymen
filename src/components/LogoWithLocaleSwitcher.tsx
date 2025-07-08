import Image from 'next/image';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';

export const LogoWithLocaleSwitcher = () => {
  return (
    <div className="relative">
      <div className="absolute -top-8 right-0 flex gap-2">
        <LocaleSwitcher />
      </div>
      <Image
        src="/svg/keeymen_logo.svg"
        alt="The Keeymen logo"
        width={800}
        height={800}
      />
    </div>
  );
};
