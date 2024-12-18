import { UserCircle, Menu, Moon, Sun, Laptop } from "lucide-react"
import Image from "next/image"

const DaenerisLogo = () => (
  <Image 
    src="/images/Daeneris_logo_svg.svg"
    alt="logo"
    width={80}
    height={80}
  />
)
export const Icons = {
  logo: DaenerisLogo, 
  menu: Menu,
  sun: Sun,
  moon: Moon,
  laptop: Laptop,
}

export type Icon = keyof typeof Icons