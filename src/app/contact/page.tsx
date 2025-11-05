import { Mail, MapPin, Globe, Instagram, Twitter, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { TikTokIcon } from '@/components/tiktok-icon';

// WhatsApp icon as a simple component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);


export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Get in Touch with Team Pacheco</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>For all general questions about memberships, events, or media appearances.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:info@pachecofans.com" className="hover:underline">info@pachecofans.com</a>
              </div>
              <div className="flex items-center gap-4 animate-pulse">
                <WhatsAppIcon className="h-6 w-6 text-primary" />
                <a href="https://wa.me/message/AVT6KRU65SQKE1" target="_blank" rel="noopener noreferrer" className="hover:underline">Contact us on WhatsApp</a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-semibold">Team Pacheco Global, LLC</p>
              <p className="text-muted-foreground">Brand & Fan Management Division</p>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <p className="text-muted-foreground">3457 Holmes St<br />Kansas City, MO 64109 USA</p>
              </div>
               <div className="flex items-center gap-4">
                <Globe className="h-5 w-5 text-primary" />
                <a href="http://www.pachecofans.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.pachecofans.com</a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-around">
               <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/lil_poppy856?igsh=MWRzd2V2NGFoYW1nNA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-7 w-7" />
                </a>
              </Button>
               <Button variant="ghost" size="icon" asChild>
                <a href="https://www.tiktok.com/@lil_poppy007?_t=ZS-90QoDZGEYT9&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <TikTokIcon className="h-7 w-7" />
                </a>
              </Button>
               <Button variant="ghost" size="icon" asChild>
                <a href="https://x.com/isiah_pachecoRB?t=C653cEe9PbAaHOOdOYfKyQ&s=09" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter">
                  <Twitter className="h-7 w-7" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Fan Safety & Privacy Notice</AlertTitle>
            <AlertDescription>
              Team Pacheco Global, LLC operates under strict data protection and fan engagement standards. We never request personal banking details or off-platform payments. All official communications are issued only through verified @pachecofans.com email addresses.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}
