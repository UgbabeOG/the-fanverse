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

  if (!mounted) {
    // Render a placeholder or null on the server to avoid hydration mismatch
    return <div style={{ width: 150, height: 40 }} />;
  }

  return (
    <div className="flex items-center gap-2" title="Team Pacheco">
      <Image 
        src="/logo.svg" 
        alt="Team Pacheco Logo" 
        width={150} 
        height={40} 
        priority
        className={currentTheme === 'light' ? 'filter invert' : ''}
      />
    </div>
  );
}
