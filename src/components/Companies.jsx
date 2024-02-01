import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const images = import.meta.glob("../../public/static/images/*.{png,jpg,jpeg,svg}");
const images1 = import.meta.glob("../assets/images/companies/*.{png,jpg,jpeg,svg}");

export default function Companies() {

    const imagePaths = Object.keys(images);
    const imagePathsEnt = Object.entries(images);
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const [imagesArr, setImagesArr] = React.useState([]);

    const [imagess, setImagess] = useState([]);

    useEffect(() => {
        console.log(images);
        console.log(imagePaths);
        console.log(imagePathsEnt);
        const loadImageModules = async () => {
            const loadedImages = await Promise.all(imagePaths.map(async (files) => ({
                path: images[files].path,
                module: await images[files](),
            })));
            console.log(loadedImages[0].module.default);
            setImagess(loadedImages);
        };
        loadImageModules();
    }, []);

    React.useEffect(() => {
        // console.log(images);
        // console.log(imagePaths, "imagePaths");
        // console.log("from assets", await images1[Object.keys(images1)[0]]());
        // const test = await images1[Object.keys(images1)[0]]();
        const finalArr = []
        const newarr = Object.keys(images1).map((elem) => {
            return async () => {
                // console.log(await images1[elem]());
                const test1 = await images1[elem]();
                finalArr.push(test1.default);
                return test1;
            };
            // return await images1[elem]().then((res) => res.default);
        })
        setImagesArr(newarr);
        // console.log(newarr);
        // newarr[0].then((res) => {
        // })
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // console.log(finalArr);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="pt-[8%] overflow-hidden">
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 w-full px-0 md:px-20 lg:gap-x-[2rem] gap-x-[4rem] md:gap-y-40 gap-y-20" style={{ marginLeft: windowWidth >= 730 ? windowWidth <= 900 ? "3%" : "6%" : "16%" }}>
                {
                    imagess && imagess.map((client, index) => {
                        // console.log(client.module.default);
                        return (
                            // client.includes("pleasure") ?
                            //     <div className="md:w-16 w-12" key={index}>
                            //         <img className="rounded-lg" style={{ filter: "grayscale(1) invert(1) brightness(10)" }} src={new URL(client, import.meta.url).href} />
                            //     </div>
                            //     :
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