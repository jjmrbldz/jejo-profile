import { MyAvatar } from "../my-avatar";
import { TechStackChips } from "../tech-stack-chips";

export function HeroRight() {

  return(
    <div className="col-span-12 md:col-span-6 md:order-2">
      <MyAvatar />
      <div className="text-center md:text-right text-sm mt-6 text-muted-foreground">
        <p className=""><span className="font-bold text-primary">5+</span> years in development</p>
        <p className=""><span className="font-bold text-primary">8</span> projects shipped</p>
        <p className="max-w-sm m-[0_auto_0_auto] md:m-[0_0_0_auto]"><span className="font-bold text-primary">Built</span> payments, invoicing, e-commerce, health care, admin/backoffice tools, betting systems</p>
      </div>
    </div>
  )
}