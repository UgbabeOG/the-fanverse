import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { merchandise } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail } from "lucide-react";

export default function MerchandisePage() {
  const contactEmail = "merch@fanverse.com";

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Official Merchandise</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Get your hands on exclusive gear and show your support. To purchase, please contact our customer service.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {merchandise.map((item) => {
          const itemImage = PlaceHolderImages.find((p) => p.id === item.imageId);
          return (
            <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                {itemImage && (
                  <div className="aspect-square relative">
                    <Image
                      src={itemImage.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                      data-ai-hint={itemImage.imageHint}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl">{item.name}</CardTitle>
                <CardDescription className="mt-2">{item.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 bg-secondary/50">
                <p className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</p>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href={`mailto:${contactEmail}?subject=Purchase Inquiry: ${encodeURIComponent(item.name)}&body=Hello, I am interested in purchasing the '${encodeURIComponent(item.name)}'. Please provide me with more information.`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Contact to Buy
                  </a>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
