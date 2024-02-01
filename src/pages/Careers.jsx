import Footer from "../components/Footer";
import Header from "../components/Header";
import Levelup from "../components/Levelup";
import Bestrecruit from "../components/Bestrecruit";
import Working from "../components/Working";
import Benefits from "../components/Benefits";
export default function Careers() {
    const desc5 = `We take on every hiring challenge and deliver results via a tailored-made, flexible, and cost- and time-effective model, enabling you to scale quickly and efficiently. `
    const img2 = `https://www.wearekeen.com/hubfs/Testimonials%20%286%29.png`

    return (
        <>
            <div className="px-16 pt-3">
                <Header />
            </div>
            <Levelup title={`Join the definition of recruitment`} isTop={true} img1={img2} buttontext={`See job openings`} btnPresent={true} conditionForPara={true} />
            <Bestrecruit titlePresent={false} />
            <Working />
            <Benefits />
            <Footer />
        </>
    )
}

