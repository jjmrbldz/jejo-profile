import Link from "next/link";
import { TechStackChips } from "../tech-stack-chips";

export function HeroLeft() {

  return(
    <div className="col-span-12 md:col-span-6 md:order-1">
      <div className="space-y-2">
        <h1 className="text-4xl">Hi, I'm <span className="font-bold">Jejo</span></h1>
        <h3 className="text-xl font-medium">Full-stack Developer (Front-end focused)</h3>
      </div>
      <p className="mt-4">I build production-ready web and mobile applications, handling UI, backend APIs, databases, and deployment end to end. From Philippines.</p>
      <div className="my-4 flex gap-6">
        {/* <Link href={"/#projects"} className="text-sm underline">View Projects</Link> */}
        <Link href={"/JejomarBaldoza_CV012026-a.pdf"} target="_blank" className="text-sm underline">Download CV</Link>
        <Link href={"https://github.com/jjmrbldz"} target="_blank" className="text-sm underline">Github</Link>
        <Link href={"https://www.linkedin.com/in/jjmrbldz/"} target="_blank" className="text-sm underline">LinkedIn</Link>
        <Link href={"https://www.stackhaven.tech/"} target="_blank" className="text-sm underline">My team</Link>
      </div>
      <div className="flex flex-wrap gap-1 -ml-1">
        <TechStackChips />
      </div>
    </div>
  )
}