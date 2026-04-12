
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
  { id: "user-admin", name: "Team Pacheco Management", imageId: "avatar-1" },
  { id: "u-1", name: "Strategic_Player_KC", imageId: "avatar-2" },
  { id: "u-2", name: "Founder_Focus_33", imageId: "avatar-3" },
  { id: "u-3", name: "Jersey_Entreprenuer", imageId: "avatar-1" },
  { id: "u-4", name: "Coach_V_Develops", imageId: "avatar-2" },
  { id: "u-5", name: "Investor_Mom_21", imageId: "avatar-3" },
  { id: "u-6", name: "Market_Mover_Chiefs", imageId: "avatar-1" },
  { id: "u-7", name: "Legacy_Chief_85", imageId: "avatar-2" },
  { id: "u-8", name: "CryptoKingdom", imageId: "avatar-3" },
  { id: "u-9", name: "TrainingDay_Tina", imageId: "avatar-1" },
  { id: "u-10", name: "Digital_Pop_Fan", imageId: "avatar-2" },
  { id: "u-11", name: "Jersey_Junction", imageId: "avatar-3" },
  { id: "u-12", name: "Young_Baller_Dad", imageId: "avatar-1" },
  { id: "u-13", name: "KC_Gridiron_Girl", imageId: "avatar-2" },
  { id: "u-14", name: "Marcus_The_Trainer", imageId: "avatar-3" },
  { id: "u-15", name: "Proud_Papa_34", imageId: "avatar-1" },
  { id: "u-16", name: "Jersey_Girl_In_MO", imageId: "avatar-2" },
  { id: "u-17", name: "Football_Fanatic_87", imageId: "avatar-3" },
  { id: "u-18", name: "Sara_KCMO", imageId: "avatar-1" },
  { id: "u-19", name: "Coach_Miller88", imageId: "avatar-2" },
  { id: "u-20", name: "ChiefsKingdomMom", imageId: "avatar-3" },
  { id: "u-21", name: "Vineland_Native", imageId: "avatar-1" },
  { id: "u-22", name: "DraftScout_Terry", imageId: "avatar-2" },
  { id: "u-23", name: "YouthSportsDad_KC", imageId: "avatar-3" },
  { id: "u-24", name: "JerseyStrong99", imageId: "avatar-1" },
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
    title: "Highlight: The Pacheco Ecosystem: Strategic Partnerships for Fan Growth",
    slug: "pacheco-ecosystem-strategic-partnerships",
    content: "True success isn't just about what happens on the field; it’s about the team you build off of it. Isiah \"Pop\" Pacheco’s mission has always been to elevate those around him, and that mission is powered by a curated network of world-class partners, sponsors, and investment opportunities.\n\nProfessionalism Meets Purpose\nWe don’t just accept sponsors; we build alliances. Every partnership in the Pacheco ecosystem is selected based on a single criterion: How does this enrich the lives of our fans and young athletes? From industry-leading sports tech firms to financial wellness mentors, our sponsors provide the tools, education, and infrastructure that allow our community to grow alongside Isiah’s career.\n\nWealth & Wellness: The New Playbook\nOur investment strategy focuses on long-term legacy. Through exclusive webinars and \"Founder Sessions,\" we offer our Tier 1 and Legacy members insights into the business of sports, brand building, and financial literacy. By leveraging Isiah’s professional network, we are opening doors that were previously closed, proving that the \"Pacheco Way\" is about winning in every arena—financial, physical, and professional.\n\nOur Partners in Excellence:\n- Business Inquiries: Pacheco Strategic Management Portal\n- Community Investment: Chiefs Business Network\n- Youth Development Tech: FlexWork Performance Labs",
    imageId: "post-1",
    authorId: "user-admin",
    categoryId: "cat-1",
    createdAt: "2024-07-25T10:00:00Z",
    comments: [
      { id: "c-1", authorId: "u-1", text: "Finally, a professional athlete who treats his platform like a business incubator for his fans. The financial literacy webinar last month gave me more practical advice than I got in four years of college. Serious respect.", createdAt: "2024-07-25T11:00:00Z" },
      { id: "c-2", authorId: "u-2", text: "It’s refreshing to see partnerships that actually mean something. You can tell these aren't just paid ads—they are resources. The investment insights alone make the membership a strategic asset for my family.", createdAt: "2024-07-25T12:30:00Z" },
      { id: "c-3", authorId: "u-3", text: "The 'Founder Sessions' are a masterclass. Seeing how Isiah scales his brand while staying true to his Vineland roots is a blueprint for any young business owner. This is professional sports at its finest.", createdAt: "2024-07-25T14:15:00Z" },
      { id: "c-4", authorId: "u-4", text: "I’ve seen a lot of camps, but the technology Isiah’s sponsors bring to the field is next-level. Our kids are getting access to data and recovery tools that were once reserved for pros. That’s real empowerment.", createdAt: "2024-07-25T15:00:00Z" },
      { id: "c-5", authorId: "u-5", text: "I love that the focus is on 'Legacy.' It’s not just about football; it’s about building a future. The network of partners here is top-tier and brings a lot of credibility to the entire organization.", createdAt: "2024-07-25T16:45:00Z" },
      { id: "c-6", authorId: "u-6", text: "This is how you do it. No desperation, just high-value networking. By bringing these global sponsors to the fans, Pacheco is creating a rising tide that lifts all boats in the Kingdom.", createdAt: "2024-07-25T18:20:00Z" },
    ],
  },
  {
    id: "post-3",
    title: "Fan Event: Exclusive Tier 1 Fan Access Opens",
    slug: "tier-1-fan-access-opens",
    content: "To give our Tier 1 members the ultimate VIP experience, we’ve overhauled our rewards program. This isn't just about a seat in the stands—it’s about joining the \"Inner Circle\" of the Pacheco Legacy.\n\nThe gates have officially swung open for our Tier 1 Members, and the \"Pacheco Experience\" just reached a whole new level of prestige. While the standard camp is an absolute blast, Tier 1 is designed for the fans who want to move beyond the bleachers and get right into the heart of the action.\n\nThe \"Inner Circle\" Premium Perks\nThis isn't just a membership; it's a lifestyle for the Chiefs Kingdom. Our Tier 1 members now receive:\n- The Legacy Welcome Pack: A hand-signed, personalized letter from Isiah himself, accompanied by an official Legacy Fan Card mailed directly to your door.\n- Quarterly Private Video Drops: Get \"Pop’s\" raw, uncut thoughts on the season, training tips, and life in the NFL.\n- Early Access to the Vault: Be the first in line for limited-edition collectible drops and exclusive NFT releases.\n- The VIP Invitation List: Gain priority access to select in-person training camps, exclusive OTA viewing days, and high-stakes matches.\n- Global Priority Entry: Whenever Isiah travels for sponsored fan experiences, Tier 1 members move to the front of the line.\n\nJoin the Inner Circle:\n- Member Portal: FlexWork Legacy Access\n- Exclusive Content: Isiah Pacheco Official Digital Vault\n- Upcoming Events: Chiefs Training Camp Schedule",
    imageId: "post-3",
    authorId: "user-admin",
    categoryId: "cat-4",
    createdAt: "2024-07-24T09:00:00Z",
    comments: [
      { id: "c-7", authorId: "u-7", text: "Just got my Legacy Fan Card in the mail today! The personalized letter from Isiah is already framed in my man cave. This is how you treat real fans!", createdAt: "2024-07-24T10:30:00Z" },
      { id: "c-8", authorId: "u-8", text: "Finally! That early access to the NFT drops is a game-changer. I managed to snag the 'Rookie Grit' edition before it sold out in minutes. Tier 1 pays for itself.", createdAt: "2024-07-24T11:45:00Z" },
      { id: "c-9", authorId: "u-9", text: "Watching the OTAs from the VIP section was an experience I'll never forget. Seeing the speed of the game that close up is unreal. Thank you, Team Pacheco!", createdAt: "2024-07-24T13:20:00Z" },
      { id: "c-10", authorId: "u-10", text: "The quarterly video drops are my favorite part. Hearing Isiah break down his mindset after a big win feels like you're actually in the locker room with him.", createdAt: "2024-07-24T15:10:00Z" },
      { id: "c-11", authorId: "u-11", text: "I travel a lot for work, so the priority entry for sponsored events is huge. I used it at the NYC pop-up and skipped a three-hour line. Best investment I've made this year.", createdAt: "2024-07-24T17:00:00Z" },
      { id: "c-12", authorId: "u-12", text: "My son carries his Legacy Fan Card everywhere. It makes him feel like part of the team. The connection Isiah builds with his Tier 1 fans is truly special.", createdAt: "2024-07-24T19:30:00Z" },
    ],
  },
  {
    id: "post-2",
    title: "Behind the Scenes: Training Camp Moments",
    slug: "training-camp-moments",
    content: "Step behind the curtain to see what makes a Pacheco camp the highest-energy ticket in youth sports. While the highlight reels show Isiah \"Pop\" Pacheco sprinting through drills, the real magic happens in the quiet moments between the whistles.\n\nThe \"Pop\" Warmup\nLong before the campers arrive, Pacheco is on the field personally checking the cones and chatting with the local high school coaches. When the gates open, he doesn't just wave from a distance; he greets the first line of kids with his signature high-energy chest bumps. The atmosphere feels less like a clinic and more like a Chiefs pre-game tunnel.\n\nThe \"Huddle\" Sessions\nThe most impactful part of the day occurs during the \"Huddle\" sessions. Pacheco gathers the campers into small groups to share his personal training secrets—like why he runs with such high knees (to \"break the grass\") and how he handles the pressure of the Super Bowl.\n\nThe Experience\nIt’s a family affair. Parents aren't just sitting in the bleachers; they’re invited to be part of the \"Red Zone\" cheering section during the final scrimmage. From the music pumping through the speakers to the post-camp autograph session, the reality is simple: Pacheco is exactly who he is on Sundays—100% heart, 100% of the time.\n\nFollow the Tour:\n- Photo Gallery & Updates: FlexWork Sports Instagram\n- Community Impact: Kansas City Chiefs Community Page",
    imageId: "post-2",
    authorId: "user-admin",
    categoryId: "cat-3",
    createdAt: "2024-07-23T15:30:00Z",
    comments: [
      { id: "c-13", authorId: "u-13", text: "I loved seeing the behind-the-scenes footage of him high-fiving the staff. It’s clear he respects everyone on that field, not just the star athletes. Such a class act!", createdAt: "2024-07-23T16:00:00Z" },
      { id: "c-14", authorId: "u-14", text: "As a local coach who helped out at the Bellevue stop, I was blown away. Most pros just show up for the photo op, but Isiah was actually coaching up the kids' footwork. The 'Pop Warmup' is the real deal!", createdAt: "2024-07-23T17:45:00Z" },
      { id: "c-15", authorId: "u-15", text: "My son was so nervous, but Isiah pulled him aside during a drill and told him he had 'Chiefs speed.' That one comment boosted his confidence for the whole season. This camp is a game-changer.", createdAt: "2024-07-23T19:15:00Z" },
      { id: "c-16", authorId: "u-16", text: "It’s the energy for me! Even during the breaks, he’s dancing and keeping the kids hyped. It’s impossible to have a bad day at a Pop Pacheco camp.", createdAt: "2024-07-23T20:30:00Z" },
      { id: "c-17", authorId: "u-17", text: "Those Huddle Sessions sound incredible. Hearing a pro talk about the mental side of the game is exactly what these young players need. Great article!", createdAt: "2024-07-23T21:45:00Z" },
      { id: "c-18", authorId: "u-18", text: "We went to the Lincoln Prep camp and the atmosphere was electric. This article perfectly captures that 'Red Zone' family feeling. We’re already counting down to next summer!", createdAt: "2024-07-23T22:50:00Z" },
    ],
  },
  {
    id: "post-4",
    title: "Highlight: More Than Just Footwork",
    slug: "more-than-just-footwork",
    content: "A powerhouse of energy and heart, Isiah \"Pop\" Pacheco hasn't forgotten where his journey began. From the hard-nosed fields of Vineland, New Jersey, to the bright lights of the Super Bowl, Pacheco’s youth camps are more than just drills—they are a masterclass in \"Pop’s\" signature high-octane running style and relentless work ethic.\n\nThe Highlight: More Than Just Footwork\nThe defining moment of Pacheco’s youth camps isn't a touchdown or a sprint; it’s the \"Energy Circle.\" Before every session, \"Pop\" gathers hundreds of kids to preach his philosophy: “Run like your life depends on it.” Watching a two-time Super Bowl champion get down in the dirt to show a 10-year-old how to tuck a football is the ultimate highlight.\n\nThe Backstory: The Vineland Roots\nPacheco’s path to the NFL was paved with both grit and heartbreak. Growing up in Vineland, NJ, he faced immense personal tragedy. Instead of letting the weight of the world slow him down, he funneled that emotion into a running style that looks like he’s trying to \"crack the earth\" with every step.\n\nAfter a stellar career at Rutgers, Pacheco was drafted in the 7th round—the 251st pick. Many overlooked him, but the Kansas City Chiefs found a diamond in the rough. Today, his camps are his way of giving back to the communities that raised him.\n\nResources for Parents:\n- Official Registration: FlexWork Sports Management\n- Local Community Partner: Vineland Blitz Football\n- Chiefs News: Chiefs Wire - Pacheco Camp Coverage",
    imageId: "post-4",
    authorId: "user-admin",
    categoryId: "cat-1",
    createdAt: "2024-07-22T18:00:00Z",
    comments: [
      { id: "c-19", authorId: "u-19", text: "Took my son to the Columbia camp last June. Pop didn’t just stand on the sidelines with a whistle; he was literally running the routes with the kids. Best camp experience we've had yet!", createdAt: "2024-07-22T19:30:00Z" },
      { id: "c-20", authorId: "u-20", text: "The way he talks to these kids about character is so important. My daughter came home and wouldn't stop talking about his 'never give up' speech. We need more athletes like Isiah.", createdAt: "2024-07-22T20:45:00Z" },
      { id: "c-21", authorId: "u-21", text: "Seeing Pop come back to Gittone Stadium every year means everything to this city. He’s the same humble kid he was back in high school. A true hometown hero!", createdAt: "2024-07-22T21:55:00Z" },
      { id: "c-22", authorId: "u-22", text: "You can see his 7th-round chip-on-the-shoulder mentality in how he teaches. He's teaching these kids that it doesn’t matter where you're drafted, it matters how you finish the play.", createdAt: "2024-07-22T23:10:00Z" },
      { id: "c-23", authorId: "u-23", text: "Expensive? Maybe. Worth it? Absolutely. The gear is cool, but the one-on-one interaction my boy got during the RB drills was priceless. Pacheco’s energy is infectious.", createdAt: "2024-07-23T08:20:00Z" },
      { id: "c-24", authorId: "u-24", text: "I remember watching him at Rutgers, and he’s bringing that same 'Pacheco Power' to these camps. If your kid needs a lesson in high-motor play, this is the place to be.", createdAt: "2024-07-23T10:00:00Z" },
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
