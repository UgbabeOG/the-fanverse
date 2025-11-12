import Image from "next/image";
import { buildSrcSet } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Star, KeyRound, Gift, Crown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { posts } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-1");
  const recentPosts = posts.slice(0, 3);

  const fanExperienceFeatures = [
    {
      icon: <KeyRound className="h-10 w-10 text-primary" />,
      title: "Exclusive Access",
      description:
        "Unlock members-only content, Q&As, and behind-the-scenes footages.",
    },
    {
      icon: <Gift className="h-10 w-10 text-primary" />,
      title: "Giveaways",
      description:
        "Enter to win tickets, signed memorabilia, and unique fan experiences.",
    },
    {
      icon: <Crown className="h-10 w-10 text-primary" />,
      title: "Inner Circle",
      description:
        "Get priority access to new merchandise drops and special announcements.",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        {heroImage &&
          (heroImage.imageUrl && heroImage.imageUrl.startsWith("/") ? (
            <picture>
              <source srcSet={buildSrcSet(heroImage.imageUrl)} />
              <img
                src={heroImage.imageUrl}
                alt={heroImage.description}
                className="object-cover w-full h-full absolute inset-0"
                data-ai-hint={heroImage.imageHint}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </picture>
          ) : (
            <Image
              src="/heroImage.jpg"
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
            />
          ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
            Welcome to Pacheco Team
          </h1>
          <p className="text-2xl md:text-3xl font-headline font-bold text-accent drop-shadow-lg mt-2">
            Where Passion Meets Purpose.
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
            The official fan community celebrating Isiah Pacheco’s drive,
            discipline, and heart. Built for those who believe in the journey,
            and the fans who make it possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/posts">
                Latest Highlights <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-950 hover:bg-slate-500 hover:text-black animate-pulse  dark:text-slate-200 dark:hover:bg-slate-50 dark:hover:text-black"
            >
              <Link href="/membership">
                Join Us <Star className="ml-2 h-5 w-5 " />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-10">
            Latest Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => {
              const postImage = PlaceHolderImages.find(
                (p) => p.id === post.imageId
              );
              return (
                <Card
                  key={post.id}
                  className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="p-0">
                    {postImage && (
                      <div className="aspect-video relative">
                        <Image
                          src={postImage.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover"
                          data-ai-hint={postImage.imageHint}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="font-headline text-xl mb-2">
                      <Link
                        href={`/posts/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      {post.content.substring(0, 100)}...
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={`/posts/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/posts">View all Highlights</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Fan Experience
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect. Celebrate. Win.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {fanExperienceFeatures.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center">
                {feature.icon}
                <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild size="lg" className="animate-pulse">
              <Link href="/membership">Join the Community</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Join the Family.
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Become part of the story. Unlock exclusive content, livestream
            invites, and rewards.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="animate-pulse">
              <Link href="/membership">
                Join the Family <Star className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
