import { HeroLeft } from "./left";
import { HeroRight } from "./right";


export default function Hero() {
  
  return (
    <div className="flex flex-col md:flex-row py-6 gap-10 md:gap-2">
      <HeroRight />
      <HeroLeft />
    </div>
  )
}