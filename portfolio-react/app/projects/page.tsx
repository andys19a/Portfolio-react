import Link from "next/link";
import { projects } from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <>
      <h1>Projekt</h1>
      <p>Klicka på ett projekt för att se fler bilder och hur det är byggt.</p>

      <ul style={{ paddingLeft: 18 }}>
        {projects.map((p) => (
          <li key={p.slug}>
            <Link href={`/projects/${p.slug}`}>{p.title}</Link> – {p.short}
          </li>
        ))}
      </ul>
    </>
  );
}
