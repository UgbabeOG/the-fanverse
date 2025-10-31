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
  { id: "cat-2", name: "Music" },
  { id: "cat-3", name: "Style" },
  { id: "cat-4", name: "Fan Creations" },
];

export const posts: Post[] = [
  {
    id: "post-1",
    title: "A Night to Remember: Red Carpet Glamour",
    slug: "red-carpet-glamour",
    content: "The star dazzled on the red carpet last night, wearing a stunning custom-made gown that captured everyone's attention. This post breaks down the entire look, from the dress to the accessories, and gives you the inside scoop on the designers.",
    imageId: "post-1",
    authorId: "user-1",
    categoryId: "cat-3",
    createdAt: "2024-07-20T10:00:00Z",
    comments: [
      { id: "comment-1", text: "Absolutely breathtaking! Best dressed of the night for sure.", authorId: "user-2", createdAt: "2024-07-20T11:30:00Z" },
      { id: "comment-2", text: "I need to know who did the makeup, it was flawless!", authorId: "user-3", createdAt: "2024-07-20T12:15:00Z" },
    ],
  },
  {
    id: "post-2",
    title: "New Single 'Midnight Echo' Drops Friday!",
    slug: "new-single-midnight-echo",
    content: "Get ready! The highly anticipated new single, 'Midnight Echo', is set to release this Friday. We've got an exclusive sneak peek into the music video and a few words from the artist about the inspiration behind the track. The countdown begins now!",
    imageId: "post-2",
    authorId: "user-2",
    categoryId: "cat-2",
    createdAt: "2024-07-19T15:30:00Z",
    comments: [],
  },
  {
    id: "post-3",
    title: "Candid Moments: A Look Back at the Funniest Interviews",
    slug: "funniest-interviews",
    content: "Our favorite star is known for their incredible talent, but also for their amazing sense of humor. We've compiled a list of the most hilarious and heartwarming moments from past interviews. Get ready to laugh!",
    imageId: "post-3",
    authorId: "user-1",
    categoryId: "cat-1",
    createdAt: "2024-07-18T09:00:00Z",
    comments: [
      { id: "comment-3", text: "This made my day! The laugh is so infectious.", authorId: "user-3", createdAt: "2024-07-18T10:00:00Z" },
    ],
  },
  {
    id: "post-4",
    title: "Behind the Lens: The Making of the Latest Album Cover",
    slug: "album-cover-bts",
    content: "Ever wondered what goes into creating an iconic album cover? We take you behind the scenes of the photoshoot for the latest album. See exclusive photos and learn about the creative process from the photographer and stylist.",
    imageId: "post-4",
    authorId: "user-3",
    categoryId: "cat-4",
    createdAt: "2024-07-17T18:00:00Z",
    comments: [],
  },
   {
    id: "post-5",
    title: "Live in Concert: A Spectacle of Light and Sound",
    slug: "live-in-concert-review",
    content: "The world tour is in full swing, and we were there for the opening night. Read our full review of the concert, from the electrifying performances to the stunning stage design. It's a show you don't want to miss!",
    imageId: "post-5",
    authorId: "user-2",
    categoryId: "cat-2",
    createdAt: "2024-07-16T22:00:00Z",
    comments: [
      { id: "comment-4", text: "I was there! It was the best night of my life.", authorId: "user-1", createdAt: "2024-07-17T08:00:00Z" },
    ],
  },
];

export const merchandise: Merchandise[] = [
  { id: "merch-1", name: "Official Tour T-Shirt", price: 35.00, imageId: "merch-1", description: "High-quality cotton t-shirt featuring the official tour design. Available in all sizes." },
  { id: "merch-2", name: "'FanVerse' Logo Cap", price: 25.00, imageId: "merch-2", description: "Stylish and comfortable baseball cap with an embroidered logo. One size fits all." },
  { id: "merch-3", name: "Limited Edition Signed Poster", price: 75.00, imageId: "merch-3", description: "A beautifully designed poster, hand-signed by the star. A true collector's item." },
  { id: "merch-4", name: "'Midnight Echo' Mug", price: 18.00, imageId: "merch-4", description: "Start your day right with this ceramic mug featuring artwork from the new single." },
];
