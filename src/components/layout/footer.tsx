import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Logo />
          <p className="text-sm text-muted-foreground">
            This is the official fan community for Isiah Pacheco.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>|</span>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <span>|</span>
            <Link href="/membership" className="hover:text-primary transition-colors">Membership</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Team Pacheco · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
