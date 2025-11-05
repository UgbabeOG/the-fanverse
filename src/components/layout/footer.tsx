import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <Logo />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pacheco Team. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
