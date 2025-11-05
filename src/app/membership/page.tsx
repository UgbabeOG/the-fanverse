
import { CheckCircle, Star, Mail, Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const managementEmail = "info@pachecofans.com";
const emailSubject = "Inquiry: Trust Access Pass Membership";
const emailBody = "Hello, I am interested in joining the Trust Access Pass. Please provide me with the next steps to complete my membership.";

export default function MembershipPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Choose Your Level, Every Tier Brings You Closer.</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Unlock a new level of connection with exclusive access and benefits.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">

        {/* Trust Access Pass Tier */}
        <Card className="flex flex-col border-primary shadow-2xl bg-card/50">
          <CardHeader>
            <CardTitle className="text-3xl font-headline flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              Trust Access Pass
            </CardTitle>
            <CardDescription className="text-lg">For the real ones since day one.</CardDescription>
            <p className="text-4xl font-bold text-primary pt-2">$500 / Year</p>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <ul className="space-y-3 text-lg">
              {[
                'Access to official updates & fan community',
                'Exclusive photos, messages, and Q&A highlights',
                'Priority notifications for livestreams and drops',
                'Monthly appreciation shoutouts from Isiah Pacheco',
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-center text-muted-foreground pt-4">✨ Instant access · Cancel anytime</p>
          </CardContent>
          <CardFooter>
            <Button asChild size="lg" className="w-full text-lg py-7">
              <a href={`mailto:${managementEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}>
                <Star className="mr-2 h-5 w-5" />
                Join Tier 1
              </a>
            </Button>
          </CardFooter>
        </Card>

        {/* Coming Soon Tier */}
        <Card className="flex flex-col bg-card/50 border-dashed border-muted-foreground/50">
          <CardHeader>
            <CardTitle className="text-3xl font-headline flex items-center gap-3 text-muted-foreground">
              <Lock className="h-8 w-8 text-muted-foreground" />
              Inner Circle Elite Tier
            </CardTitle>
            <CardDescription className="text-lg">
              An invitation-only experience for fans ready to go all in.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-muted-foreground">Coming Soon</p>
              <p className="mt-2 text-muted-foreground">Stay tuned for details on this exclusive, invitation-only tier.</p>
            </div>
          </CardContent>
          <CardFooter>
             <Button size="lg" className="w-full text-lg py-7" disabled>
                Stay Tuned
              </Button>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}
