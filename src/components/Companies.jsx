import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const images = import.meta.glob("../../public/static/images/*.{png,jpg,jpeg,svg}");

export default function Companies() {

    const imagePaths = Object.keys(images);
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    const [imagess, setImagess] = useState([]);

    useEffect(() => {
        const loadImageModules = async () => {
            const loadedImages = await Promise.all(imagePaths.map(async (files) => ({
                path: images[files].path,
                module: await images[files](),
            })));
            setImagess(loadedImages);
        };
        loadImageModules();
    }, []);

    React.useEffect(() => {

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
                    imagess && imagess.map((client, index) => {
                        return (
                            client.module.default.includes("pleasure") ?
                                <div className="md:w-16 w-12" key={index}>
                                    <img className="rounded-lg" style={{ filter: "grayscale(1) invert(1) brightness(10)" }} src={client.module.default} />
                                </div>
                                :
                                <div className="md:w-16 w-12" key={index}>
                                    <img className="rounded-lg grayscale contrast-200" src={client.module.default} />
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}