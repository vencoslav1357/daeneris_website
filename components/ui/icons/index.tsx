import { LucideProps, UserCircle, Menu, Moon, Sun, Laptop } from "lucide-react"

export const Icons = {
  logo: UserCircle, 
  menu: Menu,
  sun: Sun,
  moon: Moon,
  laptop: Laptop,
}

export type Icon = keyof typeof Icons