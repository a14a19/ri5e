export default function Offices() {
    return (
        <div >
            <div className="py-[16%] bg-black bg-cover bg-center lg:bg-[url('https://www.wearekeen.com/hubfs/WeAreKeen_May_2021/images/europe-desktop.svg')]">
                <div className=" px-[8%]  text-left lg:w-2/3 ">
                    <div className="text-[45px] lg:text-[55px] font-sans font-extrabold mb-[6%] 	">
                        <h1 className="leading-tight">
                            Our Offices
                        </h1>
                    </div>
                    <div className=" text-[18px] lg:text-[22px] mr-[2%] mt-[15%] lg:mt-[0%]">
                        <p>
                            WeAreKeen BV (HQ)<br />
                            Brouwersgracht 224 <br />
                            1013 HE Amsterdam <br />
                            The Netherlands
                        </p>
                        <p className="  mt-[2%] ">
                            WeAreKeen Germany GmbH <br />
                            Wattstrasse 11 <br />
                            13355 Berlin <br />
                            Germany
                        </p>
                        <div className="mt-[10%]">
                            <button className="text-[18px] font-bold bg-[#4353FF] hover:text-blue-500 hover:bg-white px-[22px] py-[15px] lg:px-[35px] lg:py-[22px]">
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}