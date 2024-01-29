import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="z-30 flex justify-between items-center relative w-full">
            <h2 className="text-5xl font-extrabold">
                RI5E
            </h2>
            <div className="flex gap-20 items-center justify-center text-xl font-semibold">
                <Link>
                    About Us
                </Link>
                <Link>
                    Services
                </Link>
                <Link>
                    Careers
                </Link>
                <button className="bg-blue-700 px-5 py-3">
                    Get In Touch
                </button>
            </div>
        </header>
    )
}