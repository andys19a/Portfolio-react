import type { TechKey } from "../components/TechIcons";

export type Project = {
  slug: string;
  title: string;
  short: string;
  description: string;
  images: string[];
  stack: TechKey[];
  links?: {
    live?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "heatio-konfigurator",
    title: "Heatio-konfigurator",
    short: "Konfigurator för värmepumpsval och offertförfrågan",
    description:
      "En konfigurator för att hjälpa kunder att välja rätt värmepump baserat på deras behov. Kunderna får en skräddarsydd rekommendation och kan enkelt begära en offert. Konfiguratorn visar alternativen och sammanställer det för kunden så de får en tydlig prisindikation.",
    images: [
      "/Konfigurator steg 1.png",
      "/Konfigurator steg 2.png",
      "/Konfigurator steg 3.png",
      "/Konfigurator steg 4.png",
      "/Konfigurator steg 5.png",
    ],
    stack: ["nextjs", "react", "tailwind", "javascript", "html", "css"],
  },
  {
    slug: "affiliate-hemsida",
    title: "Affiliate-hemsida",
    short: "Blogg om value betting med routing och JSON-innehåll",
    description:
      "En hemsida om value betting där jag byggde en enkel bloggplattform. Innehållet laddas från en JSON-fil och sidan har routing för att navigera mellan olika blogginlägg.",
    images: ["/projekt2.png", "/Bloggkategorier.png", "/Bloggsektion.png"],
    stack: ["react", "json", "javascript", "html", "css"],
  },
  {
    slug: "heatio-hemsida",
    title: "Heatio-hemsida",
    short: "WordPress/Elementor-sidor med custom CSS/HTML",
    description:
      "Exempel på sidor jag arbetade med under min praktik hos Heatio. Byggt i WordPress och Elementor med custom CSS/HTML för en professionell och användarvänlig webbplats.",
    images: ["/Startsida_Heatio.png", "/projekt3.png", "/recension karusell.png", "/Heatio_projekt4.png", "/Heatio_projekt5.png"],
    stack: ["wordpress", "elementor", "css", "html"],
  },
];
