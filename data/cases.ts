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
    title: "iGaming Product Evolution",
    tags: ["Fintech", "Multi-Platform", "Product Redesign"],
    description:
      "Led product improvements across a regulated iGaming ecosystem focusing on behavioral design, complex user journeys, user funnels, app top-of-funnel and affiliate platform optimization.",
    coverImage: "/images/igaming-cover.jpg",
    coverAlt: "iGaming platform redesign screens",
    variant: "half",
    accentColor: "#CACAFB",
    metrics: [
      { value: "+34%", label: "conversion uplift" },
      { value: "3.2x", label: "session depth increase" },
      { value: "-18%", label: "drop-off reduction" },
    ],
    context: {
      left: "A leading iGaming operator needed to unify fragmented product experiences across web, iOS and Android while improving key funnel metrics.",
      right: [
        "The platform had grown organically, resulting in inconsistent UI patterns and disjointed user journeys that impacted activation, retention and lifetime value.",
        "Deep data analysis revealed critical drop-off points in the onboarding funnel and deposit flow — areas with direct revenue impact that required immediate design intervention.",
        "The design challenge was to create a coherent system that could scale across multiple product lines while maintaining regulatory compliance across different jurisdictions.",
      ],
    },
    challenges: [
      {
        icon: "⊞",
        title: "Cross-Platform Consistency",
        description:
          "Unify the experience across web, iOS and Android without compromising platform-specific conventions or performance characteristics.",
      },
      {
        icon: "↑",
        title: "Funnel Optimization",
        description:
          "Identify and resolve critical drop-off points in the activation and deposit flows to drive measurable conversion improvements.",
      },
      {
        icon: "⚙",
        title: "Scalable System",
        description:
          "Build a component system that could accommodate new product lines, jurisdictions and regulatory requirements without design debt accumulation.",
      },
    ],
    timelineSteps: [
      { label: "Audit" },
      { label: "Research" },
      { label: "Mapping" },
      { label: "Prototyping" },
      { label: "Delivery" },
    ],
    processSections: [
      {
        title: "Product Audit",
        paragraphs: [
          "Conducted a comprehensive UX audit across all platforms, cataloguing 200+ screens and mapping 40+ user journeys to identify systemic inconsistencies.",
          "Partnered with data analytics team to overlay behavioral metrics onto journey maps, revealing three critical drop-off points driving 60% of funnel abandonment.",
        ],
      },
      {
        title: "System Design",
        paragraphs: [
          "Designed a scalable component library in Figma with clear governance rules, enabling the team to ship consistent UI at speed across multiple product streams.",
          "Ran fortnightly design reviews and A/B test readouts to validate decisions with real user behavior data, iterating rapidly on high-impact flows.",
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
        title: "Unified Design Language",
        paragraphs: [
          "Created a comprehensive design system with tokens for color, spacing, typography and motion — enabling consistent cross-platform delivery at speed.",
        ],
      },
      {
        title: "Funnel Redesign",
        paragraphs: [
          "Redesigned the activation and deposit flows with progressive disclosure patterns, reducing cognitive load and removing unnecessary friction points.",
        ],
      },
    ],
    learningArtifacts: [
      {
        title: "System thinking",
        description:
          "Building for scale requires defining constraints early — the most impactful design decisions happen at the system level, not the screen level.",
      },
      {
        title: "Data-led design",
        description:
          "Combining qualitative research with quantitative behavioral data created a much stronger foundation for prioritizing design improvements.",
      },
      {
        title: "Stakeholder alignment",
        description:
          "Regular design reviews with cross-functional teams significantly reduced late-stage revisions and accelerated delivery velocity.",
      },
    ],
  },
  {
    slug: "event-commerce-redesign",
    title: "Event Commerce Redesign",
    tags: ["Fintech", "Multi-Platform", "Checkout"],
    description:
      "Redesigned the end-to-end ticket purchasing journey across web and app, improving checkout conversion and creating a scalable UI for multi-event commerce under regulatory constraints.",
    coverImage: "/images/event-commerce-cover.jpg",
    coverAlt: "Event commerce platform redesign",
    variant: "half",
    accentColor: "#CACAFB",
    metrics: [
      { value: "+22%", label: "checkout completion" },
      { value: "4.8★", label: "app store rating post-launch" },
      { value: "-30%", label: "support tickets on checkout" },
    ],
    context: {
      left: "A high-growth ticketing platform needed to redesign its checkout flow to reduce abandonment and scale to support multiple event types and payment methods.",
      right: [
        "The existing checkout experience was built incrementally and had accumulated significant UX debt — long forms, unclear error states and no progress indication created anxiety and abandonment.",
        "Research revealed that users were most likely to abandon during seat selection and payment — both areas with high cognitive load and insufficient contextual guidance.",
        "The redesign needed to work within the constraints of an existing design system while introducing new patterns for seat maps, dynamic pricing and multi-ticket management.",
      ],
    },
    challenges: [
      {
        icon: "🗺",
        title: "Seat Map Complexity",
        description:
          "Design an intuitive, performant seat selection interface that works across event types and screen sizes without overwhelming users.",
      },
      {
        icon: "💳",
        title: "Payment Trust",
        description:
          "Rebuild user confidence in the payment flow through clearer progress indication, better error handling and transparent fee communication.",
      },
      {
        icon: "⟳",
        title: "Multi-ticket Logic",
        description:
          "Design a flexible cart system that handles multiple tickets, dynamic pricing, discount codes and group bookings in a single coherent flow.",
      },
    ],
    timelineSteps: [
      { label: "Research" },
      { label: "Benchmarks" },
      { label: "Flows" },
      { label: "Prototypes" },
      { label: "Testing" },
    ],
    processSections: [
      {
        title: "User Research",
        paragraphs: [
          "Ran moderated usability sessions with 8 participants and unmoderated tests with 50 users to map the emotional journey through checkout and identify pain points.",
          "Benchmarked leading ticketing platforms globally — Ticketmaster, Eventbrite, DICE — to identify best practices and differentiation opportunities.",
        ],
      },
      {
        title: "Checkout Redesign",
        paragraphs: [
          "Redesigned the checkout as a multi-step flow with persistent progress indicators, reducing the perceived complexity of the purchase process.",
          "Introduced inline validation, contextual help tooltips and proactive error messaging to significantly reduce form abandonment at critical input stages.",
        ],
      },
    ],
    quote: {
      text: "The moment a user hesitates in a checkout flow, you've already lost them. Every interaction needs to reinforce trust and forward momentum.",
      attribution: "— UX Research Finding",
    },
    solutionTitle: "Solution",
    solutionContent: [
      {
        title: "Progressive Disclosure",
        paragraphs: [
          "Broke the checkout into clear, manageable steps with a persistent progress bar — reducing cognitive load and giving users a clear sense of how far they were from completion.",
        ],
      },
      {
        title: "Trust Signals",
        paragraphs: [
          "Added security badges, transparent fee breakdowns and clear cancellation policies at the payment stage — directly addressing the anxiety triggers identified in research.",
        ],
      },
    ],
    learningArtifacts: [
      {
        title: "Anxiety mapping",
        description:
          "Mapping emotional states through the checkout journey revealed that anxiety peaks at payment — a critical insight that shaped the entire trust-building strategy.",
      },
      {
        title: "Inline validation",
        description:
          "Real-time form validation reduced error-related abandonment by giving users immediate feedback before they tried to progress to the next step.",
      },
      {
        title: "Progressive trust",
        description:
          "Layering trust signals progressively — starting from product page through to payment confirmation — created a continuous reassurance narrative.",
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
