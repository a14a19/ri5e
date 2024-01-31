import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Levelup from "../components/Levelup";
import Nutshell from "../components/Nutshell";
import Services from "../components/Services";
import Companies from "../components/Companies";
import img2 from '../assets/images/recruitment/r2.jpg';

export default function Home() {

    const NutshellDesc1 = `Embark on an adventure with Ri5e, born in the Netherlands in 2018. Our passion? Crafting the ultimate, immersive recruitment experience across Europe. Picture a team of relentless Talent Partners, armed with unparalleled expertise, redefining recruitment with excitement at every step.`

    const NutshellDesc2 = `Fueling our every move are #Ri5etoGrow, #Ri5etoLearn, #Ri5etoCare, and #Ri5etoHaveFun, our ethos pillars. We foster talent, both professionally and personally, uniting a diverse tribe driven by growth, ambition, empathy, and joy.`

    const levelUpDesc1 = `Excited to meet you! Are you the missing puzzle piece we've been searching for? 
    If you're seasoned in the art of recruitment and hungry for even more growth, then look no further. 
    Join our quest for talent as we continuously seek out passionate recruiters like you, poised to 
    elevate their skills to new heights.`

    const levelUpDesc2 = `Are you a master of your craft, seeking the next thrilling challenge? Look no 
    further, for we have the perfect opportunity waiting for you. Dive into an exciting new role 
    with us, where your expertise will be valued and your potential unleashed.`

    const img = `https://www.wearekeen.com/hubfs/WeAreKeen_May_2021/images/europe-desktop.svg`

    return (
        <>
            <Hero />
            <Companies />
            <Services />
            <Nutshell title={`Ri5e in a Nutshell`} btnPresent={true} img={img2} buttontext={` More about us `} description1={NutshellDesc1} description2={NutshellDesc2}/>
            <Levelup title={`Level up your hiring game with us`} img1={img} buttontext={`View all vacancies`} description1={levelUpDesc1} conditionForPara={true} description2={levelUpDesc2} />
            <Footer />
        </>
    )
}

