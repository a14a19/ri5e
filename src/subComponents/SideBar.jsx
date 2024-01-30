import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { RxCross1 } from "react-icons/rx";
import HeaderAccordian from './HeaderAccordian';

export default function SideBar({ open, setOpen }) {

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-full">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-black py-4 px-8 shadow-xl">
                                        <div className="px-4 sm:px-6 flex justify-between items-center">
                                            <Dialog.Title className=" text-white md:text-5xl text-3xl font-extrabold">
                                                RI5E
                                            </Dialog.Title>
                                            <button
                                                type="button"
                                                className="bg-[#4353FF] rounded-full text-white focus:outline-none sm:p-3 p-2 flex justify-center items-center"
                                                onClick={() => setOpen(false)}
                                            >
                                                <RxCross1 />
                                            </button>
                                        </div>
                                        <div className="relative px-4 sm:px-6">
                                            <HeaderAccordian />
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

