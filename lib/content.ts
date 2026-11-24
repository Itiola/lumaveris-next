export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  topics: string[];
  image: string;
  readingTime: string;
  featured?: boolean;
  portableBody?: import('@portabletext/react').PortableTextBlock[];
  body: { heading?: string; text: string }[];
};

export const insights: Insight[] = [
  {
    slug: "future-proof-your-business",
    title: "5 Strategies to Future-Proof Your Business",
    excerpt: "Practical steps to stay ahead in a rapidly changing landscape.",
    topics: ["Strategy", "Transformation"],
    image: "/assets/images/articles/article1.jpg",
    readingTime: "6 min read",
    body: [
      { text: "The future cannot be predicted, but organisations can become better prepared to respond to it." },
      { heading: "Keep strategy connected to reality", text: "Review strategic priorities against market signals, customer needs, and operational evidence. A useful strategy is specific enough to guide action and flexible enough to adapt." },
      { heading: "Invest in decision-ready data", text: "Reliable data gives leaders a common view of performance. Establish clear ownership, sensible standards, and reporting that focuses attention on the measures that matter." },
      { heading: "Build adaptable technology foundations", text: "Prioritise architecture choices that create options rather than unnecessary dependency." },
      { heading: "Develop capability alongside technology", text: "New tools create value only when teams can use them confidently. Make learning, adoption, and accountability part of the delivery plan." }
    ]
  },
  {
    slug: "data-in-strategic-consulting",
    title: "The Role of Data in Strategic Consulting",
    excerpt: "How analytic rigor reshapes high-stakes decisions.",
    topics: ["Strategy", "Data & Analytics"],
    image: "/assets/images/insights2.jpg",
    readingTime: "5 min read",
    body: [
      { text: "Data earns its value when it makes a difficult decision clearer, faster, and more defensible." },
      { heading: "Start with the decision", text: "Define the decision before gathering information. This keeps analysis focused and makes it easier to distinguish useful signals from background noise." },
      { heading: "Make the data trustworthy", text: "Clear definitions, ownership, and practical quality controls give leaders confidence in what they are seeing." },
      { heading: "Turn insight into action", text: "Good analysis connects evidence to options, helps teams understand trade-offs, and measures whether the chosen action delivers." }
    ]
  },
  {
    slug: "it-governance-ceo-guide",
    title: "IT Governance: A CEO's Quick Guide",
    excerpt: "Concise guidance for leaders on technology accountability and value.",
    topics: ["Technology", "Transformation"],
    image: "/assets/images/home.jpg",
    readingTime: "4 min read",
    body: [
      { text: "Good governance does not slow an organisation down. It makes better decisions easier to repeat." },
      { heading: "Set clear decision rights", text: "Everyone involved in technology should understand who decides, who advises, and who is accountable." },
      { heading: "Measure the outcomes", text: "Governance is strongest when it focuses on value, resilience, and delivery outcomes." },
      { heading: "Keep it proportionate", text: "Simple, repeatable guardrails let teams move faster while escalating the choices that deserve greater scrutiny." }
    ]
  }
];

export const topics = ["Strategy", "Transformation", "Data & Analytics", "Technology"];
