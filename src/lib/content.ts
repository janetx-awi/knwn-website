export type Service = {
  slug: string;
  title: string;
  summary: string;
  bestFor: string;
  format: string;
  outcome: string;
  cadence: string;
  comingSoon?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "personalized-coaching",
    title: "Personalized Coaching (1-on-1)",
    summary:
      "Individualized sessions built around your goals, season timeline, and technical progression.",
    bestFor: "Athletes who want fully customized skill progression and direct coach feedback.",
    format: "Private sessions",
    outcome: "Cleaner execution, faster corrections, and measurable week-to-week momentum.",
    cadence: "Typically 1-2 sessions per week",
  },
  {
    slug: "semi-private-training",
    title: "Semi-Private Training",
    summary:
      "Small-group training with focused reps, close coaching attention, and accountable progression.",
    bestFor: "Athletes who thrive with peers while still needing individualized technical cues.",
    format: "Small group (limited spots)",
    outcome: "Higher rep quality, stronger confidence, and consistent performance gains.",
    cadence: "Typically 1-3 sessions per week",
  },
  {
    slug: "classes-tumbling-stunting",
    title: "Classes: Tumbling + Stunting",
    summary:
      "Technique-led classes designed to build foundational consistency and safer skill development.",
    bestFor: "Athletes building core tumbling and stunting mechanics before advanced progression.",
    format: "Structured class blocks",
    outcome: "Reliable fundamentals that transfer to team settings and competition readiness.",
    cadence: "Rolling class schedule",
    comingSoon: true,
  },
  {
    slug: "hs-college-prep",
    title: "High School + College Prep",
    summary:
      "Progression planning and performance support for athletes preparing for the next level.",
    bestFor: "Athletes targeting high school varsity impact and college-ready execution.",
    format: "Planning + performance coaching",
    outcome: "Clear pathway decisions, stronger readiness, and confident next-level preparation.",
    cadence: "Season-based training plans",
  },
  {
    slug: "mental-performance",
    title: "Mental Performance Training",
    summary:
      "Focused work on confidence, competition mindset, routines, and consistency under pressure.",
    bestFor: "Athletes who need tools to stay composed, confident, and coachable in high-pressure moments.",
    format: "Individual or small-group sessions",
    outcome: "Improved focus, faster resets, and better performance consistency.",
    cadence: "Integrated with physical training",
  },
  {
    slug: "social-media-guidance",
    title: "Social Media Guidance (Be Seen, Be KNWN)",
    summary:
      "Build a digital presence that supports your athlete goals with strategic, authentic positioning.",
    bestFor: "Athletes who want a credible, coach- and recruiter-friendly personal brand.",
    format: "Strategy sessions + content guidance",
    outcome: "Stronger visibility and clearer athlete positioning online.",
    cadence: "Monthly strategy checkpoints",
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
