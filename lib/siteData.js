// Home Page Data

import {
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  Globe2,
  Layers3,
  MonitorSmartphone,
  Search,
  TimerReset,
  Target,
  Globe,
  Users,
} from "lucide-react";

export const menuItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#getaquote", label: "Get a Quote" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    icon: MonitorSmartphone,
    title: "Static Websites",
    heading: "Built for first impressions",
    label: "Fast business websites",
    description:
      "Premium marketing sites built for trust, speed, and a polished first impression across every screen.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: Code2,
    title: "Web Apps",
    heading: "Systems that move faster",
    label: "Custom business systems",
    description:
      "Scalable applications for portals, dashboards, bookings, workflows, and digital products with real ..",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: Layers3,
    title: "Website Redesign",
    heading: "Refresh what feels outdated",
    label: "Modern interface refresh",
    description:
      "We turn outdated websites into cleaner, sharper, more conversion-focused experiences that feel current and credible.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: Search,
    title: "SEO Foundations",
    heading: "Built to get discovered",
    label: "Built to be found",
    description:
      "Technical structure, content alignment, and performance improvements that create a stronger base for search visibility.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
];

export const aboutStats = [
  { value: "10+", label: "Years of Expertise", icon: TimerReset },
  { value: "70+", label: "Clients Globally", icon: Globe2 },
  { value: "30+", label: "Industries Served", icon: BriefcaseBusiness },
  { value: "100+", label: "Completed Projects", icon: FolderKanban },
];

export const portfolioItems = [
  {
    company: "Aldahiyah",
    product: "Corporate Website",
    title: "Luxury real estate presence",
    description:
      "A premium company website designed to elevate trust, brand image, and enquiry quality.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  },
  {
    company: "MNS Hospital",
    product: "Hospital Website",
    title: "Healthcare experience redesign",
    description:
      "A modern medical website focused on clarity, accessibility, and better patient journeys.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    company: "Codesudio SEO",
    product: "SEO Growth Campaign",
    title: "Search visibility foundation",
    description:
      "A search-focused engagement built around technical SEO, structure, and long-term ranking growth.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1600&q=80",
  },
];

export const products = [
  {
    name: "AutoSEO",
    category: "SEO Automation SaaS",
    description:
      "An automation-first platform for audits, on-page workflows, optimization tasks, and scalable search operations.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "ScanEat",
    category: "Restaurant QR SaaS",
    description:
      "A digital menu and ordering product built for restaurants, cafés, and food brands that need a smoother customer flow.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "ClientDesk",
    category: "Client Portal SaaS",
    description:
      "A clean business portal for managing projects, files, approvals, communication, and ongoing client ..",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  },
];

export const faqs = [
  {
    question: "What kind of websites does Codesudio build?",
    answer:
      "We build premium business websites, landing pages, and custom web applications tailored to your goals.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. We modernize outdated websites with better UI, clearer structure, improved responsiveness, and stronger conversion flow.",
  },
  {
    question: "Can you help with SEO too?",
    answer:
      "Yes. We handle technical SEO basics, on-page structure, content direction, and site performance improvements.",
  },
  {
    question: "Do you build mobile-friendly websites?",
    answer:
      "Every website is designed to work smoothly across desktop, tablet, and mobile from the beginning.",
  },
];

// About Page Data

export const aboutValues = [
  {
    title: "Strategy First",
    text: "We begin with business goals, user intent, and conversion paths before touching design or development.",
    icon: Target,
  },
  {
    title: "Built for Growth",
    text: "Every website and product we create is designed to scale, perform, and support future expansion.",
    icon: Globe,
  },
  {
    title: "Collaborative Process",
    text: "We work closely with clients through structured feedback, clear milestones, and transparent communication.",
    icon: Users,
  },
];

export const aboutTimeline = [
  {
    step: "01",
    title: "Discover",
    text: "We understand your brand, audience, business model, and project goals.",
  },
  {
    step: "02",
    title: "Design",
    text: "We create modern interfaces, content structure, and clear user journeys.",
  },
  {
    step: "03",
    title: "Develop",
    text: "We build fast, scalable, and responsive websites with clean implementation.",
  },
  {
    step: "04",
    title: "Launch & Support",
    text: "We deploy, optimize, and continue improving based on real-world performance.",
  },
];

// Service  Page Data

export const serviceItems = [
  {
    title: "Static Websites",
    description:
      "Fast, modern, conversion-focused websites built to help businesses grow strong online.",
    href: "/services/static-websites",
    points: [
      "Landing pages",
      "Company websites",
      "Portfolio websites",
      "Responsive design",
    ],
  },
  {
    title: "Dynamic Apps",
    description:
      "Custom-built web applications with real functionality tailored to your business goals.",
    href: "/services/dynamic-web-applications",
    points: [
      "Dashboards",
      "Admin panels",
      "Booking systems",
      "Database integration",
    ],
  },
  {
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern, premium, and user-friendly digital experiences.",
    href: "/services/website-redesign",
    points: [
      "UI/UX improvements",
      "Mobile responsiveness",
      "Modern layouts",
      "Better conversions",
    ],
  },
  {
    title: "SEO Services",
    description:
      "Improve search visibility, structure, and performance with strong technical and on-page SEO foundations.",
    href: "/services/seo-optimisations",
    points: [
      "On-page SEO",
      "Technical SEO",
      "Speed optimisation",
      "Search-ready structure",
    ],
  },
];

export const processSteps = [
  {
    title: "Discovery",
    description:
      "We understand your business, goals, audience, and the exact problem your website or app should solve.",
  },
  {
    title: "Planning",
    description:
      "We define the structure, content flow, features, and strategy before design and development begin.",
  },
  {
    title: "Design",
    description:
      "We craft a clean, modern, and user-focused interface aligned with your brand and conversion goals.",
  },
  {
    title: "Development",
    description:
      "We build the project using modern tools and best practices for speed, responsiveness, and scalability.",
  },
  {
    title: "Launch",
    description:
      "We test, refine, and deploy the final product so it is ready to perform across devices and browsers.",
  },
  {
    title: "Optimisation",
    description:
      "We continue improving performance, SEO, and usability so your digital presence keeps getting stronger.",
  },
];

export const whyChooseUs = [
  "Modern and premium design approach",
  "Responsive, mobile first development",
  "Fast loading and performance focused builds",
  "SEO aware structure from the start",
  "Custom solutions tailored to business goals",
  "Clear communication and reliable support",
];

export const serviceFaqs = [
  {
    question: "How much does a website project cost?",
    answer:
      "Pricing depends on the type of website, number of pages, required features, and the overall scope. After understanding your needs, we provide a clear project quote.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Smaller static websites can be completed faster, while dynamic web applications and redesign projects usually take more time depending on complexity and revisions.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can modernise the design, improve the user experience, make it mobile responsive, and strengthen its performance and structure.",
  },
  {
    question: "Do you build custom web applications?",
    answer:
      "Yes. We build dynamic web applications such as dashboards, admin panels, booking systems, portals, and other custom business tools.",
  },
  {
    question: "Do you provide SEO optimisation?",
    answer:
      "Yes. We improve technical structure, metadata, page hierarchy, speed, and other SEO fundamentals to make your website more search-friendly.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. We can help with updates, improvements, fixes, and ongoing optimisation after the project goes live.",
  },
];

// Portfolio Page Data

export const portfolioStats = [
  { value: "20+", label: "Projects Designed" },
  { value: "10+", label: "Business Niches" },
  { value: "100%", label: "Custom UI Approach" },
  { value: "24/7", label: "Client Communication" },
];

export const portfolioProjects = [
  {
    title: "Premium Corporate Website",
    category: "Business Website",
    description:
      "A modern corporate presence built to improve trust, clarity, and lead generation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    results: [
      "Premium visual identity",
      "Fast page structure",
      "Stronger CTA flow",
    ],
    link: "/contact",
  },
  {
    title: "Industrial Service Brand",
    category: "Website Redesign",
    description:
      "A complete redesign focused on cleaner communication, stronger hierarchy, and a more premium..",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    results: [
      "Improved visual trust",
      "Modern layout system",
      "Better service presentation",
    ],
    link: "/contact",
  },
  {
    title: "Healthcare Landing Page",
    category: "Lead Generation",
    description:
      "A conversion-focused landing page structured for credibility, quick scanning, and enquiries.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    results: [
      "Clear user journey",
      "Mobile-friendly UX",
      "High-end presentation",
    ],
    link: "/contact",
  },
  {
    title: "Startup Web Platform",
    category: "Web Application",
    description:
      "A scalable product interface designed for speed, usability, and a polished SaaS experience.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    results: [
      "Structured dashboard UX",
      "Reusable components",
      "Clean product flow",
    ],
    link: "/contact",
  },
];

export const portfolioProcess = [
  {
    step: "01",
    title: "Research & Direction",
    text: "We review the business, audience, and goals to define a clear visual and content direction.",
  },
  {
    step: "02",
    title: "Wireframe & Structure",
    text: "We build the page structure to improve flow, readability, and conversion opportunities.",
  },
  {
    step: "03",
    title: "UI Design & Development",
    text: "We create a premium visual layer with responsive development and smooth interactions.",
  },
  {
    step: "04",
    title: "Launch & Refine",
    text: "We polish the experience, improve performance, and prepare the site for real business use.",
  },
];

export const portfolioTestimonials = [
  {
    name: "Daniel Carter",
    role: "Founder, Northvale Studio",
    quote:
      "The final website feels polished, premium, and much more aligned with the level of business we want to present.",
  },
  {
    name: "Sophia Bennett",
    role: "Marketing Lead, Oakridge Creative",
    quote:
      "The structure, spacing, and visual flow completely changed how our brand is perceived online.",
  },
  {
    name: "Ethan Walker",
    role: "Director, BluePeak Ventures",
    quote:
      "Everything felt intentional from the layout to the finer UI details. The result looks clean and trustworthy.",
  },
  {
    name: "Olivia Hayes",
    role: "Operations Manager, Crescent Horizon",
    quote:
      "The redesign gave our business a more confident presence and made the whole experience feel more professional.",
  },
  {
    name: "Noah Mitchell",
    role: "Founder, Alder & Co.",
    quote:
      "What stood out was the clarity in every section. It now communicates our value far better than before.",
  },
  {
    name: "Grace Turner",
    role: "Brand Manager, Elmstone Group",
    quote:
      "The new design language feels modern, refined, and far more credible for clients visiting us for the first time.",
  },
  {
    name: "Liam Foster",
    role: "Managing Partner, Westford Digital",
    quote:
      "The site now feels cohesive and premium. It presents our company in a way that better supports growth.",
  },
  {
    name: "Chloe Morgan",
    role: "Project Lead, Brightlane Works",
    quote:
      "A very thoughtful execution overall. The balance between elegance and usability was handled really well.",
  },
];

export const portfolioFaqs = [
  {
    question: "What types of websites do you build?",
    answer:
      "We build business websites, landing pages, portfolio sites, and custom web solutions.",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes. We take care of the full process from planning and design to development and launch.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Yes. We redesign outdated websites to make them look more modern, clear, and professional.",
  },
  {
    question: "Will the website be mobile responsive?",
    answer:
      "Yes. Every website is built to work smoothly across mobile, tablet, and desktop.",
  },
];
