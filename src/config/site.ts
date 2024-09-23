type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "NeoMatrix",
  description:
    "An Open source Technical Blog platform with Next.js 14 with shadcn/ui, prisma and markdown support.",
  url: "https://next-blog-cj.vercel.app/",
  ogImage: "https://next-blog-cj.vercel.app/og",
  links: {
    twitter: "https://twitter.com/neonity2022",
    github: "https://github.com/neonity2020",
  },
};
