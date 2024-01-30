import Image1 from "../assets/images/recruitment/image_1.jpg";
import Image2 from "../assets/images/recruitment/image_2.jpg";
import Image3 from "../assets/images/recruitment/image_3.jpg";
import HeaderImg from "../assets/images/recruitment/recruit_header_image.jpg";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

export default function Services() {
    return (
        <div className="pt-[8%] ">
            <div className="text-[45px] lg:text-[55px] font-sans font-extrabold mb-[2%] pl-[12%] pr-[5%] w-[65%] leading-tight">
                <h1>
                    Europe's best and most fun Embedded Recruitment company 
                </h1>
            </div>
            <div className="text-[20px] font-sans mx-[5%] px-[7%] h-auto w-[60%] leading-tight">
                <p>
                    We offer tech-enabled Embedded Recruitment solutions (RPO) for fast-growing technology companies and transforming enterprises. 
                </p>
            </div>
            <div className="text-[20px] font-sans mt-[3%] mb-[2%] mx-[3%] h-lvh w-[94%] leading-tight" style={{ backgroundImage: `url(${HeaderImg})`, backgroundSize: "cover", backgroundBlendMode: "multiply", position: "relative" }}>
                <div className="recruit_header">
                    <p className="pb-[3%] px-[9.5%] w-[68%]">
                        Our Talent Partners work alongside the recruitment teams of our partners to ensure seamless integration, gain a deep understanding of the business needs, and leverage the core values that make a company stand out. 
                    </p>
                </div>
                <p className="px-[9.5%] w-[68%]">
                    We focus on hiring exceptional candidates quickly and efficiently, facilitate entries into new markets, optimise hiring processes, and much more. Our embedded recruitment solutions deliver results every time. 
                </p>
            </div>
            <div className="text-[45px] lg:text-[55px] font-sans font-extrabold mt-[10%] mb-[4%] pl-[12%] pr-[5%] w-[72%] leading-tight">
                <h1>
                    Recruitment services tailored to your hiring needs
                </h1>
            </div>
            <div className="flex  flex-col lg:flex-row  place-items-center">
                <div className="parent flex flex-col w-[33.33%] ml-[7%] my-[3%]">
                    <div className="overflow-hidden">
                        <div className="box w-[100%] h-[450px]" style={{ backgroundImage: `url(${Image1})`, backgroundSize: "cover", backgroundColor: "#4353FF", backgroundBlendMode: "multiply", position: "relative" }}>
                            <div className="text-[25px] lg:text-[35px] p-[12%] font-sans font-extrabold">
                                <h4>
                                Embedded Recruitment
                                </h4>
                            </div>
                        </div>
                    </div>
                    <Link to="https://www.google.com/maps/dir//34.0592755,-118.3895924/@34.0604488,-118.3930685,15z?entry=ttu" className="arrow mt-[10%] text-xl font-light group cursor-pointer transition-all ease-in-out flex items-center gap-3" target="_blank">
                        <span className="spanTag text-[22px] group-hover:text-green-500">Discover more</span>
                        <HiArrowRight className="arrowTag group-hover:translate-x-2 transition-all ease-in-out" />
                    </Link>
                </div>
                <div className="parent flex flex-col w-[33.33%] my-[3%]">
                    <div className="overflow-hidden">
                        <div className="box w-[100%] h-[450px]" style={{ backgroundImage: `url(${Image2})`, backgroundSize: "cover", backgroundColor: "#4353FF", backgroundBlendMode: "multiply", position: "relative" }}>
                            <div className="text-[25px] lg:text-[35px] p-[12%] font-sans font-extrabold">
                                <h4>
                                Exec Recruitment
                                </h4>
                            </div>
                        </div>
                    </div>
                    <Link to="https://www.google.com/maps/dir//34.0592755,-118.3895924/@34.0604488,-118.3930685,15z?entry=ttu" className="arrow mt-[10%] text-xl font-light group cursor-pointer transition-all ease-in-out flex items-center gap-3" target="_blank">
                        <span className="spanTag text-[22px] group-hover:text-green-500">Discover more</span>
                        <HiArrowRight className="arrowTag group-hover:translate-x-2 transition-all ease-in-out" />
                    </Link>
                </div>
                <div className="parent flex flex-col w-[33.33%] mr-[6%] my-[3%]">
                    <div className="overflow-hidden">
                        <div className="box w-[100%] h-[450px]" style={{ backgroundImage: `url(${Image3})`, backgroundSize: "cover", backgroundColor: "#4353FF", backgroundBlendMode: "multiply", position: "relative" }}>
                            <div className="text-[25px] lg:text-[35px] p-[12%] font-sans font-extrabold">
                                <h4>
                                Interim Recruitment
                                </h4>
                            </div>
                        </div>
                    </div>
                    <Link to="https://www.google.com/maps/dir//34.0592755,-118.3895924/@34.0604488,-118.3930685,15z?entry=ttu" className="arrow mt-[10%] text-xl font-light group cursor-pointer transition-all ease-in-out flex items-center gap-3" target="_blank">
                        <span className="spanTag text-[22px] group-hover:text-green-500">Discover more</span>
                        <HiArrowRight className="arrowTag group-hover:translate-x-2 transition-all ease-in-out" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
