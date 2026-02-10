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
      "Individualized sessions built around the athlete’s goals, current level, and progression pace.",
    bestFor: "Athletes who need custom technical coaching and direct feedback every session.",
    format: "Private sessions",
    outcome: "Cleaner execution, faster corrections, and measurable progress.",
    cadence: "Typically 1-2 sessions per week",
  },
  {
    slug: "semi-private-training",
    title: "Semi-Private Training",
    summary:
      "Small-group coaching with focused instruction, clear standards, and high accountability.",
    bestFor: "Athletes who thrive in a focused peer setting without losing individual attention.",
    format: "Small group (limited spots)",
    outcome: "Higher quality reps, stronger confidence, and consistent development.",
    cadence: "Typically 1-3 sessions per week",
  },
  {
    slug: "classes-tumbling-stunting",
    title: "Classes: Tumbling + Stunting",
    summary:
      "Structured classes designed for safe progression and technical consistency.",
    bestFor: "Athletes building fundamentals before moving into advanced progression tracks.",
    format: "Structured class blocks",
    outcome: "Reliable foundations that transfer to team settings and competition readiness.",
    cadence: "Rolling class schedule",
    comingSoon: true,
  },
  {
    slug: "high-school-college-pathway",
    title: "High School + College Pathway",
    summary:
      "College-journey consulting and development support for athletes preparing for what’s next.",
    bestFor: "Athletes and families seeking a clear path beyond all-star environments.",
    format: "Consulting + athlete development planning",
    outcome: "Aligned next steps, stronger readiness, and confident long-term direction.",
    cadence: "Milestone-based planning with coaching support",
  },
  {
    slug: "mental-performance-training",
    title: "Mental Performance Training",
    summary:
      "Build focus, confidence, composure, and competitive consistency under pressure.",
    bestFor: "Athletes who want stronger mindset tools in training and competition.",
    format: "Individual or small-group sessions",
    outcome: "Faster resets, better composure, and more dependable performance.",
    cadence: "Integrated with technical training",
  },
  {
    slug: "social-media-guidance",
    title: "Social Media Guidance (Be Seen. Be KNWN.)",
    summary:
      "Visibility with purpose for athletes building an authentic, professional online presence.",
    bestFor: "Athletes who want to stand out without chasing trends.",
    format: "Strategy sessions + profile guidance",
    outcome: "Clearer athlete positioning and stronger digital credibility.",
    cadence: "Monthly strategy checkpoints",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Do I have to be a member to train at KNWN?",
    a: "No. Membership is not required to start, but it is strongly encouraged for athletes who want the full KNWN training experience and consistent progression.",
  },
  {
    q: "How do consultations work?",
    a: "Submit the contact form and select Book Consultation or Learn More About. If you choose Book Consultation, we send next steps to create your account and schedule.",
  },
  {
    q: "What happens when monthly consultation spots are full?",
    a: "You can still submit your inquiry. You will be added to the list in order received, and requests roll into the next available month.",
  },
  {
    q: "Which services are available now?",
    a: "Personalized Coaching, Semi-Private Training, High School + College Pathway, Mental Performance Training, and Social Media Guidance are available now. Classes: Tumbling + Stunting are launching soon.",
  },
  {
    q: "What athlete levels do you support?",
    a: "We work with developing, intermediate, and advanced athletes. We use your consultation details to place each athlete in the right path.",
  },
  {
    q: "Do you support college journey planning?",
    a: "Yes. College-journey consulting is a core KNWN differentiator and a central part of our athlete development model.",
  },
];
