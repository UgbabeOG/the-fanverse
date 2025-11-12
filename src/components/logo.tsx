"use client";

import { useTheme } from 'next-themes';
import Image from 'next/image';

export function Logo() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center gap-2" title="Pacheco Team">
      <Image 
        src="/logo.svg" 
        alt="Pacheco Team Logo" 
        width={150} 
        height={40} 
        priority
        className={theme === 'light' ? 'filter invert' : ''}
      />
    </div>
  );
}
