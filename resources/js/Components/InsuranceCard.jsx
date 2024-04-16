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
        className="flex h-[155px] w-full flex-col items-center justify-start gap-4 pt-4"
      >
        <div className="h-12 w-12 text-primary-400">
          {/* text-white */}
          <TwoHandsIcon
            className="h-full w-full"
            handStroke={`${selected ? "white" : "currentColor"}`}
          />
        </div>
        <div className={`${selected ? 'text-white' : 'text-text'}`}>
          <p className="text-sm font-bold">بیمه</p>
          <p className="text-sm font-bold">{text}</p>
        </div>
      </UnstyledButton>
      <Button className="absolute -bottom-4 end-0 start-0 mx-auto grid h-8 w-8 place-content-center rounded-[10px] bg-primary-400 text-white">
        <CartIcon className="h-5 w-5" />
      </Button>
    </article>
  )
}
