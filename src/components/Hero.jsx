import Header from "./Header"
import peopleHands from "../assets/people-hands.mp4";

export default function Hero() {
    return (
        <section className="w-full h-screen flex flex-col justify-between items-start relative overflow-hidden pt-6 px-16 pb-32">
            <Header />
            <video autoPlay loop muted playsInline className="absolute top-0 bottom-0 right-0 left-0 z-0 brightness-50">
                <source src={peopleHands} type="video/mp4" />
            </video>
            <h1 className="z-30 relative font-black text-6xl w-10/12">Elevating Potential, Transforming Teams - Your Catalyst for HR Excellence.</h1>
        </section>
    )
}

