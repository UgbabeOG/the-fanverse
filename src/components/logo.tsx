import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
       <Image src="https://storage.googleapis.com/garden-prod/キャプチャ.PNG_2024-07-26_16-09-54.png" alt="Pacheco Team Logo" width={140} height={40} className="w-36" />
    </div>
  );
}
