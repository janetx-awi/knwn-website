export type Service = {
  slug: string;
  title: string;
  summary: string;
  comingSoon?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "personalized-coaching",
    title: "Personalized Coaching (1-on-1)",
    summary: "Individualized training built around your goals, season, and progression.",
  },
  {
    slug: "semi-private-training",
    title: "Semi-Private Training",
    summary: "Small-group sessions for athletes who want more reps, more feedback, more results.",
  },
  {
    slug: "classes-tumbling-stunting",
    title: "Classes: Tumbling + Stunting",
    summary: "Technique-led classes designed for safe, confident skill development.",
    comingSoon: true,
  },
  {
    slug: "hs-college-prep",
    title: "High School + College Prep",
    summary: "Guidance, planning, and performance support for the next level.",
  },
  {
    slug: "mental-performance",
    title: "Mental Performance Training",
    summary: "Confidence, focus, routine, and competition mindset work.",
  },
  {
    slug: "social-media-guidance",
    title: "Social Media Guidance (Be Seen, Be KNWN)",
    summary: "Build a presence that supports your goals with clarity and consistency.",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "How do I get started?",
    a: "Start with a consultation request. We will confirm availability and recommend the best service based on goals, schedule, and current skill level.",
  },
  {
    q: "Do you offer month-to-month options?",
    a: "Yes. We will outline options during the consultation and match a plan to your season and goals.",
  },
  {
    q: "Where do sessions take place?",
    a: "Training is hosted at the KNWN facility. Exact address and arrival instructions will be shared after booking.",
  },
];
