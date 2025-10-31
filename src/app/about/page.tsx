import Image from "next/image";
import { Award, Music, Film, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-celeb');

  const achievements = [
    { icon: Award, title: "Multi-Platinum Artist", description: "Sold over 50 million records worldwide." },
    { icon: Music, title: "Grammy Winner", description: "Multiple awards for Album of the Year and Best Pop Vocal." },
    { icon: Film, title: "Blockbuster Actor", description: "Starred in critically acclaimed and box-office hit movies." },
    { icon: Heart, title: "Philanthropist", description: "Dedicated to numerous charitable causes and foundations." },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">About The Star</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the journey, the passion, and the person behind the icon.
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
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Biography</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                From a small-town dreamer to a global superstar, the journey has been nothing short of extraordinary. Bursting onto the scene with a debut album that captured the hearts of millions, our star has consistently pushed the boundaries of music and entertainment.
              </p>
              <p>
                With a voice that resonates with emotion and lyrics that tell profound stories, they have crafted a discography that is both timeless and innovative. Each album is a new chapter, showcasing artistic evolution and a deep connection with their audience.
              </p>
              <p>
                Beyond music, they have also made a significant mark in the world of cinema, delivering powerful performances that have earned critical acclaim. Their versatility as an artist is matched only by their dedication to philanthropy, using their platform to champion causes and inspire positive change around the world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-10">
          Career Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
