import { featuredProjects } from "@/lib/constants";
import { ProjectCard } from "./project-card";
import { SectionTitle } from "./section-title";
import Link from "next/link";


export function Experience() {

  return (
    <div id="experience" className="mb-4">
      <SectionTitle title="Professional Experience" className="mb-4"/>
      <div className="p-4">
        For my full professional experience and contact details, please download my updated resume <Link href={"/JejomarBaldoza_CV012026-a.pdf"} target="_blank" className="text-sm underline">here</Link>.
      </div>
    </div>
  )
}