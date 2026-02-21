export type Service = {
  slug: string;
  title: string;
  summary: string;
  bestFor: string;
  format: string;
  outcome: string;
  cadence: string;
  detailParagraphs?: string[];
  closingStatement?: string;
  comingSoon?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "personalized-coaching",
    title: "One-on-One Elite Coaching",
    summary:
      "Precision development tailored to your athlete's goals, skill level, and college readiness.",
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
      "Capped sessions. Peer energy. Elite execution. Built for athletes who are ready to elevate.",
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
    slug: "knwn-academy",
    title: "KNWN Academy",
    summary: "Where High School Programs Come to Grow, Together. Full-floor access, coaching support, and structured progressions for entire programs.",
    bestFor: "High school cheer programs seeking elite development support for their full team.",
    format: "Program partnership + facility access",
    outcome: "Stronger programs, better athletes, measurable team progression.",
    cadence: "Scheduled blocks based on program availability",
    detailParagraphs: [
      "KNWN Academy is designed for high school programs that want more than gym time — they want growth. Teams gain access to KNWN's full floor, coaching assistance, and a structured environment built to challenge and develop every athlete at every level. Whether your program is rebuilding fundamentals or preparing for championship competition, KNWN Academy provides the resources and expertise to accelerate that journey.",
      "Through KNWN Academy, programs receive structured stunting and tumbling progressions tailored to their roster, coaching assistance from KNWN staff, and program development support that extends beyond the practice floor. This is a partnership model — we invest in your program's success the same way we invest in individual athletes. The result is a stronger program, more confident athletes, and a measurable step forward every session.",
    ],
    closingStatement: "Your program is only as strong as its development environment. Bring your team to KNWN.",
  },
  {
    slug: "classes-tumbling-stunting",
    title: "Classes: Tumbling + Stunting",
    summary:
      "Small Classes. Big Skills. Maximum Attention. Structured progressions for every level.",
    bestFor: "Athletes building fundamentals or advancing to higher-level tumbling and stunting skills.",
    format: "Structured class blocks — separate Tumbling and Stunting tracks",
    outcome: "Reliable foundations, advanced skill execution, and competition readiness.",
    cadence: "Rolling class schedule",
    detailParagraphs: [
      "KNWN Tumbling Classes are built for athletes who want to advance their skills in a structured, coach-led environment. Classes are capped to ensure every athlete receives individualized attention and progressions appropriate to their current skill level. Whether your athlete is working on their first back walkover or refining a full, our tumbling classes provide the safe, focused repetition needed to build consistency and confidence.",
      "KNWN Stunting Classes follow the same principle — small groups, intentional progressions, and coaching that prioritizes correct technique over rushed advancement. Athletes learn the fundamentals of basing, flying, and backspotting in a controlled environment with a focus on safety, trust, and technical mastery. Our classes are different because they are not drop-in sessions — they are structured progressions with clear goals and measurable outcomes.",
    ],
  },
  {
    slug: "high-school-college-pathway",
    title: "College Consulting for Cheerleaders",
    summary:
      "Prepare. Connect. Commit. The strategic pathway for athletes ready to compete at the next level.",
    bestFor: "Athletes and families seeking a clear, coached pathway to collegiate cheer.",
    format: "Consulting + athlete development planning",
    outcome: "Aligned preparation, stronger readiness, and confident next-level direction.",
    cadence: "Milestone-based planning with coaching support",
    detailParagraphs: [
      "The KNWN College Consulting program is built for athletes and families who are serious about the collegiate cheer pathway. From skill expectations and progression timelines to mental readiness and exposure strategy, athletes receive personalized guidance that aligns their training with long-term outcomes. This is not a general prep course — it is a customized roadmap built around your athlete.",
      "Recruitment support, personalized pathways, tryout preparation, and family guidance are all integrated into this service. Families receive honest evaluations, realistic timelines, and intentional goal-setting to ensure that effort is aligned with opportunity. Athletes move forward with direction, purpose, and an elite standard — not just hope.",
    ],
    closingStatement: "The college journey does not have to be uncertain. At KNWN, we make it intentional.",
  },
  {
    slug: "mental-performance-training",
    title: "Mental Performance Program",
    summary:
      "Break the Barrier. Build the Mindset. Own Your Success. Six or ten weeks to elite mental performance.",
    bestFor: "Athletes who want stronger mindset tools in training and competition.",
    format: "Individual or small-group sessions",
    outcome: "Faster resets, better composure, and more dependable performance.",
    cadence: "Integrated with technical training",
    detailParagraphs: [
      "The KNWN Mental Performance Program is structured as a 6-week or 10-week journey, depending on athlete goals and development needs. Each week includes a personalized coaching session focused on focus, composure, confidence, and competitive consistency. Athletes receive accountability check-ins, tracked progress documentation, and a performance framework they can use in practice and competition.",
      "What makes this program different is its integration with physical training. Mental performance at KNWN is not separate from skill development — it is woven into every session, every progression, every challenge. Athletes leave with documented growth, transferable mindset tools, and the ability to perform under pressure when it matters most. Parent documentation is included so families can track and reinforce progress at home.",
    ],
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
