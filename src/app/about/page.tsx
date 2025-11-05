
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-celeb');

  const content = [
    { 
      title: "Our Story", 
      text: "“Team Pacheco was created for those who believe in more than just the game. It’s about commitment, family, and the relentless pursuit of greatness, on and off the field.”" 
    },
    { 
      title: "Mission Statement", 
      text: "“To build a global community where fans feel seen, heard, and appreciated, Join the exclusive list of VIP fans to get a chance to experience every single game.”" 
    },
    { 
      title: "Meet the Team", 
      text: "“Behind the energy of every fan interaction is a small group of people who live and breathe connection. Together, we keep the heart of Team Pacheco beating.”"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Mission</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the journey, the passion, and the people behind Team Pacheco.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          {aboutImage && (
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          )}
        </div>

        <div className="lg:col-span-3">
          <Card className="bg-card/80">
            <CardContent className="pt-6 space-y-8">
              {content.map((section, index) => (
                <div key={section.title}>
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="font-headline text-3xl">{section.title}</CardTitle>
                  </CardHeader>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {section.text}
                  </p>
                  {index < content.length - 1 && <Separator className="mt-8" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
