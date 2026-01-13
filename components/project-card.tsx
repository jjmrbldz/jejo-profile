import { featuredProjects } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props{
  className?: string;
  item: typeof featuredProjects[0];
}

export function ProjectCard({className = "", item}: Props) {

  return (
    <Card className={cn(className, "")}>
      <CardHeader>
        <CardTitle>
          <Link href={item.link} target="_blank" className="hover:underline">
            {item.title}
          </Link>
        </CardTitle>
        <CardDescription>
          <p className="justify">{item.description}</p>
        </CardDescription>
      </CardHeader>
      {/* <CardContent>
        Content
      </CardContent> */}
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {item.techStack.map(item => (
            <Badge key={item} variant={"outline"} className="text-muted-foreground text-[10px]">
              {item}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}