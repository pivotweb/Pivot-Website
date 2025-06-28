import VolunteerCard, { type VolunteerCardProps } from "./VolunteerCard";
import DonateSection from "./DonationSection";
import { CommunityIcon, ShakeHandsIcon, VolunteerIcon } from "../../assets/svg/Icons";

const volunteerInfo: VolunteerCardProps[] = [{
        icon: <VolunteerIcon width={50} height={50} color="#F06621" />,
        title: "Volunteer",
        description:
            "Be part of event planning, logistics, content creation, and community outreach.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc51CdFXa605Vsxpu-CuqaJ-OKsPfMoO9jh16QafdH7r6JiNQ/viewform?usp=header",
        buttonTitle: "Become a volunteer"
    },
    {
        icon: <ShakeHandsIcon width={50} height={50} color="#F06621" />,
        title: "Partner and Sponsor",
        description:"Let’s co-create impact and build shared value for your brand.",
        link: "",
        buttonTitle: 'Partner with us'
    },
    {
        icon: <CommunityIcon width={50} height={50} color="#F06621" />,
        title: "Join Our Community",
        description:"Be part of the conversation via WhatsApp, Telegram, or our newsletter.",
        link: "",
        buttonTitle: 'Join us'
    }
];

export const JoinMovement = () => (
  <section className="my-15 text-center w-full">
    <h1 className="text-2xl md:text-3xl font-medium">
      Join the Movement. <br /> Drive Change
    </h1>
    <main className="flex flex-col gap-5 justify-center md:items-center flex-wrap mt-10 md:w-[80%] md:m-auto md:mt-15">
      <div className="flex flex-col gap-5 md:flex-row">
        {volunteerInfo.map((item, i) => (
          <VolunteerCard key={i} {...item} />
        ))}
      </div>
      <DonateSection />
    </main>
  </section>
);

export default JoinMovement;