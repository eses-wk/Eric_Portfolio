/**
 * Profile, navigation, and page copy.
 *
 * Facts come from the previous Hugo site (about 2023). Nothing here adds an
 * employer, a city, or a result that page did not already state.
 *
 * Search this file for `placeholder: true` before sending the site to clients.
 */

export const site = {
  name: "Eric Wong",
  email: "wongwaikaeric@gmail.com",
  linkedin: "https://www.linkedin.com/in/eric-wong-wai-ka/",
  github: "https://github.com/eses-wk",
  githubHandle: "eses-wk",
  description:
    "Eric Wong is a former investment analyst turned data scientist. This site collects his venture research dashboards and quantitative model pipelines.",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://eses-wk.github.io/Eric_Portfolio"
  ).replace(/\/$/, ""),
} as const;

export const nav = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const portrait = {
  src: "/images/eric-wong.jpg",
  alt: "Eric Wong seated and smiling, wearing a light shirt, in front of a wall of colored squares.",
  width: 1067,
  height: 1266,
  caption: "Photograph carried over from the previous version of this site.",
} as const;

export const home = {
  eyebrow: "Eric Wong",
  titleStart: "Data work for people",
  titleEmphasis: "who have to choose.",
  lede: "I am a former investment analyst turned data scientist. The projects here are the proof: sourcing dashboards for a venture team, and models that submit themselves when a short window opens.",
  primaryCta: { href: "/projects", label: "See the work" },
  secondaryCta: { href: "/contact", label: "Start a conversation" },
  audiencesHeading: "Who this work is for",
  audiencesIntro:
    "Three situations already show up in the projects. If yours looks like one of them, the case studies are the detail.",
  audiences: [
    {
      title: "Venture and investment teams",
      body: "Sourcing quality technology companies was a recurring challenge when I was a venture capital investment analyst. Crunchbase held the funding data. It did not give the team a straightforward way to search and compare companies, or to compare other funds by focus, stage, and size. I built dashboards for that.",
    },
    {
      title: "People running quantitative models",
      body: "Numerai’s daily window for submitting predictions is about an hour, and the opening time moves. Uploading a file by hand means watching a deadline that will not sit still. I automated that submission on Azure, with a stated cost target under one US dollar a month.",
    },
    {
      title: "Collaborators who want something usable",
      body: "I am interested in machine learning that has to meet a real process: features, a model, and a way for someone else to use the result. The previous site invited collaboration. It did not publish rates or availability.",
    },
  ],
  workHeading: "Selected work",
  workIntro:
    "Rewritten from the project pages on the previous site. The substance is the same. The shape is a case study: problem, approach, and only the outcome that was actually published.",
  servicesHeading: "What the work demonstrates",
  servicesIntro:
    "These are capabilities already visible in the projects. They are not a rate card.",
  ctaHeading: "If the problem looks like this",
  ctaBody:
    "The previous site said to reach out if you want to collaborate. That still stands. Email is the direct line.",
} as const;

export const services = [
  {
    title: "Search and comparison tools",
    body: "When a team is choosing companies, funds, or partners, I have turned a large external dataset into dashboards people can filter and explain. The venture project did this with funding rounds collected from Crunchbase.",
  },
  {
    title: "Models aimed at a decision",
    body: "For Numerai’s stock-ranking tournament I trained gradient-boosted trees and neural networks, and I worked through feature construction, neutralization, and selection. The point was a prediction good enough to submit. I did not publish a leaderboard score.",
  },
  {
    title: "Pipelines that run on time",
    body: "I have packaged a model in Docker and started it from Azure when Numerai opened the daily window, so submission did not depend on someone being awake.",
  },
] as const;

export const about = {
  title: "Former investment analyst. Data scientist by practice.",
  paragraphs: [
    "I believe in using data to make a real-world impact. The previous version of this site described a specific path: investment analysis first, then data science, with day-to-day work in marketing analytics in the insurance industry. No employer was named there, so none is named here.",
    "I am glad to talk about how machine learning and AI change the way work gets done.",
  ],
  aside:
    "Away from the screen I am a podcast regular, a hip-hop listener, and an esports fan.",
} as const;

export const engagement = {
  placeholder: true,
  title: "How a collaboration starts",
  paragraphs: [
    "I have not published rates, availability, or a fixed way of working. If a problem looks like the work on this site, email me and we can see whether it fits.",
    "Replace this block before you rely on the site with clients. Say whether you take paid work, advising, or collaboration only, and how you prefer to start.",
  ],
} as const;

export const contact = {
  title: "Contact",
  lede: "Email is the direct line. LinkedIn and GitHub are the same accounts published on the previous site.",
} as const;

export const projectsPage = {
  title: "Selected work",
  lede: "Three projects from the previous site, rewritten as case studies. Each one keeps the original substance. Where a number was never published, it is not invented here.",
} as const;
