import React from 'react';
export default function Companies() {

    const [imagePaths, setImagePaths] = React.useState([]);

    React.useEffect(() => {
        const importImages = async () => {
            const imagePaths = [];
            for (let i = 1; i <= 5; i++) {
                try {
                    const image = await import(`../assets/images/companies/logo_${i}.svg`);
                    imagePaths.push(image.default);
                } catch (error) {
                    console.error(`Error importing image${i}.jpg:`, error);
                }
            }
            setImagePaths(imagePaths);
        };

        importImages();
    }, []);

    return (
        <div className="pt-[8%] ">
            <div className="text-[45px] lg:text-[55px] font-sans font-extrabold mb-[2%] px-[12%] w-[100%] leading-tight">
                <div className="flex flex-row justify-between pb-[5%]">
                {imagePaths.map((path, index) => (
                    <img key={index} src={path} alt={`Image ${index + 1}`} />
                ))}
                </div>
                <div className="flex flex-row justify-between">
                {imagePaths.map((path, index) => (
                    <img key={index} src={path} alt={`Image ${index + 1}`} />
                ))}
                </div>
            </div>
        </div>
    )
}