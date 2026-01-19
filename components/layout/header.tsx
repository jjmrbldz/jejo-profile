"use client"

import { SunMoon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import githubIcon from "@/assets/icons/github-icon.svg"
import linkedinIcon from "@/assets/icons/linkedin-icon.svg"
import Image from "next/image";


export function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="flex justify-end py-4">
      <Link href={"https://github.com/jjmrbldz"} target="_blank">
        <Button
          variant={"ghost"} 
          size={"icon"}
        >
          <Image src={githubIcon} alt="GitHub" width={18} height={18}/>
        </Button>
      </Link>
      <Link href={"https://www.linkedin.com/in/jjmrbldz/"} target="_blank">
        <Button
          variant={"ghost"} 
          size={"icon"}
        >
          <Image src={linkedinIcon} alt="Linkedin" width={22} height={22}/>
        </Button>
      </Link>
      <Button
        variant={"ghost"} 
        size={"icon"}
        onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}
      >
        <SunMoon />
      </Button>      
    </div>
  )
}