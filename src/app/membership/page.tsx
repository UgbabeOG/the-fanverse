import { CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const membershipTiers = [
  {
    name: 'Team Player',
    price: 'Free',
    features: [
      'Access to latest news',
      'Community forum access',
      'Monthly newsletter',
    ],
    cta: 'Sign Up',
    href: '/signup',
    variant: 'outline',
  },
  {
    name: 'All-Star',
    price: '$9.99/month',
    features: [
      'All Team Player benefits',
      'Exclusive content & interviews',
      'Early access to merchandise',
      'Ad-free browsing',
    ],
    cta: 'Become an All-Star',
    href: '/signup',
    variant: 'default',
  },
  {
    name: 'MVP',
    price: '$24.99/month',
    features: [
      'All All-Star benefits',
      'Signed digital collectibles',
      'Q&A sessions with Pacheco',
      '20% off all merchandise',
    ],
    cta: 'Become an MVP',
    href: '/signup',
    variant: 'default',
  },
];

export default function MembershipPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Join the Pacheco Team</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Get closer to the action. Choose your membership level and unlock exclusive perks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {membershipTiers.map((tier) => (
          <Card key={tier.name} className={`flex flex-col ${tier.name === 'All-Star' ? 'border-primary shadow-2xl' : ''}`}>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-headline">{tier.name}</CardTitle>
              <CardDescription className="text-3xl font-bold text-primary">{tier.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild size="lg" className="w-full" variant={tier.variant as any}>
                <Link href={tier.href}>
                  {tier.name === 'All-Star' && <Star className="mr-2 h-5 w-5" />}
                  {tier.cta}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
