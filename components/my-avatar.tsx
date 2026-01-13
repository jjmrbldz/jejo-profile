import { Avatar, AvatarImage } from "./ui/avatar";
import img from "@/assets/images/prof-icon.jpeg";

export function MyAvatar() {

  return (
    <Avatar className="size-26 border-1 m-[0_auto_0_auto] md:m-[0_0_0_auto]">
      <AvatarImage src={img.src} alt="@jjmrbldz" />
    </Avatar>
  )
}