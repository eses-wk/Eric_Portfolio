export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ProjectSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  ordered?: boolean;
};

export type Project = {
  slug: string;
  legacySlugs: string[];
  title: string;
  kicker: string;
  summary: string;
  tags: string[];
  repo?: { href: string; label: string };
  images: ProjectImage[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "venture-investment-dashboards",
    legacySlugs: ["2_vc_dashboards"],
    title: "Venture investment dashboards",
    kicker: "Venture research",
    summary:
      "Search and comparison tools for sourcing technology companies and reading other funds, built while I was a venture capital investment analyst.",
    tags: ["Dashboards", "Venture capital", "Crunchbase"],
    images: [
      {
        src: "/images/funding-round-dashboard.png",
        alt: "Startup Funding Round Dashboard scatter plot of projected pre-money valuation against months since the last round, filtered to analytics companies. The chart is labeled with the period 1 January 2017 to 1 June 2020 and Crunchbase as the source.",
        width: 1254,
        height: 710,
        caption:
          "Startup Funding Round Dashboard. The published view is labeled 1 January 2017 to 1 June 2020, source Crunchbase.",
      },
      {
        src: "/images/investor-search-dashboard.png",
        alt: "Venture Investor Search bar chart comparing investors, with filters for investment stage and number of investments. The page is labeled last updated 23 March 2020.",
        width: 1134,
        height: 775,
        caption:
          "Venture Investor Search. The published view is labeled last updated 23 March 2020.",
      },
    ],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "While I was a venture capital investment analyst, sourcing quality technology companies was a recurring challenge for the team. Crunchbase holds a broad database of funding rounds, but it was not a comfortable place to search and compare companies side by side.",
          "Partnerships with other funds mattered as well, and there was no structured way to compare a fund’s investment focus, stage, and size when looking for the right partner in a specific domain.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "I built a scraper with Selenium and BeautifulSoup to pull startup funding-round data from Crunchbase, then dashboards so that information could be filtered and explained.",
          "Two views were published with the project:",
        ],
        bullets: [
          "Startup Funding Round Dashboard, for deal sourcing and for founders looking at how competitors raise. The screenshot on this page is labeled as covering 1 January 2017 to 1 June 2020, with Crunchbase as the source.",
          "Venture Investor Search, for comparing investors by stage, activity, and exits. The screenshot is labeled as last updated 23 March 2020.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The dashboards were built to help the investment team source potential targets. They were also introduced to startup founders for competitive analysis and investor search.",
          "No count of companies reviewed, meetings booked, or investments made was published. Those results are not estimated here.",
        ],
      },
    ],
  },
  {
    slug: "numerai-model-deployment",
    legacySlugs: ["1_numerai_deploy_pipeline", "1_numerai"],
    title: "Numerai model deployment on Azure",
    kicker: "Quantitative operations",
    summary:
      "A Docker and Azure pipeline that submits Numerai predictions when the daily window opens, aimed at a running cost under $1 a month.",
    tags: ["Azure", "Docker", "Machine learning"],
    repo: {
      href: "https://github.com/eses-wk/numerai-azure-example",
      label: "numerai-azure-example",
    },
    images: [
      {
        src: "/images/numerai-azure-architecture.png",
        alt: "Diagram titled Numerai Azure Deployment Example. Local models are packaged as Docker images, pushed to a container registry, and pulled into Azure Container Instances. An Azure Function starts those instances when Numerai sends a daily scoring request, and the instances submit predictions back to Numerai.",
        width: 673,
        height: 615,
        caption:
          "Deployment path published with the project: local models, a container registry, an Azure Function, and container instances that submit predictions.",
      },
    ],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Numerai is a quantitative hedge fund that crowdsources machine learning models. Participants download data, train models, upload predictions, and can stake on how those models do in the live market. The tournament, once weekly, was running daily when this project was written.",
          "The daily submission window is only about an hour, and the opening time moves. Submitting by hand means staying up for a deadline that will not sit still.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "The project automates that daily submission on Azure. The published pipeline is:",
        ],
        ordered: true,
        bullets: [
          "Train models locally and prepare a minimal submission script.",
          "Build, test, and push a Docker image to Docker Hub or another container registry.",
          "Create an Azure Container Instance from that image.",
          "Use an Azure Function, triggered by Numerai’s daily submission webhook, to start the container and submit the predictions.",
        ],
      },
      {
        heading: "Related experiments",
        paragraphs: [
          "The same project page listed other Numerai work, separate from the deployment steps:",
        ],
        bullets: [
          "Dimension reduction and feature generation with UMAP (Uniform Manifold Approximation and Projection) and PCA.",
          "Feature neutralization, and feature selection with SHAP and ANOVA.",
          "XGBoost, LightGBM, CatBoost, and neural network models, with hyperparameter search by random search.",
          "A portfolio-optimization toolkit using weighted-average return and minimum variance, still in progress when this was written. A separate optimizer is written up on its own page.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "What was published is the pipeline and an example repository, so a participant can submit without watching the clock. I aimed to keep the running cost under $1 USD per month.",
          "No tournament score, uptime figure, or measured cloud bill was published. The dollar amount is the target stated with the project, not a receipt.",
        ],
      },
    ],
  },
  {
    slug: "numerai-portfolio-optimizer",
    legacySlugs: ["3_numerai_portfolio_opt"],
    title: "Numerai portfolio optimizer",
    kicker: "Portfolio construction",
    summary:
      "A visual way to weight Numerai models from historical return and correlation, using mean-variance portfolio theory.",
    tags: ["Portfolio", "Numerai", "Visualization"],
    repo: {
      href: "https://github.com/eses-wk/numerai-portfolio-opt",
      label: "numerai-portfolio-opt",
    },
    images: [
      {
        src: "/images/numerai-efficient-frontier.png",
        alt: "Scatter plot titled Simulated Portfolio Optimization based on Efficient Frontier. Annualised return is plotted against annualised volatility. A red star marks maximum Sharpe ratio and a green star marks minimum volatility. The chart is a simulation, not a live staking report.",
        width: 850,
        height: 642,
        caption:
          "Simulated efficient frontier from the project. The red star is maximum Sharpe ratio and the green star is minimum volatility. This is a simulation, not a live staking result.",
      },
    ],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Numerai participants can stake on their own models or buy models from the community marketplace. A portfolio here is a combination of those models, each with a weight. In ordinary investing, the same word means a combination of assets.",
          "Balancing risk and return is difficult when many of the models are highly correlated. A simple equal weight hides that.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "The tool follows Harry Markowitz’s 1952 portfolio theory. Historical return and the correlation between models are used to trace an efficient frontier and suggest weights. The person staking still chooses the mix.",
          "The published steps are:",
        ],
        ordered: true,
        bullets: [
          "Pull historical performance — Numerai Correlation and True Contribution — from the Numerai API.",
          "Run the optimizer to find model weights.",
          "Review the mix before staking.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The published result is a simple visual tool for choosing weights from historical return and volatility, with a public repository.",
          "The chart on this page is labeled as a simulation. No live staking profit, correlation, or Sharpe ratio was published as a result, so none is claimed here.",
        ],
      },
    ],
  },
];

const bySlug = new Map<string, Project>();

for (const project of projects) {
  bySlug.set(project.slug, project);
  for (const legacy of project.legacySlugs) {
    bySlug.set(legacy, project);
  }
}

export function getProject(slug: string): Project | undefined {
  return bySlug.get(slug);
}

export function projectPath(slug: string): string {
  return `/projects/${slug}`;
}

export function allProjectParams(): { slug: string }[] {
  return projects.flatMap((project) =>
    [project.slug, ...project.legacySlugs].map((slug) => ({ slug })),
  );
}
