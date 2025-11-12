"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export function Logo() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <div className="flex items-center gap-2" title="Pacheco Team">
      <Image 
        src="/logo.svg" 
        alt="Pacheco Team Logo" 
        width={150} 
        height={40} 
        priority
        className={mounted && currentTheme === 'light' ? 'filter invert' : ''}
      />
    </div>
  );
}
