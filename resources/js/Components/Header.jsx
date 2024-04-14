import useToggle from "@/hooks/useToggle"
import Drawer from "./Drawer"
import { Button, UnstyledLink } from "./Button"
import NavIconButton, { NavIconButtonText } from "./NavIconButton"
import { CallingIcon, CartIcon, ProfileIcon } from "./SvgIcons"
import { menu } from "../constants"
import NavLink from "./NavLink"

export default function Header({ className = "", ...delegated }) {
  return (
    <header
      {...delegated}
      className={`flex h-[124px] items-center justify-between rounded-2xl bg-mercury-200 pe-7 ps-9 ${className}`}
    >
      <UnstyledLink className="block h-12 w-12 shrink-0" href={route("index")}>
        <span className="sr-only">Link to Home</span>
        <img
          src="./images/logo.png"
          alt="logo"
          className="block h-full w-full"
        />
      </UnstyledLink>
      <div className="flex flex-[3_3_0]" aria-hidden="true" />
      <nav className="ms-4 flex justify-start gap-4 2xl:gap-8">
        {menu.map((item) => (
          <NavLink
            className="-mt-1"
            href={route(item.routeName)}
            key={item.title}
            active={route().current(item.routeName)}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
      <div className="flex flex-[4_4_0]" aria-hidden="true" />

      <div className="ms-auto flex justify-between gap-6">
        <NavIconButton
          IconComponent={CartIcon}
          srText="Cart"
          className="h-16 w-16 text-primary-400 outline-primary-400 hover:bg-primary-400 hover:text-mercury-50"
        />
        <NavIconButton
          IconComponent={ProfileIcon}
          srText="Profile"
          className="text-primary-400 outline-primary-400 hover:bg-primary-400 hover:text-mercury-50"
        />
        <NavIconButtonText
          IconComponent={CallingIcon}
          srText="Call to action"
          className="bg-primary-400 text-mercury-50 hover:bg-mercury-200 hover:text-primary-400"
          text="مشاوره و خرید"
        />
      </div>
    </header>
  )
}
