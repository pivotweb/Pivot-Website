import { ContainerWrapper } from "../components/Global/Global"
import Footer from '../components/Footer/Footer'
import ContactForm from "../components/contacts/ContactForm"
import { Header } from "../components/Navigation/Header"
import { BlogPress } from "../components/Blog/Press"
import { JoinMovement } from "../components/JoinMovement/Join"
import { MediaGallery } from "../components/Media/Media"
import { Footprint } from "../components/Footprint/Footprint"
import { Realpeople } from "../components/Realpeople/RealPeople"

export const LandingPage = () => {
    return (
        <>
            <ContainerWrapper >
                
                {/* <Navigation /> */}
                <Header />

                {/* <Hero (Ezinne)/> */} 
                
                {/* <Explore The Pivot Conference → (Ezinne)/> */}

                {/* <Meet the Team (Akpamgbo)/> */}

                {/* <Partners and Sponsors  (Akpamgbo)/> */}

                {/* <Initiatives (Akpamgbo)/> */}

                {/* <Real People. Real Progress. (BIO)/> */}
                <Realpeople />

                {/* <Our Footprint So Far (BIO)/> */}
                <Footprint />

                {/* <Media & Gallery (BIO)/> */}
                <MediaGallery />

                {/* Join the Movement. (BIO)*/}
                <JoinMovement />

                {/* Blog & Press (BIO)*/}
                <BlogPress />

                {/* <Contact Us /> */}
                <ContactForm />

                {/* Footer */}
                <Footer/>
            </ContainerWrapper>
        </>
    )
}