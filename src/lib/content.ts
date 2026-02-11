export type Service = {
  slug: string;
  title: string;
  summary: string;
  bestFor: string;
  format: string;
  outcome: string;
  cadence: string;
  detailParagraphs?: string[];
  comingSoon?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "personalized-coaching",
    title: "One-on-One Elite Coaching",
    summary:
      "Precision training tailored to athlete goals, skill level, and college ambition.",
    bestFor: "Athletes who need custom technical coaching and direct feedback every session.",
    format: "Private sessions",
    outcome: "Elevated execution. Faster mastery. Proven progression.",
    cadence: "Typically 1-2 sessions per week",
    detailParagraphs: [
      "At KNWN, one-on-one coaching is not simply private instruction — it is precision development. Every session is built around the athlete’s current skill profile, movement efficiency, mental approach, and long-term goals. Training is intentionally structured to eliminate wasted reps, correct technical inefficiencies, and accelerate mastery through individualized progressions. This environment allows athletes to focus deeply, move with purpose, and train without distraction.",
      "What separates KNWN one-on-one coaching is how progress is measured and guided. Each athlete trains within the KNWN Method, meaning sessions are not random or reactive — they are part of a larger progression plan designed to prepare athletes for higher-level performance and, when applicable, college readiness. This service is essential for athletes who want clarity, accountability, and elite-level attention that directly translates to confidence on the floor and consistency under pressure.",
    ],
  },
  {
    slug: "semi-private-training",
    title: "Selective Small-Group Training",
    summary:
      "Focused instruction in high-accountability groups for accelerated confidence and consistent performance gains.",
    bestFor: "Athletes who thrive in a focused peer setting without losing individual attention.",
    format: "Small group (limited spots)",
    outcome: "Accelerated confidence, sharper execution, and consistent performance gains.",
    cadence: "Typically 1-3 sessions per week",
    detailParagraphs: [
      "KNWN small-group training is intentionally capped to preserve quality, accountability, and focus. Athletes are grouped by skill level, goals, and developmental needs, ensuring that every rep serves a purpose. This structure allows athletes to benefit from peer energy while still receiving individualized feedback, making it ideal for athletes who thrive in a competitive yet controlled environment.",
      "The importance of this service at KNWN lies in its balance between individual development and performance readiness. Athletes learn how to execute skills with precision while adapting to shared space, timing, and expectation — all critical elements of real-world cheer environments. Unlike traditional group classes, KNWN small-group sessions are designed to elevate athletes who are ready to train with intention, sharpen execution, and prepare for the demands of elite programs and tryout settings.",
    ],
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
    title: "High School → College Pathway",
    summary:
      "Elite roadmap and coaching support designed for athletes ready to transition to the next level — with clarity and confidence.",
    bestFor: "Athletes and families seeking a clear path beyond all-star environments.",
    format: "Consulting + athlete development planning",
    outcome: "Aligned preparation, stronger readiness, and confident next-level direction.",
    cadence: "Milestone-based planning with coaching support",
    detailParagraphs: [
      "The KNWN High School to College Pathway is a strategic development experience, not a one-time consult. This service is designed for athletes and families who want clarity around what it actually takes to compete at the next level. From skill expectations and progression timelines to mental readiness and exposure strategy, athletes receive guidance that aligns training with long-term outcomes.",
      "What makes this pathway essential at KNWN is the integration of training and planning. Rather than separating skill development from college preparation, KNWN intentionally connects the two. Athletes are guided through intentional goal setting, realistic timelines, and honest evaluations — ensuring that effort is aligned with opportunity. This service exists to eliminate guesswork, build confidence, and help athletes move forward with direction, purpose, and an elite standard.",
    ],
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
    a: "One-on-One Elite Coaching, Selective Small-Group Training, High School → College Pathway, Mental Performance Training, and Social Media Guidance are available now. Classes: Tumbling + Stunting are launching soon.",
  },
  {
    q: "What athlete levels do you support?",
    a: "We work with developing, intermediate, and advanced athletes. We use your consultation details to place each athlete in the right path.",
  },
  {
    q: "Do you support college journey planning?",
    a: "Yes. College prep and exposure strategy are core KNWN differentiators and central parts of our athlete development model.",
  },
];
