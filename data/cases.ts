export type CaseMetric = {
  value: string;
  label: string;
};

export type CaseChallenge = {
  icon: string;
  title: string;
  description: string;
};

export type TimelineStep = {
  label: string;
};

export type ProcessSection = {
  title: string;
  paragraphs: string[];
};

export type LearningArtifact = {
  title: string;
  description: string;
};

export type Case = {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  coverImage: string;
  coverAlt: string;
  variant: "full" | "half";
  accentColor: string;
  timeline: string;
  year: string;
  metrics: CaseMetric[];
  context: {
    left: string;
    right: string[];
  };
  challenges: CaseChallenge[];
  timelineSteps: TimelineStep[];
  processSections: ProcessSection[];
  quote: {
    text: string;
    attribution: string;
  };
  solutionTitle: string;
  solutionContent: ProcessSection[];
  learningArtifacts: LearningArtifact[];
};

export const cases: Case[] = [
  {
    slug: "scratch-card",
    title: "Scratch Card",
    tags: ["Gamification", "Behavioral Design", "Conversion"],
    description:
      "Designed a gamified financial product inspired by the physical scratch card experience, creating a stronger emotional investment loop through a 1:1 instant-feedback mechanic.",
    coverImage: "/images/scratch-card-cover.jpg",
    coverAlt: "Scratch Card mobile app screens",
    variant: "full",
    accentColor: "#7B61FF",
    timeline: "3 weeks",
    year: "2025",
    metrics: [
      { value: "R$625K", label: "generated in one day" },
      { value: "High NPS", label: "from repeat purchases" },
      { value: "1:1 Logic", label: "validated as user preference" },
    ],
    context: {
      left: "Traditional capitalization products lacked engagement mechanics to drive repeat purchase behavior and emotional investment from users.",
      right: [
        "The financial product landscape was dominated by traditional capitalization bonds — low-engagement, complex to understand and rarely exciting for end users. The challenge was to reimagine this category within a highly regulated environment.",
        "Users purchased these products understanding that prizes would be distributed via monthly draws. However, the long wait between purchase and result created disengagement and reduced retention rates across the platform.",
        "The challenge was to maintain the financial product's core compliance requirements while wrapping it in a behavioral layer that drove excitement, repeat purchases and long-term platform loyalty.",
      ],
    },
    challenges: [
      {
        icon: "✦",
        title: "Emotional Translation",
        description:
          "Translate the physical scratch-card sensation into a digital experience that preserves the tactile thrill and instant gratification users expect.",
      },
      {
        icon: "⟳",
        title: "Behavioral Loop",
        description:
          "Create a repeatable behavioral pattern that encourages users to re-engage with the product after each draw cycle, driving retention and repeat purchases.",
      },
      {
        icon: "⚡",
        title: "Instant Feedback",
        description:
          "Design a 1:1 logic system that delivers immediate, personalized feedback at the moment of reveal — making every interaction feel unique and rewarding.",
      },
    ],
    timelineSteps: [
      { label: "Brainstorm" },
      { label: "Benchmark" },
      { label: "Flow Mapping" },
      { label: "Wireframes" },
      { label: "Validation" },
    ],
    processSections: [
      {
        title: "Discovery & Research",
        paragraphs: [
          "Conducted workshops with stakeholders to understand regulatory constraints, business goals and existing user behavior patterns across the product portfolio.",
          "Benchmarked physical scratch card experiences and digital lottery products globally to identify key behavioral triggers and emotional peaks in the user journey.",
        ],
      },
      {
        title: "Design & Iteration",
        paragraphs: [
          "Mapped user flows focusing on the moment of revelation — designing micro-interactions that maximized suspense and satisfaction at the critical scratch moment.",
          "Created high-fidelity prototypes with micro-interactions simulating the physical scratch gesture, iterating based on user feedback sessions with 12 participants.",
        ],
      },
    ],
    quote: {
      text: "Users preferred instant gratification over larger delayed rewards. The 1:1 feedback loop created trust and encouraged repeat purchases.",
      attribution: "— User Research Insights",
    },
    solutionTitle: "Solution",
    solutionContent: [
      {
        title: "Interaction Design",
        paragraphs: [
          "Designed a scratch gesture interaction that mirrors the physical experience, with haptic feedback patterns and sound design that reinforce the emotional peak at the moment of reveal.",
        ],
      },
      {
        title: "Reward System",
        paragraphs: [
          "Mapped user flows focusing on the moment of revelation — designing micro-interactions that maximized suspense and satisfaction at the critical scratch moment.",
        ],
      },
    ],
    learningArtifacts: [
      {
        title: "Immediate reward",
        description:
          "Translating the physical scratch-card sensation into a digital experience that preserves the tactile thrill and instant gratification users expect from the format.",
      },
      {
        title: "Behavioral trust",
        description:
          "Translating the physical scratch-card sensation into a digital experience that preserves the tactile thrill and instant gratification users expect from the format.",
      },
      {
        title: "Repeat loop",
        description:
          "Translating the physical scratch-card sensation into a digital experience that preserves the tactile thrill and instant gratification users expect from the format.",
      },
    ],
  },
  {
    slug: "igaming-product-evolution",
    title: "Betting Compliance & Mobile Evolution",
    tags: ["Fintech", "Multi-Platform", "Product Redesign"],
    description:
      "Designed critical product journeys for a regulated betting ecosystem, combining KYC compliance, mobile app foundations and usability testing to reduce friction while supporting business-critical flows.",
    coverImage: "/images/EB-Home-App.png",
    coverAlt: "iGaming platform redesign screens",
    variant: "half",
    accentColor: "#CACAFB",
    timeline: "4 months",
    year: "2024",
    metrics: [
      { value: "400", label: "users tested" },
      { value: "82%", label: "task success rate" },
      { value: "49s", label: "avg. task completion" },
    ],
    context: {
      left:
        "The Brazilian betting market entered a new regulatory phase, forcing platforms to redesign critical journeys to remain compliant while preserving conversion and trust.",
      right: [
        "KYC became mandatory as part of the new compliance framework, impacting onboarding, deposits and withdrawals.",
        "The product team had to quickly adapt existing flows while aligning legal requirements, operational constraints and business goals.",
        "At the same time, the ecosystem lacked a structured research culture, requiring usability validation to reduce friction and guide decisions.",
      ],
    },
    challenges: [
      {
        icon: "/assets/identification-card.svg",
        title: "Compliance Without Friction",
        description:
          "Adapt critical onboarding and KYC journeys to new regulatory requirements without increasing friction or harming conversion rates.",
      },
      {
        icon: "/assets/scales.svg",
        title: "Research Under Pressure",
        description:
          "Introduce research and usability validation practices in a product environment with little research culture and fast delivery expectations.",
      },
      {
        icon: "/assets/shield-check.svg",
        title: "Scalable Mobile Foundation",
        description:
          "Design the mobile app foundation from scratch, structuring high-priority journeys like deposits, withdrawals, betting and identity verification.",
      },
    ],
    timelineSteps: [
      { label: "Discovery" },
      { label: "Compliance" },
      { label: "Research" },
      { label: "Validation" },
      { label: "Delivery" },
    ],
    processSections: [
      {
        title: "Regulatory Discovery",
        paragraphs: [
          "Mapped the impact of Brazil’s new betting regulation across critical journeys, identifying where KYC requirements would affect onboarding, deposits and withdrawals.",
          "Worked closely with legal, product and operational teams to translate compliance requirements into actionable product decisions without compromising conversion.",
        ],
      },
      {
        title: "Flow Mapping & Prioritization",
        paragraphs: [
          "Restructured the most critical user journeys — onboarding, deposits, withdrawals and identity verification — to reduce friction and improve task clarity.",
          "Prioritized flows based on business impact and operational urgency, ensuring the most sensitive journeys were addressed first.",
        ],
      },
      {
        title: "Usability Testing & Validation",
        paragraphs: [
          "Introduced structured usability testing practices to validate new flows, measuring task success, completion time and friction points across key scenarios.",
          "Insights from 400 users helped uncover navigation issues, comprehension gaps and moments of hesitation, directly informing design refinements.",
        ],
      },
      {
        title: "Iterative Refinement & Delivery",
        paragraphs: [
          "Refined high-priority flows based on testing evidence and stakeholder feedback, balancing regulatory requirements with business and UX goals.",
          "Delivered scalable product journeys and mobile-first foundations ready for implementation across the regulated betting ecosystem.",
        ],
      },
    ],
    quote: {
      text: "Consistency isn't about making everything look the same — it's about making users feel confident wherever they are in the product.",
      attribution: "— Design Principle, iGaming Project",
    },
    solutionTitle: "Solution",
    solutionContent: [
      {
        title: "Compliance-Ready Onboarding",
        paragraphs: [
          "Redesigned onboarding and identity verification flows to support new KYC requirements, reducing ambiguity while keeping the entry journey clear and conversion-oriented.",
        ],
      },
      {
        title: "Critical Money Flows",
        paragraphs: [
          "Restructured deposit and withdrawal journeys with clearer hierarchy, better guidance and stronger user confidence in high-stakes financial actions.",
        ],
      },
      {
        title: "Usability-Driven Refinements",
        paragraphs: [
          "Validated critical journeys through usability testing, identifying friction points and refining navigation, content clarity and action hierarchy.",
        ],
      },
      {
        title: "Mobile Product Foundation",
        paragraphs: [
          "Built foundational mobile journeys to support a scalable regulated betting ecosystem, establishing patterns for betting, account management and transactional flows.",
        ],
      },
    ],
    learningArtifacts: [
      {
        title: "Compliance as experience",
        description:
          "Regulatory requirements should not be treated only as constraints. When translated with clarity, they can become moments of trust and reassurance in the user journey.",
      },
      {
        title: "Research under constraints",
        description:
          "Even in fast-moving environments, usability testing can reduce risk and help teams make better product decisions when timelines, legal requirements and business pressure are high.",
      },
      {
        title: "Mobile-first foundations",
        description:
          "Designing a regulated betting app required scalable patterns that could support critical journeys such as KYC, deposits, withdrawals and betting without creating fragmented experiences.",
      },
    ],
  },
  {
    slug: "event-commerce-redesign",
    title: "Community Event Journey Redesign",
    tags: ["White Label", "B2B2C", "Event Management"],
    description:
      "Redesigned the end-to-end event journey of a white-label platform used by churches, improving event discovery, registration, checkout and multi-platform usability across web and mobile experiences.",
    coverImage: "/images/Inpeace-mockup-detailed.png",
    coverAlt: "Event commerce platform redesign",
    variant: "half",
    accentColor: "#CACAFB",
    timeline: "3 weeks",
    year: "2024",
    metrics: [],
    context: {
      left: "A white-label event platform used by churches needed a complete redesign of its event experience across web and mobile, restructuring discovery, registration and checkout to improve clarity and reduce friction.",
      right: [
        "The legacy experience had outdated interfaces and weak information hierarchy, making it difficult for users to understand critical event details such as date, location, modality and ticket availability.",
        "All event content was concentrated inside a single text field without clear structure, forcing users to scan long blocks of information without distinction between schedule, requirements, policies or practical instructions.",
        "The platform also lacked flexibility in key transactional moments: users couldn’t buy tickets for other participants, guest checkout was not supported, and payment flows became inconsistent due to different payment processors and validation requirements.",
      ],
    },
    challenges: [
      {
        icon: "/assets/Layout.svg",
        title: "Content Architecture",
        description:
          "Transform an unstructured event page where all content lived in a single text field into a modular, scannable experience with clear hierarchy and decision-oriented information.",
      },
      {
        icon: "/assets/UserPlus.svg",
        title: "Registration Flexibility",
        description:
          "Redesign the registration flow to reduce friction by supporting guest checkout, multi-attendee purchases and persistent ticket visibility throughout the journey.",
      },
      {
        icon: "/assets/CreditCard.svg",
        title: "Payment Complexity",
        description:
          "Simplify a fragmented checkout experience shaped by multiple payment processors, translating backend constraints into a predictable and user-friendly payment flow.",
      },
    ],
    timelineSteps: [
      { label: "Immersion" },
      { label: "Audit" },
      { label: "Redesign" },
      { label: "Validation" },
      { label: "Delivery" },
    ],
    processSections: [
      {
        title: "Team Immersion & Product Context",
        paragraphs: [
          "Started with an immersion process alongside the product team to understand the platform context, business rules, church operations and technical constraints behind the event journey.",
          "This step helped clarify how the white-label model affected both sides of the experience: churches needed flexibility to publish different event formats, while attendees needed a clearer and more predictable path to registration.",
        ],
      },
      {
        title: "Heuristic Analysis & Current Experience Audit",
        paragraphs: [
          "Reviewed the legacy web and mobile interfaces through a heuristic lens, mapping usability issues related to visibility, information hierarchy, consistency, error prevention and user control.",
          "The audit revealed that critical event information was hard to scan, tickets were not visible enough during the decision journey, and checkout concentrated too much complexity in a single flow.",
        ],
      },
      {
        title: "Research and Data Immersion",
        paragraphs: [
          "Analyzed existing research findings and internal product insights to understand recurring user pain points, operational issues and behavior patterns already identified by the team.",
          "These insights helped prioritize the redesign around clarity, trust and conversion: making event information easier to understand, reducing login friction and supporting more flexible purchase scenarios.",
        ],
      },
      {
        title: "Redesign & Journey Restructuring",
        paragraphs: [
          "Redesigned the event detail page into modular sections, separating description, schedule, practical information, age rating, FAQ, organizer details and policies instead of relying on a single unstructured text field.",
          "The checkout was restructured into a step-based flow with persistent order context, multi-attendee support, guest checkout and clearer payment selection across different payment methods and processors.",
        ],
      },
      {
        title: "Validation & Handoff",
        paragraphs: [
          "Validated the new flows with stakeholders and product teams, reviewing edge cases related to event formats, ticket types, payment methods, guest users and responsive behavior.",
          "Delivered the final redesign with structured flows, responsive interface specifications and clearer content guidelines to support a more scalable white-label event experience.",
        ],
      },
    ],
    quote: {
      text: "When event information is unclear, users hesitate before registering. The redesign focused on making the journey more transparent, flexible and trustworthy from discovery to checkout.",
      attribution: "— Design Direction",
    },
    solutionTitle: "Solution",
    solutionContent: [
      {
        title: "Clear Event Communication",
        paragraphs: [
          "Reorganized the event detail page to surface essential information earlier, including date, location, event format, modality and ticket availability.",
        ],
      },
      {
        title: "Flexible Registration & Checkout",
        paragraphs: [
          "Introduced a more flexible registration flow that allowed users to buy tickets for other people and complete checkout without being forced to log in at the beginning of the journey.",
        ],
      },
      {
        title: "Scalable Visual Guidelines",
        paragraphs: [
          "Defined clearer visual and content guidelines so event images, descriptions and ticket information could adapt more consistently across different event formats and screen sizes.",
        ],
      },
      {
        title: "Guided Payment Completion",
        paragraphs: [
          "Redesigned the Pix payment flow as a guided confirmation step, with clearer hierarchy, QR code visibility, copy-code action and step-by-step instructions to help users complete payment outside the platform.",
        ],
      },
    ],
    learningArtifacts: [
      {
        title: "Clarity before conversion",
        description:
          "Users need to understand what an event is, where it happens, when it happens and how participation works before they feel confident enough to register.",
      },
      {
        title: "Flexibility in white-label products",
        description:
          "White-label platforms need patterns that are structured enough to scale, but flexible enough to support different organizations, event formats and operational constraints.",
      },
      {
        title: "Checkout depends on invisible systems",
        description:
          "Payment processors and backend rules directly shape UX decisions, especially when different providers require different fields, validation and form behavior.",
      },
    ],
  },
];

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getOtherCases(slug: string): Case[] {
  return cases.filter((c) => c.slug !== slug).slice(0, 2);
}
