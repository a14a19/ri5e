export default function Levelup() {
    return (
        <div >
            <div className="py-[16%] bg-black bg-cover bg-center"
                style={window.innerWidth >= 1024 ? {
                    backgroundImage: `url("https://www.wearekeen.com/hubfs/WeAreKeen_May_2021/images/europe-desktop.svg")`,
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    backgroundPosition: 'center'
                } : {}} >
                <div className=" px-[8%]  text-left lg:w-2/3 ">
                    <div className="text-[45px] lg:text-[55px] font-sans font-extrabold mb-[6%] 	">
                        <h1 className="leading-tight">
                            Level up your hiring game with us
                        </h1>
                    </div>
                    <div className=" text-[18px] lg:text-[22px] mr-[2%] mt-[15%] lg:mt-[0%]">
                        <p>
                            Hello! Are you the one we are looking for? Have you been working
                            in recruitment and hiring for quite some time and are ready to
                            further develop your skills? We are constantly searching for
                            talented recruiters who are eager to grow.
                        </p>
                        <p className="  mt-[2%] ">
                            Alternatively, are you already at the top of your game and seeking
                            an exciting new position? We have just what you need.
                        </p>
                        <div className="mt-[10%]">
                            <button className="text-[18px] font-bold bg-[#4353FF] hover:text-blue-500 hover:bg-white px-[22px] py-[15px] lg:px-[35px] lg:py-[22px]">
                                View all vacanices
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-full overflow-visible">
                <img className="w-full  transform -translate-x-1/2" src="https://www.wearekeen.com/hubfs/WeAreKeen_May_2021/images/europe-desktop.svg"
                    alt="hr Image" />
            </div> */}
        </div>

    )
}