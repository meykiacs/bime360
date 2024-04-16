import { Button } from "./Button"

const tabs = [
  { name: "Company", href: "#", current: false },
  { name: "Team Members", href: "#", current: true },
  { name: "Billing", href: "#", current: false },
]

const maxNumberOfTabsForMobile = 3
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function PillTabs({ className = "" }) {
  return (
    <>
      {tabs.length > maxNumberOfTabsForMobile && (
        <div className={`sm:hidden ${className}`}>
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
      )}
      <div
        className={`${maxNumberOfTabsForMobile > 3 ? "hidden sm:block" : ""} ${className}`}
      >
        <nav
          className="flex h-full w-full justify-center px-3 py-3 md:px-[18px] md:py-[18px]"
          aria-label="Tabs"
        >
          {tabs.map((tab) => (
            <Button
              key={tab.name}
              className={classNames(
                tab.current
                  ? "bg-primary-400 text-white"
                  : "text-text hover:text-gray-700",
                "flex-1 rounded-xl px-[10px] py-[9px] text-sm md:text-lg font-medium md:font-bold",
              )}
            >
              {tab.name}
            </Button>
          ))}
        </nav>
      </div>
    </>
  )
}
