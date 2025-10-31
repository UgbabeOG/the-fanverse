
'use client';

import { useState, useEffect } from 'react';
import { Twitter, Facebook, Linkedin, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Post } from '@/lib/placeholder-data';

interface SharePostProps {
  post: Post;
}

export function SharePost({ post }: SharePostProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // This will run only on the client, after the component has mounted
    setCurrentUrl(window.location.href);
  }, []);

  const shareOptions = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`,
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.content.substring(0, 100))}`,
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      toast({
        title: 'Copied to clipboard!',
        description: 'You can now share the link.',
      });
    }, (err) => {
      toast({
        title: 'Failed to copy',
        description: 'Could not copy link to clipboard.',
        variant: 'destructive',
      });
    });
  };

  return (
    <div className="my-8 flex flex-wrap items-center gap-4">
      <p className="text-lg font-semibold text-muted-foreground">Share this post:</p>
      <div className="flex gap-2">
        {shareOptions.map((option) => (
          <Button
            key={option.name}
            variant="outline"
            size="icon"
            asChild
            aria-label={`Share on ${option.name}`}
          >
            <a href={option.url} target="_blank" rel="noopener noreferrer">
              <option.icon className="h-5 w-5" />
            </a>
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={copyToClipboard} aria-label="Copy link to clipboard">
          <Copy className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
