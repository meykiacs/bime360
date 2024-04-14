import React from "react"
import { UnstyledLink } from "./Button"

export default function SiteLogo() {
  return (
    <UnstyledLink className="block h-8 w-8" href={route("index")}>
      <span className="sr-only">Link to Home</span>
      <img src="./images/logo.png" alt="logo" className="block h-full w-full" />
    </UnstyledLink>
  )
}
