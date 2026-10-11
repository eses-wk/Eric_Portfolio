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
  // Set `placeholder` to false once Eric's drawn portrait replaces the file.
  placeholder: true,
  src: "/images/portrait-placeholder.svg",
  alt: "Placeholder hand-drawn portrait: a loose line sketch of a person from the shoulders up. It is not a likeness of Eric Wong.",
  width: 320,
  height: 360,
  caption: "Placeholder for a real hand-drawn portrait",
} as const;

export const home = {
  eyebrow: "Data scientist",
  intro: "Former investment analyst, turning data into practical, working tools.",
  primaryCta: { href: "/projects", label: "View work" },
  secondaryCta: { href: "/contact", label: "Contact" },
  workLabel: "Selected work",
  aboutHeading: "About",
  aboutBody:
    "I started in investment analysis and moved into data science, and my day-to-day work has been in marketing analytics in the insurance industry. I build practical tools, from model pipelines to investment dashboards, and I enjoy solving real-world problems with data.",
  ctaHeading: "Let’s talk about your data project.",
  ctaBody: "A short note is all it takes to get started.",
  ctaButton: "Get in touch",
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
    "I started in investment analysis and moved into data science. Day-to-day work has been in marketing analytics in the insurance industry. I believe in using data to make a real-world impact.",
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
  lede: "Email is the direct line. I am also on LinkedIn and GitHub.",
} as const;

export const projectsPage = {
  title: "Selected work",
  lede: "Three projects, each written up as the problem, the approach, and what came of it. Where a result was never measured or published, the case study says so.",
} as const;
