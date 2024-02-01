export default function Bestrecruit({ titlePresent }) {
    return (
        <div className="py-[5%] ">
            { titlePresent ? <div className="text-[45px] lg:text-[55px] font-sans font-extrabold mb-[5%] lg:mb-[6%]	px-[5%] lg:px-[8%] leading-tight text-center">
                <h1>
                    "We want to be the best and most fun embedded recruitment company in Europe"
                </h1>
            </div> : <></>}
            <div className="grid gap-y-12  lg:grid-cols-4 grid-cols-2 px-[10%] mt-[20%] md:mt-[5%] ">

                
                    <div className=" flex flex-col items-center  ">
                        <img className="w-[40%]  " src="https://www.wearekeen.com/hubfs/WeAreKeen_May_2021/images/keen-to-grow.svg" />
                        <p className="mt-[4%] text-center md:text-[25px] text-[15px]"> #grow</p>
                    </div>
                    <div className=" flex flex-col items-center ">
                        <img className="w-[40%] " src="https://www.wearekeen.com/hubfs/WeAreKeen_May_2021/images/keen-to-learn.svg" />
                        <p className="mt-[4%] text-center md:text-[25px] text-[15px]"> #learn</p>
                    </div>
               
              
                    <div className=" flex flex-col items-center ">
                        <img className="w-[40%]  " src="https://www.wearekeen.com/hubfs/WeAreKeen_May_2021/images/keen-to-share.svg" />
                        <p className="mt-[4%] text-center md:text-[25px] text-[15px]"> #care</p>
                    </div>
                    <div className=" flex flex-col items-center ">
                        <img className="w-[40%]  " src="https://www.wearekeen.com/hubfs/WeAreKeen_May_2021/images/Group%20135.svg" />
                        <p className="mt-[4%] text-center md:text-[25px] text-[15px]"> #havefun</p>
                    </div>
                
            </div>
        </div>
    )
}