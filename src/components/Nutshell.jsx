import img1 from '../assets/images/recruitment/r2.jpg';
export default function Nutshell() {
    return (
        <div className="py-[10%] ">
            <div className="text-[45px] lg:text-[55px] font-sans font-extrabold mb-[3%] lg:mb-[6%]	px-[5%] lg:px-[8%] leading-tight">
                <h1>
                    Ri5e in a Nutshell
                </h1>
            </div>
            <div className="flex  flex-col lg:flex-row  place-items-center">
                <div className="w-[100%] lg:w-[360%] mb-[4%] lg:pl-[8%] ">
                    <img className="" src={img1}
                        alt="hr Image" />
                </div>
                <div className=" ml-[3%] lg:ml-[7%] text-[18px] lg:text-[22px] mr-[2%] lg:mr-[18%] px-[5%] lg:px-[0%] mt-[5%] lg:mt-[0%]">
                    <p>
                        Embark on an adventure with Ri5e, born in the Netherlands in 2018. Our passion?
                        Crafting the ultimate, immersive recruitment experience across Europe. Picture
                        a team of relentless Talent Partners, armed with unparalleled expertise, redefining
                        recruitment with excitement at every step.
                    </p>
                    <p className="mt-[3%]">
                        Fueling our every move are #Ri5etoGrow, #Ri5etoLearn, #Ri5etoCare, and #Ri5etoHaveFun,
                        our ethos pillars. We foster talent, both professionally and personally,
                        uniting a diverse tribe driven by growth, ambition, empathy, and joy.
                    </p>
                    <div className=" mt-[13%] lg:mt-[17%]">
                        <button className="text-[16px] lg:text-[18px] font-bold  bg-[#4353FF] hover:text-blue-500 hover:bg-white px-[22px] py-[15px] lg:px-[35px] lg:py-[22px]">
                            More About Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
