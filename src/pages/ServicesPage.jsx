import Levelup from "../components/Levelup";
export default function ServicesPage() {
    const img2 = `https://www.wearekeen.com/hubfs/2021_headers%20website/header-template-16.png`

    const desc5 = `We take on every hiring challenge and deliver results via a tailored-made, flexible, and cost- and time-effective model, enabling you to scale quickly and efficiently. `
    return (
        <>
            <Levelup title={`Tailored recruitment solutions for technology companies`} isTop={true} img1={img2} buttontext={`Let's chat!`} btnPresent={true} description1={desc5} conditionForPara={true} />


        </>
    )
}

