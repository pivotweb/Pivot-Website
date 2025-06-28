// import { Edition25 } from "../components/Edition25/Edition25"
import { ContainerWrapper } from "../components/Global/Global"
import { Hero } from "../components/Hero/Hero"
import Explore from '../components/Explore/Explore'
// import { Hustlers } from "../components/hustlers/Hustlers"
import CoreValue from '../components/CoreValue/Value'
import { Header } from "../components/Navigation/Header"
// import { Numbers } from "../components/Numbers/Numbers"
import Footer from '../components/Footer/Footer'
// import Support from "../components/Support/Support"
// import { Pivot24 } from "../components/Pivot24/Pivot24"
// import { RolePlay } from "../components/RoleToPlay/RolePlay"
// import { Stories } from "../components/Stories/Stories"
// import { Testimonials } from "../components/Testimonials/Testimonials"
import ContactForm from "../components/contacts/ContactForm"

export const LandingPage = () => {
    return (
        <>
            <ContainerWrapper >
                
                {/* <Navigation /> */}
                <Header />

                {/* <Hero (Ezinne)/>  */}
                <Hero />
                
                {/* <Explore The Pivot Conference → (Ezinne)/> */}
                <Explore />

                {/* Core Value (Ezinne)*/}
                <CoreValue />

                {/* <Meet the Team (Akpamgbo)/> */}

                {/* <Partners and Sponsors  (Akpamgbo)/> */}

                {/* <Initiatives (Akpamgbo)/> */}

                {/* <Real People. Real Progress. (BIO)/> */}

                {/* <Our Footprint So Far (BIO)/> */}

                {/* <Media & Gallery (BIO)/> */}

                {/* Join the Movement. (BIO)*/}

                {/* Blog & Press (BIO)*/}

                {/* <Contact Us /> */}
                <ContactForm />

                {/* Footer */}
                <Footer/>
            </ContainerWrapper>
        </>
    )
}