interface DonationLevelProps {
    tier: string;
    amount: string;
  }
  
  const DonationLevel = ({ tier, amount }: DonationLevelProps) => (
    <div>
      <h4 className="text-xl">{tier}</h4>
      <h4 className="text-[#F06621] text-3xl font-bold">{amount}</h4>
    </div>
  );
  
  export default DonationLevel;