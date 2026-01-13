"use client"

import { SunMoon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";


export function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="flex justify-end py-4">
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