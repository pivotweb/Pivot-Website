import { ContainerWrapper } from "../components/Global/Global"
import Footer from '../components/Footer/Footer'
import { Hero } from "../components/Hero/Hero"
import Explore from '../components/Explore/Explore'
import CoreValue from '../components/CoreValue/Value'
import ContactForm from "../components/contacts/ContactForm"
import Initiatives from "../components/Initiatives/Initiatives";
import TeamSection from "../components/MyTeam/TeamSection"
import { Header } from "../components/Navigation/Header"
import { BlogPress } from "../components/Blog/Press"
import { JoinMovement } from "../components/JoinMovement/Join"
import { MediaGallery } from "../components/Media/Media"
import { Footprint } from "../components/Footprint/Footprint"
import PartnersAndSponsors from "../components/Collab/PartnersAndSponsors"
// import { Realpeople } from "../components/Realpeople/RealPeople"

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
                <TeamSection />

                {/* <Partners and Sponsors  (Akpamgbo)/> */}
                <PartnersAndSponsors />

                {/* <Initiatives (Akpamgbo)/> */}
                <Initiatives />

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
