export default function Levelup({ title, img1, buttontext, description1, description2, conditionForPara }) {
    return (
        <div >
            <div style={{'--image-url': `url(${img1})`}} className="py-[16%] bg-black bg-cover bg-center lg:bg-[image:var(--image-url)]">
                <div className=" px-[8%]  text-left lg:w-2/3 ">
                    <div className="text-[45px] lg:text-[55px] font-sans font-extrabold mb-[6%] 	">
                        <h1 className="leading-tight">
                            {title}
                        </h1>
                    </div>
                    <div className=" text-[18px] lg:text-[22px] mr-[2%] mt-[15%] lg:mt-[0%]">

                        {/* ! whitespace-pre  */}

                        <p className={conditionForPara ? `md:w-[80%] w-full` : `whitespace-pre`}>
                            {description1}
                        </p>
                        <p className={conditionForPara ? `md:w-[80%] w-full mt-[2%]` : `whitespace-pre mt-[2%]`}>
                            {description2}
                        </p>
                        <div className="mt-[10%]">
                            <button className="text-[18px] font-bold bg-[#4353FF] hover:text-blue-500 hover:bg-white px-[22px] py-[15px] lg:px-[35px] lg:py-[22px]">
                                {buttontext}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}