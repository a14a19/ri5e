import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="z-30 flex justify-between items-center relative w-full">
            <h2 className="text-5xl font-extrabold">
                RI5E
            </h2>
            <div className="flex gap-20 items-center justify-center text-xl font-medium">
                <Link to={`/about`} className="hover:underline underline-offset-8 transition-all ease-linear">
                    About Us
                </Link>
                <Link>
                    Services
                </Link>
                <Link>
                    Careers
                </Link>
                <button className="bg-[#4353FF] hover:text-blue-500 hover:bg-white transition-all ease-linear px-7 py-4 font-semibold text-lg">
                    Get In Touch
                </button>
            </div>
        </header>
    )
}