import { Disclosure } from '@headlessui/react'
import { FaChevronUp } from "react-icons/fa6";
import { HiArrowRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function HeaderAccordian() {
    return (
        <div className="w-full pt-8">
            <div className="mx-auto w-full rounded-2xl flex flex-col gap-4">
                <Link to={`/about-us`} className='text-xl py-3'>
                    About Us
                </Link>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='flex justify-between items-center w-full'>
                                <Link to={`/about-us`} className='text-xl'>
                                    Services
                                </Link>
                                <Disclosure.Button className="flex justify-between rounded-lg  px-2 py-2 text-left text-sm font-medium text-white  focus:outline-none ">
                                    <FaChevronUp
                                        className={`${open ? '' : 'rotate-180 transform'
                                            } h-5 w-5 text-white`}
                                    />
                                </Disclosure.Button>
                            </div>
                            <Disclosure.Panel className="pb-2 pt-4 px-4 my-2 text-sm bg-[#191919]">
                                <div className="flex flex-col items-start justify-start gap-8">
                                    <h2 className="font-bold text-2xl">Our Services</h2>
                                    <p className="text-xl">Scalable recruitment solutions for any hiring challenge.</p>
                                    <Link to={`/about-us`} className="text-xl flex items-center justify-start gap-4 group cursor-pointer">
                                        <span className="group-hover:text-green-500">Learn more</span>
                                        <HiArrowRight className="group-hover:translate-x-2 transition-all ease-in-out cursor-pointer" />
                                    </Link>
                                </div>
                                <div className="flex flex-col items-start justify-start gap-8">
                                    <div></div>
                                    <Link to={`/about-us`} className="text-xl flex items-center justify-start gap-4 group cursor-pointer">
                                        <span className="group-hover:text-green-500">Recruitment</span>
                                        <HiArrowRight className="group-hover:translate-x-2 transition-all ease-in-out cursor-pointer" />
                                    </Link>
                                    <Link to={`/about-us`} className="text-xl flex items-center justify-start gap-4 group cursor-pointer">
                                        <span className="group-hover:text-green-500">Recruitment</span>
                                        <HiArrowRight className="group-hover:translate-x-2 transition-all ease-in-out cursor-pointer" />
                                    </Link>
                                    <Link to={`/about-us`} className="text-xl flex items-center justify-start gap-4 group cursor-pointer">
                                        <span className="group-hover:text-green-500">Recruitment</span>
                                        <HiArrowRight className="group-hover:translate-x-2 transition-all ease-in-out cursor-pointer" />
                                    </Link>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <div className='flex justify-between items-center w-full'>
                                <Link to={`/careers`} className='text-xl'>
                                    Careers
                                </Link>
                                <Disclosure.Button className="flex justify-between rounded-lg  px-2 py-2 text-left text-sm font-medium text-white  focus:outline-none ">
                                    <FaChevronUp
                                        className={`${open ? '' : 'rotate-180 transform'
                                            } h-5 w-5 text-white`}
                                    />
                                </Disclosure.Button>
                            </div>
                            <Disclosure.Panel className="pb-2 pt-4 px-4 my-2 text-sm bg-[#191919]">
                                <div className="flex flex-col items-start justify-start gap-8 w-1/2">
                                    <h2 className="font-bold text-2xl">Careers</h2>
                                    <p className="text-xl">We're always looking for new Talent Partners who are ready to step up their recruitment game.</p>
                                    <Link to={`/careers`} className="text-xl flex items-center justify-start gap-4 group cursor-pointer">
                                        <span className="group-hover:text-green-500">Learn more</span>
                                        <HiArrowRight className="group-hover:translate-x-2 transition-all ease-in-out cursor-pointer" />
                                    </Link>
                                </div>
                                <div className="flex flex-col items-start justify-start gap-8 w-1/2">
                                    <div></div>
                                    <Link to={`/careers`} className="text-xl flex items-center justify-start gap-4 group cursor-pointer">
                                        <span className="group-hover:text-green-500">Careers</span>
                                        <HiArrowRight className="group-hover:translate-x-2 transition-all ease-in-out cursor-pointer" />
                                    </Link>
                                    <Link to={`/careers`} className="text-xl flex items-center justify-start gap-4 group cursor-pointer">
                                        <span className="group-hover:text-green-500">Careers</span>
                                        <HiArrowRight className="group-hover:translate-x-2 transition-all ease-in-out cursor-pointer" />
                                    </Link>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <button className="bg-[#4353FF] hover:text-blue-500 hover:bg-white transition-all ease-linear px-7 py-4 font-semibold text-lg w-min whitespace-nowrap mt-3">
                    Get In Touch
                </button>
            </div>
        </div>
    )
}

