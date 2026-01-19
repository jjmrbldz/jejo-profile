import { featuredProjects } from "@/lib/constants";
import { ProjectCard } from "./project-card";
import { SectionTitle } from "./section-title";


export function Projects() {

  return (
    <div id="projects" className="">
      <SectionTitle title="Featured Side projects" className="mb-4"/>
      <div className="grid grid-cols-12 gap-4 p-4">
        {featuredProjects.map((item, index) => (
          <ProjectCard key={index} item={item} className="col-span-12 md:col-span-6 lg:col-span-3" />
        ))}
      </div>
    </div>
  )
}