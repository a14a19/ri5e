import Bestrecruit from "../components/Bestrecruit";
import Levelup from "../components/Levelup";
import Nutshell from "../components/Nutshell";
import img3 from '../assets/images/recruitment/r3.jpg';

import WorkTogether from "../components/WorkTogether";

export default function AboutUs() {
    const NutshellDesc1 = `What sets us apart? Our unwavering dedication to growth. We transcend mere recruitment, cultivating opportunities for both our team and the companies we champion. From startups to IPOs, we've left a mark on Europe's tech landscape. As disruptors, we merge innovation with data-driven finesse, ensuring swift solutions and top-tier talent acquisitions for our partners. `
    const NutshellDesc2 = `Choose us for the most enjoyable experience because we prioritize our Talent Partners' flourishing. We emphasize work-life balance, offer personalized training, and organize team-building activities. Our goal is to foster unity and celebrate knowledge sharing. At our core, it's about growth, perpetual learning, and building enduring bonds beyond the office walls. `

    const levelUpDesc1 = `
    WeAreKeen BV (HQ)
    Brouwersgracht 224
    1013 HE Amsterdam
    The Netherlands`

    const levelUpDesc2 = `
    WeAreKeen Germany GmbH
    Wattstrasse 11
    13355 Berlin
    Germany`

    const img = `https://www.wearekeen.com/hubfs/WeAreKeen_May_2021/images/europe-desktop.svg`

    return (
        <>
            <Bestrecruit />
            <Nutshell title={`This is what we stand for`} btnPresent={false} img={img3} description1={NutshellDesc1} description2={NutshellDesc2} />

            <Levelup title={`Our Offices`} img1={img} buttontext={`Get in Touch`} description1={levelUpDesc1} conditionForPara={false} description2={levelUpDesc2} />
            <WorkTogether />
        </>
    )
}

