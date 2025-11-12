import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2" title="Pacheco Team">
      <Image 
        src="/logo.svg" 
        alt="Pacheco Team Logo" 
        width={150} 
        height={40} 
        priority
      />
    </div>
  );
}
