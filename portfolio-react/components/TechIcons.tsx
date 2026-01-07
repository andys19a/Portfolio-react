import type { ComponentType } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGoogleads,
  SiTailwindcss,
  SiWordpress,
  SiElementor,
  SiJson,
} from "react-icons/si";
import { FaSearch } from "react-icons/fa";

export type TechKey =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "wordpress"
  | "elementor"
  | "json"
  | "seo"
  | "ga4"
  | "gtm"
  | "googleads";

const techMap: Record<TechKey, { label: string; Icon: ComponentType<{ size?: number }> }> = {
  html: { label: "HTML", Icon: SiHtml5 },
  css: { label: "CSS", Icon: SiCss3 },
  javascript: { label: "JavaScript", Icon: SiJavascript },
  react: { label: "React", Icon: SiReact },
  nextjs: { label: "Next.js", Icon: SiNextdotjs },
  typescript: { label: "TypeScript", Icon: SiTypescript },
  tailwind: { label: "Tailwind CSS", Icon: SiTailwindcss },
  wordpress: { label: "WordPress", Icon: SiWordpress },
  elementor: { label: "Elementor", Icon: SiElementor },
  json: { label: "JSON", Icon: SiJson },
  seo: { label: "SEO", Icon: FaSearch },
  ga4: { label: "GA4", Icon: SiGoogleanalytics },
  gtm: { label: "GTM", Icon: SiGoogletagmanager },
  googleads: { label: "Google Ads", Icon: SiGoogleads },
};

export function TechStackIcons({
  tech,
  size = 18,
  showLabels = false,
}: {
  tech: TechKey[];
  size?: number;
  showLabels?: boolean;
}) {
  return (
    <div className="tech-icons" role="list">
      {tech.map((key) => {
        const { Icon, label } = techMap[key];
        return (
          <span key={key} className="tech-icon" title={label} role="listitem">
            <Icon size={size} />
            {showLabels && <span className="tech-icon-label">{label}</span>}
          </span>
        );
      })}
    </div>
  );
}
