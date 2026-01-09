import Link from "next/link";
import Image from "next/image";

import { TechStackIcons } from "../components/TechIcons";
import type { TechKey } from "../components/TechIcons";

const projects = [
  {
    slug: "heatio-konfigurator",
    title: "Heatio-konfigurator",
    image: "/Konfigurator steg 5.png",
    description: "HTML, CSS, JavaScript, Next.js, React",
  },
  {
    slug: "affiliate-hemsida",
    title: "Affiliate-hemsida",
    image: "/projekt2.png",
    description: "React, Routing, JSON, HTML, CSS",
  },
  {
    slug: "heatio-hemsida",
    title: "Heatio-hemsida",
    image: "/projekt3.png",
    description: "Elementor, Wordpress med custom CSS / HTML",
  },
];

const devSkills: TechKey[] = ["html", "css", "javascript", "react", "nextjs", "tailwind"];
const marketingSkills: TechKey[] = ["ga4", "gtm", "googleads", "seo"];

export default function Home() {
  return (
    <>
      <section className="introruta">
        <div className="intro-text">
          <h1>André Alm</h1>
          <p>Frontend-utvecklare</p>
        </div>

        <div className="skills-grid">
          <div className="skill-col">
            <p className="skill-title">Webbutveckling</p>
            <TechStackIcons tech={devSkills} showLabels size={18} />
          </div>

          <div className="skill-col">
            <p className="skill-title"> Tidigare erfarenheter: Webbanalys & marknadsföring</p>
            <TechStackIcons tech={marketingSkills} showLabels size={18} />
          </div>
        </div>

        <img
          src="/Profilbild.jpeg"
          alt="Profilbild av André Alm"
          className="profilbild"
        />
      </section>

      <section>
        <div className="project-intro">
          <h3>Här är några av mina senaste projekt:</h3>
        </div>

        <div className="mina-projekt">
          {projects.map((p) => (
            <Link key={p.slug} className="project-card" href={`/projects/${p.slug}`}>
                <div className="project-image">
                  <Image
                    src={p.image}
                    alt={`Skärmbild av ${p.title}`}
                    fill
                    unoptimized
                    sizes="(max-width: 700px) 100vw, 33vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>

              <div className="project-meta">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
