import { Experience } from "@/components/experience";
import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Separator className="my-10" />
      <Experience />
      <Projects />
    </div>
  );
}
