
export default function Nutshell({title, img, buttontext, description1, description2, btnPresent }) {
    return (
        <div className="py-[10%] ">
            <div className="text-[45px] lg:text-[55px] font-sans font-extrabold mb-[3%] lg:mb-[6%]	px-[5%] lg:px-[8%] leading-tight">
                <h1>
                    {title}
                </h1>
            </div>
            <div className="flex  flex-col lg:flex-row  place-items-center">
                <div className="w-[100%] lg:w-[360%] mb-[4%] lg:pl-[8%] ">
                    <img className="" src={img}
                        alt="hr Image" />
                </div>
                <div className=" ml-[3%] lg:ml-[7%] text-[18px] lg:text-[22px] mr-[2%] lg:mr-[18%] px-[5%] lg:px-[0%] mt-[5%] lg:mt-[0%]">
                    <p>
                        {description1}
                    </p>
                    <p className="mt-[3%]">
                        {description2}
                    </p>
                    {btnPresent ? <div className=" mt-[13%] lg:mt-[17%]">
                        <button className="text-[16px] lg:text-[18px] font-bold  bg-[#4353FF] hover:text-blue-500 hover:bg-white px-[22px] py-[15px] lg:px-[35px] lg:py-[22px]">
                            {buttontext}
                        </button>
                    </div> : <> </>}
                    
                </div>
            </div>
        </div>
    )
}
