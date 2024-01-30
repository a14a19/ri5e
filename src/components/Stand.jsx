import img1 from '../assets/images/recruitment/r3.jpg';
export default function Stand() {
    return (
        <div className="py-[10%] ">
            <div className="text-[45px] lg:text-[55px] font-sans font-extrabold mb-[3%] lg:mb-[6%]	px-[5%] lg:px-[8%] leading-tight">
                <h1>
                    This is what we stand for
                </h1>
            </div>
            <div className="flex  flex-col lg:flex-row  place-items-center">
                <div className="w-[100%] lg:w-[260%] mb-[4%] lg:pl-[8%] ">
                    <img className="" src={img1}
                        alt="hr Image" />
                </div>
                <div className=" ml-[3%] lg:ml-[7%] text-[18px] lg:text-[22px] mr-[2%] lg:mr-[18%] px-[5%] lg:px-[0%] mt-[5%] lg:mt-[0%]">
                    <p>
                        What sets us apart? Our unwavering dedication to growth. We transcend mere
                        recruitment, cultivating opportunities for both our team and the companies
                        we champion. From startups to IPOs, we've left a mark on Europe's tech landscape.
                        As disruptors, we merge innovation with data-driven finesse, ensuring swift
                        solutions and top-tier talent acquisitions for our partners.
                    </p>
                    <p className="mt-[3%]">
                        Choose us for the most enjoyable experience because we prioritize our Talent
                        Partners' flourishing. We emphasize work-life balance, offer personalized training,
                        and organize team-building activities. Our goal is to foster unity and celebrate
                        knowledge sharing. At our core, it's about growth, perpetual learning, and building
                        enduring bonds beyond the office walls.
                    </p>

                </div>
            </div>
        </div>
    )
}
