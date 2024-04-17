import { Button, UnstyledButton } from "./Button"
import { CartIcon, TwoHandsIcon } from "./SvgIcons"

export default function InsuranceCard({
  className = "",
  text,
  handleClick,
  selected,
}) {
  return (
    <article
      className={`relative rounded-3xl shadow-4xl ${selected ? "bg-text" : "bg-white"} ${className}`}
    >
      <UnstyledButton
        onClick={handleClick}
        className="flex h-[155px] lg:h-[300px] w-full flex-col items-center justify-start gap-4 lg:gap-6 pt-4"
      >
        <div className="h-12 w-12 lg:w-[138px] lg:h-[138px] text-primary-400">
          {/* text-white */}
          <TwoHandsIcon
            className="h-full w-full"
            handStroke={`${selected ? "white" : "currentColor"}`}
          />
        </div>
        <div className={`text-sm font-bold lg:text-xl ${selected ? 'text-white' : 'text-text'}`}>
          <p>بیمه</p>
          <p>{text}</p>
        </div>
      </UnstyledButton>
      <Button className="absolute -bottom-4 end-0 start-0 mx-auto grid h-8 w-8 lg:h-12 lg:w-12 place-content-center rounded-[10px] lg:rounded-[12px] bg-primary-400 text-white">
        <CartIcon className="h-5 w-5 lg:w-8 lg:h-8" />
      </Button>
    </article>
  )
}
