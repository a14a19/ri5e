import img1 from '../assets/images/recruitment/r1.jpg';
import img2 from '../assets/images/recruitment/r4.jpg';

export default function WorkTogether() {
    return (
        <div className="py-[10%] ">
            <div className="text-[45px] lg:text-[55px] font-sans font-extrabold mb-[5%] lg:mb-[6%]	px-[5%] lg:px-[8%] leading-tight">
                <h1>
                    Ready to work together?
                </h1>
            </div>
            <div className="flex  flex-col lg:flex-row  place-items-center">
                <div className="w-[100%] lg:w-[160%] mb-[4%] lg:pl-[8%] ">
                    <img className="" src={img2}
                        alt="hr Image" />
                </div>
                <div className=" ml-[3%] lg:ml-[7%] text-[18px] lg:text-[22px] mr-[2%] lg:mr-[16%] px-[5%] lg:px-[0%] mt-[5%] lg:mt-[0%]">
                    <div className="text-[35px] lg:text-[45px] font-sans font-extrabold mb-[3%] lg:mb-[3%] leading-tight">
                        <h1>
                            Become a partner
                        </h1>
                    </div>
                    <p>
                        Whether your aim is to elevate your team, secure top-tier tech talent,
                        venture into new territories, streamline your hiring procedures, make
                        pivotal hires, or swiftly fill critical positions, our comprehensive
                        suite of recruitment solutions has all bases covered.
                    </p>
                    <p className="mt-[3%]">
                        Discover more about our tailored services or schedule a meeting with us
                        to delve deeper into your unique recruitment requirements. Let's embark
                        on this journey together.
                    </p>
                    <div className=" mt-[13%] lg:mt-[17%]">
                        <button className="text-[16px] lg:text-[18px] font-bold  bg-[#4353FF] hover:text-blue-500 hover:bg-white px-[22px] py-[15px] lg:px-[35px] lg:py-[22px]">
                            Let's Chat!
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex  flex-col-reverse lg:flex-row  place-items-center md:py-[6%] py-[12%]">

                <div className=" ml-[3%] lg:ml-[8%] text-[18px] lg:text-[22px] mr-[2%] lg:mr-[13%] px-[5%] lg:px-[0%] mt-[5%] lg:mt-[0%]">
                    <div className="text-[35px] lg:text-[45px] font-sans font-extrabold mb-[3%] lg:mb-[3%] leading-tight">
                        <h1>
                            Join the team
                        </h1>
                    </div>
                    <p>
                        Unlocking your team's potential, securing top-tier tech talent,
                        expanding into uncharted territories, streamlining hiring
                        processes, making crucial hires, or swiftly filling key positions
                        – whatever your goal, our all-encompassing recruitment solutions
                        have you covered.
                    </p>
                    <p className="mt-[3%]">
                        Explore further into our bespoke services or schedule a
                        meeting with us to dive into your specific recruitment needs.
                        Together, let's embark on this exciting journey towards success.
                    </p>
                    <div className=" mt-[13%] lg:mt-[17%]">
                        <button className="text-[16px] lg:text-[18px] font-bold  bg-[#4353FF] hover:text-blue-500 hover:bg-white px-[22px] py-[15px] lg:px-[35px] lg:py-[22px]">
                            View all vacancies
                        </button>
                    </div>
                </div>
                <div className="w-[100%] lg:w-[160%] mb-[4%] lg:pr-[8%] ">
                    <img className="" src={img1}
                        alt="hr Image" />
                </div>
            </div>
        </div>
    )
}
