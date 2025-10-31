"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, Tag, MessageSquare, Send, ArrowLeft } from "lucide-react";
import { format } from "date-fns";

import { posts, users, categories } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { SharePost } from "@/components/share-post";

function CommentForm() {
    const { toast } = useToast();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const comment = formData.get("comment");
        if(comment && comment.toString().trim().length > 0) {
            toast({
              title: "Comment Submitted",
              description: "Thank you for your feedback!",
            });
            e.currentTarget.reset();
        } else {
             toast({
              title: "Empty Comment",
              description: "Please write something before submitting.",
              variant: "destructive"
            });
        }
    }
    return (
        <Card className="mt-8">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-headline">
                    <MessageSquare className="h-6 w-6" />
                    Leave a Comment
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Textarea name="comment" placeholder="Write your comment here..." className="min-h-[120px]" required/>
                    <Button type="submit" className="self-start">
                        <Send className="mr-2 h-4 w-4" />
                        Post Comment
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}


export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((p) => p.id === post.imageId);
  const author = users.find((u) => u.id === post.authorId);
  const category = categories.find((c) => c.id === post.categoryId);

  return (
    <article className="container max-w-4xl mx-auto px-4 py-12 md:py-20">
      <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/posts">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Posts
          </Link>
        </Button>
      </div>

      <header className="mb-8">
        {category && (
          <Link href="/posts" onClick={(e) => e.stopPropagation()}>
            <Badge className="mb-2">{category.name}</Badge>
          </Link>
        )}
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {author && (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{author.name}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.createdAt}>{format(new Date(post.createdAt), "MMMM d, yyyy")}</time>
          </div>
        </div>
      </header>
      
      {postImage && (
        <div className="relative aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
          <Image
            src={postImage.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={postImage.imageHint}
            priority
          />
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-foreground">
        <p>{post.content}</p>
        {/* In a real app, this would render markdown or rich text */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <SharePost post={post} />

      <Separator className="my-12" />

      <section>
        <h2 className="text-2xl font-headline font-bold mb-6">
          Comments ({post.comments.length})
        </h2>
        <div className="space-y-6">
          {post.comments.map((comment) => {
            const commentAuthor = users.find((u) => u.id === comment.authorId);
            const authorImage = commentAuthor ? PlaceHolderImages.find((p) => p.id === commentAuthor.imageId) : null;
            return (
              <div key={comment.id} className="flex gap-4">
                <Avatar>
                  {authorImage && <AvatarImage src={authorImage.imageUrl} alt={commentAuthor?.name} data-ai-hint={authorImage.imageHint}/>}
                  <AvatarFallback>{commentAuthor?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{commentAuthor?.name}</p>
                    <time className="text-xs text-muted-foreground">
                      {format(new Date(comment.createdAt), "MMM d, yyyy")}
                    </time>
                  </div>
                  <p className="mt-1 text-muted-foreground">{comment.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        {post.comments.length === 0 && (
            <p className="text-muted-foreground">Be the first to comment!</p>
        )}

        <CommentForm />
      </section>
    </article>
  );
}
