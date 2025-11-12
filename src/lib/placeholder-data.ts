export type User = {
  id: string;
  name: string;
  imageId: string;
};

export type Comment = {
  id: string;
  text: string;
  authorId: string;
  createdAt: string;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  imageId: string;
  authorId: string;
  categoryId: string;
  createdAt: string;
  comments: Comment[];
};

export type Category = {
  id: string;
  name: string;
};

export type Merchandise = {
  id: string;
  name: string;
  price: number;
  imageId: string;
  description: string;
};

export const users: User[] = [
  { id: "user-1", name: "Jane Doe", imageId: "avatar-1" },
  { id: "user-2", name: "John Smith", imageId: "avatar-2" },
  { id: "user-3", name: "Alex Ray", imageId: "avatar-3" },
];

export const categories: Category[] = [
  { id: "cat-1", name: "Latest News" },
  { id: "cat-2", name: "Match Day" },
  { id: "cat-3", name: "Training Ground" },
  { id: "cat-4", name: "Fan Zone" },
];

export const posts: Post[] = [
  {
    id: "post-1",
    title: "Chiefs vs Commanders: Game Recap & Fan Raffle Winners Announced",
    slug: "chiefs-vs-commanders-game-recap-fan-raffle-winners",
    content:
      "The star was honored at the annual sports awards last night, looking sharp in a custom suit. This post breaks down the event, the award, and the look.",
    imageId: "1stlight",
    authorId: "user-1",
    categoryId: "cat-1",
    createdAt: "2024-07-20T10:00:00Z",
    comments: [
      {
        id: "comment-1",
        text: "Absolutely well deserved! A true champion.",
        authorId: "user-2",
        createdAt: "2024-07-20T11:30:00Z",
      },
      {
        id: "comment-2",
        text: "Looking sharp! Congrats on the win!",
        authorId: "user-3",
        createdAt: "2024-07-20T12:15:00Z",
      },
    ],
  },
  {
    id: "post-2",
    title: "Behind the Scenes: Training Camp Moments",
    slug: "training-camp-moments",
    content:
      "An incredible performance in today's derby match secured a crucial victory. We'll break down the key moments, including the game-winning goal. The atmosphere was electric!",
    // use public/bts.jpg
    imageId: "bts",
    authorId: "user-2",
    categoryId: "cat-2",
    createdAt: "2024-07-19T15:30:00Z",
    comments: [],
  },
  {
    id: "post-3",
    title: "Fan Event: Exclusive Tier 1 Fan Access Opens Last Week",
    slug: "tier-1-fan-access-opens-last-week",
    content:
      "Our favorite star is known for their incredible skill on the pitch, but also for their great sense of humor. We've compiled a list of the most hilarious and heartwarming moments from past press conferences. Get ready to laugh!",
    // use public/tierevent.jpg
    imageId: "tierevent",
    authorId: "user-1",
    categoryId: "cat-1",
    createdAt: "2024-07-18T09:00:00Z",
    comments: [
      {
        id: "comment-3",
        text: "This made my day! The laugh is so infectious.",
        authorId: "user-3",
        createdAt: "2024-07-18T10:00:00Z",
      },
    ],
  },
  {
    id: "post-4",
    title: "Pre-Season Prep: Pushing the Limits",
    slug: "pre-season-prep",
    content:
      "Ever wondered what a top athlete's pre-season training looks like? We take you behind the scenes of the intense drills and gym sessions. See exclusive photos and learn about the dedication it takes to stay at the top.",
    imageId: "post-4",
    authorId: "user-3",
    categoryId: "cat-3",
    createdAt: "2024-07-17T18:00:00Z",
    comments: [],
  },
  {
    id: "post-5",
    title: "Fan Art Showcase: Our Favorite Creations This Month",
    slug: "fan-art-showcase",
    content:
      "The creativity in this community is amazing! We're showcasing some of the best fan art submitted this month. From incredible portraits to hilarious comics, you all are incredibly talented. Keep them coming!",
    imageId: "post-5",
    authorId: "user-2",
    categoryId: "cat-4",
    createdAt: "2024-07-16T22:00:00Z",
    comments: [
      {
        id: "comment-4",
        text: "So cool to see my drawing featured! Thanks!",
        authorId: "user-1",
        createdAt: "2024-07-17T08:00:00Z",
      },
    ],
  },
];

export const merchandise: Merchandise[] = [
  {
    id: "merch-1",
    name: "Official Home Kit 24/25",
    price: 90.0,
    imageId: "merch-1",
    description:
      "The official home jersey for the new season. Lightweight, breathable fabric. Available in all sizes.",
  },
  {
    id: "merch-2",
    name: "'FanVerse' Team Scarf",
    price: 25.0,
    imageId: "merch-2",
    description:
      "Classic knit scarf with team colors and embroidered logo. Perfect for match day.",
  },
  {
    id: "merch-3",
    name: "Limited Edition Signed Photo",
    price: 75.0,
    imageId: "merch-3",
    description:
      "A high-quality action shot, hand-signed by the star. A true collector's item.",
  },
  {
    id: "merch-4",
    name: "'Goal!' Mug",
    price: 18.0,
    imageId: "merch-4",
    description:
      "Start your day right with this ceramic mug celebrating a legendary goal.",
  },
];
