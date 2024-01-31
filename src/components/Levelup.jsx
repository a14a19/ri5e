export default function Levelup({ title, img1, img2, description1, description2, conditionForPara }) {
    return (
        <div >
            <div className="py-[16%] bg-black bg-cover bg-center lg:bg-[url('https://www.wearekeen.com/hubfs/WeAreKeen_May_2021/images/europe-desktop.svg')]">
                <div className=" px-[8%]  text-left lg:w-2/3 ">
                    <div className="text-[45px] lg:text-[55px] font-sans font-extrabold mb-[6%] 	">
                        <h1 className="leading-tight">
                            {title}
                        </h1>
                    </div>
                    <div className=" text-[18px] lg:text-[22px] mr-[2%] mt-[15%] lg:mt-[0%]">

                        {/* ! whitespace-pre  */}

                        <p className={conditionForPara ? `md:w-[60%] w-full` : `whitespace-pre`}>
                            {description1}
                        </p>
                        <p className="  mt-[2%] ">
                            Are you a master of your craft, seeking the next thrilling challenge?
                            Look no further, for we have the perfect opportunity waiting for you.
                            Dive into an exciting new role with us, where your expertise will be
                            valued and your potential unleashed.
                        </p>
                        <div className="mt-[10%]">
                            <button className="text-[18px] font-bold bg-[#4353FF] hover:text-blue-500 hover:bg-white px-[22px] py-[15px] lg:px-[35px] lg:py-[22px]">
                                View all vacanices
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}