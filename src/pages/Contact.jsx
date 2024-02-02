import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";

export default function Contact() {

    const [fname, setFName] = React.useState("");
    const [lname, setLName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [checkbox, setCheckBox] = React.useState(false);
    const [errors, setErrors] = React.useState({
        "fname": false,
        "lname": false,
        "phone": false,
        "email": false,
        "checkbox": false,
    });

    const submission = () => {
        let error = {...errors};

        if (fname.length <= 0) {
            error["fname"] = true;
        }
        else {
            error["fname"] = false;
        }
        if (lname.length <= 0) {
            error["lname"] = true;
        }
        else {
            error["lname"] = false;
        }
        if (email.length <= 0) {
            error["email"] = true;
        }
        else {
            error["email"] = false;
        }
        if (phone.length !== 10) {
            error["phone"] = true;
        }
        else {
            error["phone"] = false;
        }
        if (checkbox === false) {
            error["checkbox"] = true;
        }
        else {
            error["checkbox"] = false;
        }

        setErrors(error);
    }

    return (
        <>
            <div className="px-16 pt-3">
                <Header />
            </div>
            <div>
                <div className="font-sans font-extrabold lg:m-[5%] lg:mb-[10%] m-[8%] text-center lg:text-left">
                    <h1 className={`md:text-[60px] text-[36px] leading-tight `}>
                        {"Get in touch"}
                    </h1>
                    <h1 className={`md:text-[60px] text-[36px] leading-tight `}>
                        {"with WeAreKeen"}
                    </h1>
                </div>
                <div id="form" className="flex flex-col justify-center items-center bg-black lg:w-[40%] w-[80%] h-auto m-auto p-[6%] lg:p-[4%]  mb-[4%]">
                    <h1 className={`md:text-[55px] text-[32px] font-sans font-extrabold leading-tight `}>
                        {"Call me back!"}
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-between w-[100%] pt-[6%]">
                        <div className="flex flex-col w-[100%] lg:w-[49%] md:mr-[2%]">
                            <p className="font-light text-xl pb-[4%]">First name</p>
                            <input type="name" style={{ backgroundColor: "rgb(27, 27, 27)" }} onChange={(event) => setFName(event.target.value)} className="font-semibold text-lg text-white py-3 px-5 outline-none" />
                            {errors["fname"] && <p className="font-weight text-xl text-red-700 text-[14px]">Please complete this required field.</p>}
                        </div>
                        <div className="flex flex-col w-[100%] lg:w-[49%]">
                            <p className="font-light text-xl pb-[4%]">Last name</p>
                            <input type="name" style={{ backgroundColor: "rgb(27, 27, 27)" }} onChange={(event) => setLName(event.target.value)} className="font-semibold text-lg text-white py-3 px-5 outline-none" />
                            {errors["lname"] && <p className="font-weight text-xl text-red-700 text-[14px]">Please complete this required field.</p>}
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between w-[100%] pt-[4%]">
                        <div className="flex flex-col w-[100%] lg:w-[49%] md:mr-[2%]">
                            <p className="font-light text-xl pb-[4%]">Work Email</p>
                            <input type="email" style={{ backgroundColor: "rgb(27, 27, 27)" }} onChange={(event) => setEmail(event.target.value)} className="font-semibold text-lg text-white py-3 px-5 outline-none" />
                            {errors["email"] && <p className="font-weight text-xl text-red-700 text-[14px]">Please complete this required field.</p>}
                        </div>
                        <div className="flex flex-col w-[100%] lg:w-[49%]">
                            <p className="font-light text-xl pb-[4%]">Phone number</p>
                            <input type="tel" pattern="[0-9]{10}" style={{ backgroundColor: "rgb(27, 27, 27)" }} onChange={(event) => setPhone(event.target.value)} className="font-semibold text-lg text-white py-3 px-5 outline-none" />
                            {errors["phone"] && <p className="font-weight text-xl text-red-700 text-[14px]">Please complete this required field.</p>}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-[100%] pt-[4%]">
                        <div className="flex flex-col w-[100%]">
                            <p className="font-light text-xl pb-[4%]">Leave behind a message</p>
                            <textarea rows="4" style={{ backgroundColor: "rgb(27, 27, 27)" }} className="font-semibold text-lg text-white py-3 px-5 outline-none"></textarea>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between w-[100%] pt-[10%]">
                        <div className="flex flex-row items-baseline w-[100%]">
                            <input onChange={() => setCheckBox(!checkbox)} type="checkbox" id="agree" name="checkbox" value={checkbox} required/>
                            <span className="pl-[2%] w-[95%]">I agree to receive communications from WeAreKeen and allow to store and process my personal data.</span>
                        </div>
                        {errors["checkbox"] && <p className="font-weight text-xl text-red-700 text-[14px]">Please complete this required field.</p>}
                    </div>
                    <div className="flex flex-row justify-between w-[100%] pt-[6%]">
                        <button onClick={submission} className="bg-[#4353FF] w-[100%] md:w-auto px-10 py-4 font-semibold text-lg hover:bg-green-500 transition-all ease-in-out md:inline-block">
                            Send
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

