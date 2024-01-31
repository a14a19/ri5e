import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Levelup from "../components/Levelup";
import Nutshell from "../components/Nutshell";
import Services from "../components/Services";
import Companies from "../components/Companies";

export default function Home() {


    const desc = `Excited to meet you! 
    Are you the missing puzzle piece we've been searching for? 
    If you're seasoned in the art of recruitment and hungry for even more growth, then look no further. 
    Join our quest for talent 
    as we continuously seek out passionate recruiters like you, poised to elevate their skills to new heights.`

    return (
        <>
            <Hero />
            <Companies />
            <Services />
            <Nutshell />
            <Levelup title={`Level up your hiring game with us`} description1={desc} conditionForPara={true} />
            <Footer />
        </>
    )
}

