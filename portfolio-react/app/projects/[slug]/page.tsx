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
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <TechStackIcons tech={project.stack} showLabels />
        <ProjectGallery title={project.title} images={project.images} />

    </>
  );
}
