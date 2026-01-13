import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className="" }: Props) {
  
  return (
    <h1 className={cn("text-2xl font-bold", className)}>{title}</h1>
  )
}