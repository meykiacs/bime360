import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Button } from "./Button"
import Divider from "./Divider"
import SiteLogo from "./SiteLogo"
import { menu } from "@/constants"
import MobileNavLink from "./MobileNavLink"
import { ArrowRightIcon } from "./SvgIcons"

export default function Drawer({ isOpen, handleDismiss }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleDismiss}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-opacity-99 fixed inset-0 bg-white transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed bottom-16 right-4 top-9 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full max-w-[65%] flex-col overflow-hidden rounded-2xl bg-white px-5 py-6 shadow-3xl sm:px-6">
                    {/* header */}
                    <div className="flex flex-row-reverse items-start justify-between">
                      <Button
                        type="button"
                        className=" flex h-8 w-8 items-center justify-center rounded-[10px] bg-alert text-white hover:text-gray-500 focus:ring-offset-2"
                        onClick={handleDismiss}
                      >
                        <span className="sr-only">Close panel</span>
                        <ArrowRightIcon className="h-4 w-4" />
                      </Button>
                      <SiteLogo />
                    </div>
                    <Divider className="mt-3" />

                    <div className="relative mt-6 flex-1">
                      {menu.length > 0 && (
                        <nav>
                          {menu.map((item) => (
                            <MobileNavLink
                              href={route(item.routeName)}
                              key={item.title}
                              active={route().current(item.routeName)}
                            >
                              {item.title}
                            </MobileNavLink>
                          ))}
                        </nav>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
