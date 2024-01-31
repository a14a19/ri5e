import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black md:px-36 sm:px-14 px-10 md:py-20 py-14 gap-y-8 flex items-start justify-between w-full flex-col lg:flex-row">
            <div className="md:w-[60%] w-full flex flex-col items-start justify-start gap-16">
                <h2 className="text-5xl font-bold">
                    RI5E
                </h2>
                <div className="flex flex-col gap-3">
                    <div className="text-xl font-light">
                        California, US
                    </div>
                    <Link to="tel:+1(0)202101211" className="text-xl font-light hover:text-green-500 cursor-pointer transition-all ease-in-out">
                        +1(0)202101211
                    </Link>
                    <Link to="https://www.google.com/maps/dir//34.0592755,-118.3895924/@34.0604488,-118.3930685,15z?entry=ttu" className="text-xl font-light group cursor-pointer transition-all ease-in-out flex items-center gap-3" target="_blank">
                        <span className="group-hover:text-green-500">Get Direction</span>
                        <HiArrowRight className="group-hover:translate-x-2 group-hover:text-green-500 transition-all ease-in-out" />
                    </Link>
                </div>
                <div className="font-light">
                    <span>Copyright RI5E Inc. 2024</span> / <Link className="hover:text-green-500 transition-all ease-in-out">Privacy Policy</Link> / <Link className="hover:text-green-500 transition-all ease-in-out">Imprint</Link>
                </div>
            </div>
            <div className="lg:w-[40%] w-full flex flex-col items-start justify-start gap-16">
                <div className="flex flex-col gap-10">
                    <h2 className="text-5xl font-black">
                        Follow us
                    </h2>
                    <div className="flex gap-3 items-center justify-start">
                        <Link to="https://www.linkedin.com/company/srid-xyz/" className="text-4xl hover:text-green-500 transition-all ease-in-out" target="_blank">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <p className="font-light text-xl">Don’t miss any updates!</p>
                    <div className="flex w-full">
                        <input type="email" className="bg-white font-semibold text-lg text-black py-3 px-5 outline-none sm:w-[100%] w-[90%]" placeholder="Drop Your Email*" />
                        <button className="bg-[#4353FF] px-10 py-4 font-semibold text-lg hover:bg-green-500 transition-all ease-in-out md:inline-block hidden">
                            Subscribe
                        </button>
                        <button className="bg-[#4353FF] px-6 py-4 font-semibold text-lg hover:bg-green-500 transition-all ease-in-out inline-block md:hidden">
                            <HiArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
