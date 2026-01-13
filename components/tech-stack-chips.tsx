import { techStack } from "@/lib/constants";
import { Badge } from "./ui/badge";
import Link from "next/link";

export function TechStackChips() {

  return techStack.map((item, index) => (
    <Link key={index} href={item.link} target="_blank">
      <Badge variant={"outline"} className="text-muted-foreground">
        {item.label}
      </Badge>
    </Link>
  ))
}