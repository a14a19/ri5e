import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Levelup from "../components/Levelup";
import Nutshell from "../components/Nutshell";
import Services from  "../components/Services";
import Companies from "../components/Companies";

export default function Home() {
    return (
        <>
            <Hero />
            <Companies />
            <Services />
            <Nutshell />
            <Levelup />
            <Footer />
        </>
    )
}

