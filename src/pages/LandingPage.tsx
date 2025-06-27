<<<<<<< HEAD
import { Edition25 } from "../components/Edition25/Edition25"
import { ContainerWrapper } from "../components/Global/Global"
import { Hero } from "../components/Hero/Hero"
import { Hustlers } from "../components/hustlers/Hustlers"
import { Header } from "../components/Navigation/Header"
import { Numbers } from "../components/Numbers/Numbers"
import Footer from '../components/Footer/Footer'
import Support from "../components/Support/Support"
import { Pivot24 } from "../components/Pivot24/Pivot24"
import { RolePlay } from "../components/RoleToPlay/RolePlay"
import { Stories } from "../components/Stories/Stories"
import { Testimonials } from "../components/Testimonials/Testimonials"
import ContactForm from "../components/contacts/ContactForm"
//nzube
import TeamSection from "../components/MyTeam/TeamSection"
import PartnersAndSponsors from "../components/Collab/PartnersAndSponsors"

export const LandingPage = () => {
    return (
        <>
            <ContainerWrapper >
                
                {/* <Navigation /> */}
                <Header />

                {/* <Hero (Ezinne)/> */} 
                
                {/* <Explore The Pivot Conference → (Ezinne)/> */}

                {/* <Meet the Team (Akpamgbo)/> */}
                <TeamSection />


                {/* <Partners and Sponsors  (Akpamgbo)/> */}
                <PartnersAndSponsors />

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
=======
import { ContainerWrapper } from "../components/Global/Global";
import Initiatives from "../components/Initiatives/Initiatives";

export const LandingPage = () => {
  return (
    <ContainerWrapper>
      <Initiatives />
    </ContainerWrapper>
  );
};
>>>>>>> 775d4de4f744ed62149d67c87cfcf19561f7b950
