import React from 'react';
const images = import.meta.glob("../../public/static/images/*");
const images1 = import.meta.glob("../assets/images/companies/*");

export default function Companies() {

    const imagePaths = Object.keys(images);
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        console.log(images);
        console.log("from assets",images1);
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="pt-[8%] overflow-hidden">
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 w-full px-0 md:px-20 lg:gap-x-[2rem] gap-x-[4rem] md:gap-y-40 gap-y-20" style={{ marginLeft: windowWidth >= 730 ? windowWidth <= 900 ? "3%" : "6%" : "16%" }}>
                {
                    imagePaths && imagePaths.map((client, index) => {
                        return (
                            client.includes("pleasure") ?
                                <div className="md:w-16 w-12" key={index}>
                                    <img className="rounded-lg" style={{ filter: "grayscale(1) invert(1) brightness(10)" }} src={new URL(client, import.meta.url).href} />
                                </div>
                                :
                                <div className="md:w-16 w-12" key={index}>
                                    <img className="rounded-lg grayscale contrast-200" src={new URL(client, import.meta.url).href} />
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}