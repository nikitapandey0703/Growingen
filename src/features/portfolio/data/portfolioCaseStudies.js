const goalIcon = '/images/portfolio/pop-up/goal.webp'
const challengeIcon = '/images/portfolio/pop-up/challenges.webp'
const solutionIcon = '/images/portfolio/pop-up/solution.webp'
const executionIcon = '/images/portfolio/pop-up/execution.webp'
const leadGrowthIcon = '/images/portfolio/pop-up/lead-growth.webp'
const lowerCplIcon = '/images/portfolio/pop-up/lower-cpl.webp'

const detailTones = {
  goal: 'bg-[#f8fbf8]',
  challenge: 'bg-[#fdf7f2]',
  solution: 'bg-[#ffffff]',
  execution: 'bg-[#f4f7fb]',
}

const metricTones = {
  slate: {
    tone: 'bg-[#f4f6fa]',
    iconBg: 'bg-[#e8efff]',
    valueColor: 'text-[#0bb38a]',
    labelColor: 'text-[#0bb38a]',
  },
  mint: {
    tone: 'bg-[#f2fbf4]',
    iconBg: 'bg-[#d9f6e3]',
    valueColor: 'text-[#1b43d6]',
    labelColor: 'text-[#1b43d6]',
  },
}

const cta = {
  title: 'Want similar results for your business?',
  subtitle: "Let's build a growth system that delivers.",
  buttonLabel: 'Book a Free Strategy Call',
}

const createDetails = ({ goal, challenge, solution, execution }) => [
  {
    title: 'Goal',
    body: goal,
    icon: goalIcon,
    tone: detailTones.goal,
  },
  {
    title: 'Challenge',
    body: challenge,
    icon: challengeIcon,
    tone: detailTones.challenge,
  },
  {
    title: 'Solution',
    body: solution,
    icon: solutionIcon,
    tone: detailTones.solution,
    hasBorder: true,
  },
  {
    title: 'Execution',
    body: execution,
    icon: executionIcon,
    tone: detailTones.execution,
  },
]

const createMetrics = (primary, secondary) => [
  {
    value: primary.value,
    label: primary.label,
    icon: leadGrowthIcon,
    ...metricTones.slate,
  },
  {
    value: secondary.value,
    label: secondary.label,
    icon: lowerCplIcon,
    ...metricTones.mint,
  },
]

export const portfolioCaseStudies = [
  {
    id: 'financial-services',
    title: 'Financial Services',
    industry: 'Financial Services',
    img: '/images/portfolio/Financal Services.webp',
    previewImg: '/images/portfolio/Financal Services.webp',
    impact:
      'Established a more trustworthy digital presence for the financial brand, helping simplify communication and improve response quality across early customer touchpoints.',
    metrics: createMetrics(
      { value: '2.1X', label: 'Higher Consultation Interest' },
      { value: '92%', label: 'Stronger Trust Signals\nAcross Key Landing Screens' }
    ),
    details: createDetails({
      goal: 'Build stronger trust and clarity around a finance-led service offer.',
      challenge:
        'The brand communicated complex financial services with weak structure, making the offer feel difficult to understand and low-confidence.',
      solution:
        'Created a cleaner presentation system with stronger hierarchy, trust-building visuals, and more conversion-friendly content blocks.',
      execution: [
        'Financial Brand Positioning',
        'Landing Page Refinement',
        'Trust Signal Design',
        'Offer Clarification System',
        'Visual Consistency Setup',
      ],
    }),
    cta,
  },
  {
    id: 'cloud-kitchen',
    title: 'Cloud Kitchen',
    industry: 'Food & Beverage',
    img: '/images/portfolio/Cloud Kitchen.webp',
    previewImg: '/images/portfolio/Cloud Kitchen.webp',
    impact:
      'Established a professional and recognizable cloud kitchen brand presence, helping the business build trust and improve customer visibility from the early stage of launch.',
    metrics: createMetrics(
      { value: '2.5X', label: 'Higher Brand Recall' },
      { value: '100%', label: 'Consistent Brand Identity\nAcross Customer Touchpoints' }
    ),
    details: createDetails({
      goal: 'Build a strong local brand presence during the initial launch stage.',
      challenge:
        'Newly launched cloud kitchen with low brand recognition and no established visual identity in a competitive food market.',
      solution:
        'Created a complete brand identity system focused on consistent and memorable customer experience across online and offline touchpoints.',
      execution: [
        'Logo Design',
        'Menu Card Design',
        'Brochure Design',
        'Packaging Sticker Design',
        'Brand Visual Identity Setup',
      ],
    }),
    cta,
  },
  {
    id: 'investment-platform',
    title: 'Investment Platform',
    industry: 'Investment & Wealth Management',
    img: '/images/portfolio/Financial Investment Firm.webp',
    previewImg: '/images/portfolio/Financial Investment Firm.webp',
    impact:
      'Improved the platform’s financial storytelling and helped the brand present investment products with greater confidence, clarity, and perceived credibility.',
    metrics: createMetrics(
      { value: '2.3X', label: 'Better Investor Attention' },
      { value: '88%', label: 'Clearer Offer Communication\nAcross Awareness Campaigns' }
    ),
    details: createDetails({
      goal: 'Make investment services easier to understand and more attractive to modern users.',
      challenge:
        'Dense messaging and formal financial presentation made the product feel intimidating for new prospects.',
      solution:
        'Reworked the communication system around simpler messaging, stronger value framing, and more engaging campaign visuals.',
      execution: [
        'Campaign Narrative Design',
        'Financial Offer Structuring',
        'Social Visual Direction',
        'Lead Journey Improvement',
        'Conversion Messaging Support',
      ],
    }),
    cta,
  },
  {
    id: 'finance-saas',
    title: 'Finance SaaS Platform',
    industry: 'Finance Technology',
    img: '/images/portfolio/Finance SaaS Platform.webp',
    previewImg: '/images/portfolio/Finance SaaS Platform.webp',
    impact:
      'The product started looking more modern and decision-friendly, helping users understand the platform faster and improving overall perceived product quality.',
    metrics: createMetrics(
      { value: '34%', label: 'Faster Product Understanding' },
      { value: '95%', label: 'Improved Visual Consistency\nAcross SaaS Experience' }
    ),
    details: createDetails({
      goal: 'Present a finance SaaS product with more clarity, confidence, and usability.',
      challenge:
        'The interface looked dense and technical, with weak visual hierarchy across dashboards and product explanations.',
      solution:
        'Built a stronger product presentation system with simplified hierarchy, guided UX patterns, and cleaner SaaS storytelling.',
      execution: [
        'Dashboard UX Direction',
        'Product Positioning Refresh',
        'Hierarchy Optimization',
        'Feature Communication Design',
        'UI Consistency Setup',
      ],
    }),
    cta,
  },
  {
    id: 'electrical-engineering',
    title: 'Electrical Engineering Services',
    industry: 'Engineering & Industrial Services',
    img: '/images/portfolio/Electrical Engineering Services.webp',
    previewImg: '/images/portfolio/Electrical Engineering Services.webp',
    impact:
      'Helped the engineering brand communicate with more authority, making complex services easier to scan and improving buyer confidence across core pages.',
    metrics: createMetrics(
      { value: '41%', label: 'Higher Service Inquiry Quality' },
      { value: '90%', label: 'Stronger Technical Brand Clarity\nAcross Key Assets' }
    ),
    details: createDetails({
      goal: 'Build a more professional and conversion-ready service presentation.',
      challenge:
        'Technical services were difficult to explain visually, and the brand lacked a clear structure for communicating expertise.',
      solution:
        'Created a more strategic layout system that balanced authority, clarity, and simplified service messaging.',
      execution: [
        'Service Page Structuring',
        'Technical Messaging Cleanup',
        'Visual Hierarchy Redesign',
        'Proof-Based Content Blocks',
        'Conversion Path Refinement',
      ],
    }),
    cta,
  },
  {
    id: 'vision-inspection-automation',
    title: 'Vision Inspection Automation',
    industry: 'Manufacturing Automation',
    img: '/images/portfolio/Manufacturing Automation.webp',
    previewImg: '/images/portfolio/Manufacturing Automation.webp',
    impact:
      'The automation solution became easier to demonstrate visually, helping technical buyers grasp value faster and respond with stronger intent.',
    metrics: createMetrics(
      { value: '3.1X', label: 'Higher Product Demo Interest' },
      { value: '86%', label: 'Improved Technical Storytelling\nAcross Product Screens' }
    ),
    details: createDetails({
      goal: 'Make an industrial automation solution easier to understand and market.',
      challenge:
        'The product solved a highly technical problem, but the visual narrative did not clearly communicate outcomes to potential clients.',
      solution:
        'Built a product-focused creative system that translated technical workflows into a simpler, more business-friendly story.',
      execution: [
        'Product Storyboarding',
        'Automation Use-Case Design',
        'Sales Deck Visual Support',
        'Explainer Screen Styling',
        'Technical Visual Cleanup',
      ],
    }),
    cta,
  },
  {
    id: 'interior-solutions',
    title: 'Interior Solutions',
    industry: 'Interior Design & Furnishing',
    img: '/images/portfolio/Interior Solutions.webp',
    previewImg: '/images/portfolio/Interior Solutions.webp',
    impact:
      'Strengthened the premium feel of the brand and made its service offering more aspirational, helping improve customer trust during discovery.',
    metrics: createMetrics(
      { value: '2.0X', label: 'Higher Design Inquiry Interest' },
      { value: '93%', label: 'More Consistent Visual Identity\nAcross Brand Assets' }
    ),
    details: createDetails({
      goal: 'Position the brand as a premium interior solutions provider.',
      challenge:
        'The brand lacked a cohesive visual language and did not reflect the quality of the actual work delivered.',
      solution:
        'Created a cleaner premium brand system with stronger mood direction, elevated layouts, and more polished customer-facing assets.',
      execution: [
        'Premium Brand Styling',
        'Service Storytelling',
        'Moodboard-Led Direction',
        'Portfolio Presentation Cleanup',
        'Sales Asset Refinement',
      ],
    }),
    cta,
  },
  {
    id: 'digital-it-solutions',
    title: 'Digital & IT Solutions',
    industry: 'Digital Transformation & IT Services',
    img: '/images/portfolio/IT Services.webp',
    previewImg: '/images/portfolio/IT Services.webp',
    impact:
      'The IT services brand gained a clearer enterprise-facing identity, helping present digital transformation services with more structure and credibility.',
    metrics: createMetrics(
      { value: '47%', label: 'Better Enterprise Engagement' },
      { value: '91%', label: 'Improved Service Clarity\nAcross Digital Touchpoints' }
    ),
    details: createDetails({
      goal: 'Present digital and IT capabilities in a more scalable, enterprise-friendly way.',
      challenge:
        'The brand communicated too broadly, which made the service offer feel generic and reduced differentiation.',
      solution:
        'Built a more structured communication system focused on clarity, specialization, and stronger business outcomes.',
      execution: [
        'IT Service Positioning',
        'Enterprise Messaging Layers',
        'Website Experience Cleanup',
        'Proof & Capability Structuring',
        'Lead Flow Improvement',
      ],
    }),
    cta,
  },
  {
    id: 'fmcg',
    title: 'FMCG',
    industry: 'Fast-Moving Consumer Goods',
    img: '/images/portfolio/FMCG.webp',
    previewImg: '/images/portfolio/FMCG.webp',
    impact:
      'The brand moved from one-off messaging to a more structured retention system, creating stronger continuity across campaigns and repeat-purchase moments.',
    metrics: createMetrics(
      { value: '2.4X', label: 'Higher Repeat Engagement' },
      { value: '84%', label: 'Stronger Lifecycle Messaging\nAcross Retention Flows' }
    ),
    details: createDetails({
      goal: 'Improve repeat engagement and increase customer lifetime value.',
      challenge:
        'The brand relied too heavily on acquisition and lacked meaningful retention systems after the first purchase.',
      solution:
        'Designed a behavior-based communication structure that aligned messaging with different customer stages and purchase intent.',
      execution: [
        'Retention Flow Design',
        'Lifecycle Messaging System',
        'Offer Timing Strategy',
        'Audience Segmentation Support',
        'Brand Consistency Across Flows',
      ],
    }),
    cta,
  },
  {
    id: 'it-solutions',
    title: 'IT Solutions',
    industry: 'IT Consulting & Solutions',
    img: '/images/portfolio/IT Services-1.webp',
    previewImg: '/images/portfolio/IT Services-1.webp',
    impact:
      'Improved the performance marketing foundation by making the landing experience and offer framing more aligned with campaign intent.',
    metrics: createMetrics(
      { value: '39%', label: 'Lower Acquisition Friction' },
      { value: '89%', label: 'Stronger Offer Alignment\nBetween Ads And Landing Pages' }
    ),
    details: createDetails({
      goal: 'Support more efficient lead acquisition through stronger campaign structure.',
      challenge:
        'Traffic was being generated, but weak landing page alignment and inconsistent creative reduced conversion quality.',
      solution:
        'Built a more connected acquisition system where creative, messaging, and destination experiences supported the same conversion goal.',
      execution: [
        'Landing Page Alignment',
        'Paid Media Support Design',
        'Campaign Messaging Cleanup',
        'Trust Positioning Improvements',
        'Offer Clarity Optimization',
      ],
    }),
    cta,
  },
  {
    id: 'document-management-saas',
    title: 'Document Management SaaS',
    industry: 'SaaS & Workflow Automation',
    img: '/images/portfolio/Document Management SaaS.webp',
    previewImg: '/images/portfolio/Document Management SaaS.webp',
    impact:
      'The platform became easier to navigate and more action-oriented, which helped reduce friction and strengthen perceived product maturity.',
    metrics: createMetrics(
      { value: '40%', label: 'Higher Conversion Completion' },
      { value: '94%', label: 'Cleaner Workflow Communication\nAcross Product Screens' }
    ),
    details: createDetails({
      goal: 'Improve conversion performance by refining the product’s decision flow.',
      challenge:
        'Users were facing friction in understanding the product journey, causing hesitation and weaker action completion.',
      solution:
        'Applied a CRO-led redesign approach to improve hierarchy, simplify flows, and make the interface more conversion-aware.',
      execution: [
        'CRO Audit Support',
        'Workflow Simplification',
        'Form & CTA Refinement',
        'Interface Hierarchy Cleanup',
        'User Path Optimization',
      ],
    }),
    cta,
  },
  {
    id: 'cloud-kitchen-pro',
    title: 'Cloud Kitchen Pro',
    industry: 'Food Brand Repositioning',
    img: '/images/portfolio/Cloud Kitchen.webp',
    previewImg: '/images/portfolio/Cloud Kitchen.webp',
    impact:
      'The repositioned identity helped the food brand feel more polished and memorable, improving presentation quality across customer-facing materials.',
    metrics: createMetrics(
      { value: '2.7X', label: 'Stronger Brand Recognition' },
      { value: '96%', label: 'Unified Visual Direction\nAcross Customer Collateral' }
    ),
    details: createDetails({
      goal: 'Modernize the brand and create a more premium market perception.',
      challenge:
        'The previous identity felt generic and did not reflect the ambition or product quality of the business.',
      solution:
        'Rebuilt the visual identity around a clearer brand language, better packaging consistency, and more memorable presentation.',
      execution: [
        'Brand Refresh Strategy',
        'Visual Identity Upgrade',
        'Packaging Design Support',
        'Collateral System Cleanup',
        'Brand Recognition Enhancement',
      ],
    }),
    cta,
  },
  {
    id: 'manufacturing-automation',
    title: 'Manufacturing Automation',
    industry: 'Industrial Systems & Automation',
    img: '/images/portfolio/Manufacturing Automation-1.webp',
    previewImg: '/images/portfolio/Manufacturing Automation-1.webp',
    impact:
      'The technical offering became more visually compelling and easier to explain, improving product comprehension across sales conversations.',
    metrics: createMetrics(
      { value: '2.8X', label: 'Higher Product Interest' },
      { value: '87%', label: 'Better Technical Communication\nAcross Sales Assets' }
    ),
    details: createDetails({
      goal: 'Explain a complex manufacturing product in a more intuitive visual format.',
      challenge:
        'Static technical materials were not helping prospects connect product capability with real business value.',
      solution:
        'Developed a more visual communication system using clearer demonstrations, stronger sequencing, and simplified technical context.',
      execution: [
        'Explainer Asset Design',
        'Technical Sequence Planning',
        'Motion-Ready Story Support',
        'Presentation System Cleanup',
        'Product Benefit Framing',
      ],
    }),
    cta,
  },
  {
    id: 'it-growth-solutions',
    title: 'IT Growth Solutions',
    industry: 'B2B Lead Generation',
    img: '/images/portfolio/IT Services-2.webp',
    previewImg: '/images/portfolio/IT Services-2.webp',
    impact:
      'Lead quality improved as the business started communicating more selectively, with better targeting and stronger trust positioning across outreach assets.',
    metrics: createMetrics(
      { value: '3.0X', label: 'Higher Quality Inbound Leads' },
      { value: '85%', label: 'Better Sales-Readiness\nAcross Lead Acquisition Funnel' }
    ),
    details: createDetails({
      goal: 'Generate more qualified leads for high-value IT services.',
      challenge:
        'The brand was attracting broad interest but struggling to convert attention into serious, sales-ready conversations.',
      solution:
        'Refined the lead acquisition system around more focused targeting, stronger buyer messaging, and better trust communication.',
      execution: [
        'Lead Funnel Positioning',
        'High-Ticket Messaging Support',
        'Audience Refinement',
        'Proof & Trust Layering',
        'Conversion Journey Cleanup',
      ],
    }),
    cta,
  },
  {
    id: 'saas-platform',
    title: 'SaaS Platform',
    industry: 'Software As A Service',
    img: '/images/portfolio/SaaS.webp',
    previewImg: '/images/portfolio/SaaS.webp',
    impact:
      'The SaaS experience became more intuitive and product-led, helping reduce confusion and strengthen first impressions across onboarding and demos.',
    metrics: createMetrics(
      { value: '52%', label: 'Faster Onboarding Readiness' },
      { value: '97%', label: 'More Intuitive Product Experience\nAcross Core Workflows' }
    ),
    details: createDetails({
      goal: 'Make the SaaS platform feel simpler, smarter, and easier to adopt.',
      challenge:
        'Feature density and weak information hierarchy made the product feel heavier than it needed to be for new users.',
      solution:
        'Redesigned the product experience around better visual grouping, cleaner navigation logic, and stronger product-led storytelling.',
      execution: [
        'Onboarding Flow Refinement',
        'Navigation Logic Cleanup',
        'Feature Hierarchy Rework',
        'Product Demo Support',
        'UI Experience Optimization',
      ],
    }),
    cta,
  },
]
