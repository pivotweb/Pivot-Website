import Button from "../ui/Button";
import DonationLevel from "./DonationLevel";

const donationLevels = [
  { tier: "Bronze Donor", amount: "₦100,000+" },
  { tier: "Silver Donor", amount: "₦500,000+" },
  { tier: "Gold Donor", amount: "₦1,000,000+" },
];

const DonateSection = () => (
  <article className="w-full bg-black text-white rounded-xl flex flex-col items-center py-10 px-2 space-y-8 md:w-full">
    <div className="w-2/3 md:w-1/4">
      <h1 className="text-2xl font-bold">Donate</h1>
      <p className="text-lg text-[#FFFDFBCC]">Support us financially. Suggested giving levels:</p>
    </div>
    <div className="space-y-10 md:flex md:space-x-10 md:space-y-0">
      {donationLevels.map((level, i) => (
        <DonationLevel key={i} tier={level.tier} amount={level.amount} />
      ))}
    </div>
    <Button
      title="Donate"
      style="bg-[#F06621] hover:bg-[#F6A37A] px-15 py-4"
      link="https://docs.google.com/forms/d/e/1FAIpQLSc51CdFXa605Vsxpu-CuqaJ-OKsPfMoO9jh16QafdH7r6JiNQ/viewform?usp=header"
      newTab
    />
  </article>
);

export default DonateSection;