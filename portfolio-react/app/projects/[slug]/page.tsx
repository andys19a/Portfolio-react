import { notFound } from "next/navigation";
import { projects } from "../../../lib/projects";
import ProjectGallery from "../../../components/ProjectGallery";
import { TechStackIcons} from "../../../components/TechIcons";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <>
  <div className="project-page">
    <div className="project-header">
      <h1>{project.title}</h1>
      <p className="project-desc">{project.description}</p>

      <h3>Tech stack</h3>
      <TechStackIcons tech={project.stack} showLabels />
    </div>

    <ProjectGallery title={project.title} images={project.images} />
  </div>

    </>
  );
}
