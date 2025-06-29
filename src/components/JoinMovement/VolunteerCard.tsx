import Button from "../ui/Button";

export interface VolunteerCardProps {
  title: string;
  description: string;
  link: string;
  buttonTitle: string;
  icon: React.ReactNode;
}

const VolunteerCard = ({ title, description, link, buttonTitle, icon }: VolunteerCardProps) => (
  <article className="w-full bg-black text-white rounded-xl flex flex-col items-center justify-between py-20 md:py-10 px-2 space-y-5 md:w-1/3">
    <div className="mb-2">{icon}</div>
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="text-lg md:text-md md:w-[80%]">{description}</p>
    <Button
      title={buttonTitle}
      style="bg-[#F06621] hover:bg-[#F6A37A] px-6 mt-8 py-4 "
      link={link}
    />
  </article>
);

export default VolunteerCard;