import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function MenuDropDown({ setMenuDropDown, menuDropDown }) {
    return (
        <>
            {
                menuDropDown.state &&
                <div className="bg-[#121212] absolute right-0 left-0 top-24 w-full z-40 px-16 py-16 flex items-start justify-between" onMouseEnter={() => setMenuDropDown({ state: true, value: menuDropDown.value })} onMouseLeave={() => setMenuDropDown({ state: false, value: "" })}>
                    {
                        menuDropDown.value === "Services" &&
                        <>
                            <div className="flex flex-col items-start justify-start gap-8 w-1/2">
                                <h2 className="font-bold text-2xl">Our {menuDropDown.value}</h2>
                                <p className="text-xl">Scalable recruitment solutions for any hiring challenge.</p>
                                <Link to={`/about-us`} className="text-xl flex items-center justify-start gap-4 group cursor-pointer">
                                    <span className="group-hover:text-green-500">Learn more</span>
                                    <HiArrowRight className="group-hover:translate-x-2 transition-all ease-in-out cursor-pointer" />
                                </Link>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-8 w-1/2">
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
                        </>
                    }
                    {
                        menuDropDown.value === "Careers" &&
                        <>
                            <div className="flex flex-col items-start justify-start gap-8 w-1/2">
                                <h2 className="font-bold text-2xl">{menuDropDown.value}</h2>
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
                        </>
                    }
                </div>
            }
        </>
    )
}

