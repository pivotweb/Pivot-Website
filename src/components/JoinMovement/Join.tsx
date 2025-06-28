import { VolunteerIcon } from "../../assets/svg/Icons"
import Button from "../ui/Button"

export const JoinMovement = () => {
 return (
    <section className="my-15 text-center w-full">
        <h1 className="text-2xl md:text-3xl font-medium">Join the Movement. <br /> Drive Change</h1>
        <main className="flex flex-col gap-5 justify-center md:items-center mt-15 flex-wrap md:w-[80%] md:m-auto md:mt-15">
            <div className="flex flex-col gap-5 md:flex-row">
                <article className="w-full bg-black text-white rounded-xl flex flex-col items-center py-10 px-2 space-y-4 md:w-1/3">
                    <VolunteerIcon width={50} height={50} color="#F06621"/>
                    <h1 className="text-2xl">Volunteer</h1>
                    <p className="text-lg md:text-md">Be part of event planning, logistics, content creation, and community outreach.</p>
                    <Button title="Become a volunteer" style={"bg-[#F06621] hover:bg-[#F6A37A] px-6  mt-8 py-4"} link="https://docs.google.com/forms/d/e/1FAIpQLSc51CdFXa605Vsxpu-CuqaJ-OKsPfMoO9jh16QafdH7r6JiNQ/viewform?usp=header"/>
                </article>

                <article className="w-full bg-black text-white rounded-xl flex flex-col items-center py-10 px-2 space-y-4 md:w-1/3">
                    <VolunteerIcon width={50} height={50} color="#F06621"/>
                    <h1 className="text-2xl">Volunteer</h1>
                    <p className="text-lg md:text-md">Be part of event planning, logistics, content creation, and community outreach.</p>
                    <Button title="Become a volunteer" style={"bg-[#F06621] hover:bg-[#F6A37A] px-6  mt-8 py-4"} link="https://docs.google.com/forms/d/e/1FAIpQLSc51CdFXa605Vsxpu-CuqaJ-OKsPfMoO9jh16QafdH7r6JiNQ/viewform?usp=header"/>
                </article>

                <article className="w-full bg-black text-white rounded-xl flex flex-col items-center py-10 px-2 space-y-4 md:w-1/3">
                    <VolunteerIcon width={50} height={50} color="#F06621"/>
                    <h1 className="text-2xl">Volunteer</h1>
                    <p className="text-lg md:text-md">Be part of event planning, logistics, content creation, and community outreach.</p>
                    <Button title="Become a volunteer" style={"bg-[#F06621] hover:bg-[#F6A37A] px-6  mt-8 py-4"} link="https://docs.google.com/forms/d/e/1FAIpQLSc51CdFXa605Vsxpu-CuqaJ-OKsPfMoO9jh16QafdH7r6JiNQ/viewform?usp=header"/>
                </article>
            </div>
            <article className="w-full md:w-[100%] bg-black text-white rounded-xl flex flex-col items-center py-10 px-2 space-y-8 ">
                <div className="w-2/3">
                    <h1 className="text-2xl text-bold">Donate</h1>
                    <p className="text-lg">Support us financially. Suggested giving levels:</p>
                </div>
                <article className=" space-y-10 md:flex md:space-x-10 md:space-y-0 ">
                    <div className="">
                        <h4 className="text-xl">Bronze Donor</h4>
                        <h4 className="text-[#F06621] text-3xl font-bold">₦100,000+</h4>
                    </div>

                    <div className="">
                        <h4 className="text-xl">Bronze Donor</h4>
                        <h4 className="text-[#F06621] text-3xl font-bold">₦100,000+</h4>
                    </div>

                    <div className="">
                        <h4 className="text-xl">Bronze Donor</h4>
                        <h4 className="text-[#F06621] text-3xl font-bold">₦100,000+</h4>
                    </div>
                    
                </article>
                <Button title="Donate" style={"bg-[#F06621] hover:bg-[#F6A37A] px-6  py-4"} link="https://docs.google.com/forms/d/e/1FAIpQLSc51CdFXa605Vsxpu-CuqaJ-OKsPfMoO9jh16QafdH7r6JiNQ/viewform?usp=header"/>
            </article>
        </main>
    </section>
 )
}