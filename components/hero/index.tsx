import { HeroLeft } from "./left";
import { HeroRight } from "./right";


export default function Hero() {
  
  return (
    <div className="grid grid-cols-12 py-6 gap-10 md:gap-2">
      <HeroRight />
      <HeroLeft />
    </div>
  )
}