import AccordionItem from "./AccordionItem";
import Testimonial from "./Testimonial";

export default function Initiatives() {
  return (
    <section className="py-10 md:grid md:gap-5">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Initiatives
      </h2>

      {/* Accordion */}
      <div className="mb-10">
        <AccordionItem
          title="The Pivot Conference"
          content="Where big ideas meet real action. Our annual flagship gathering every October 1st brings together thought leaders, policymakers, entrepreneurs, and citizens to debate, challenge, and co-create solutions."
          link="https://thepivot.ng"
          index={1}
        />
        <AccordionItem
          title="The Pivot Challenge"
          content="Our annual idea-to-impact competition for young changemakers solving tough social problems with bold ideas."
          link="https://challenge.thepivot.ng"
          index={2}
        />
      </div>

      {/* Real People Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section: Text + Image */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">
              Real People. Real Progress.
            </h3>
            <p className="text-gray-600 max-w-md">
              We measure success not just by numbers, but by lives changed,
              narratives shifted, and systems moved.
            </p>
          </div>

          <img
            src="/images/hero.png"
            alt="Pivot event"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Section: Testimonials */}
        <div className="flex flex-col gap-6">
          <Testimonial
            quote="I came to The Pivot as a curious onlooker. I left with a business model, a mentor, and a tribe."
            author="Adaobi Eze, Entrepreneur, Enugu"
            imageUrl="/images/story2.jpg"
          />
          <Testimonial
            quote="The conference gave us the courage to challenge local leadership—respectfully, boldly, and with facts."
            author="Kingsley Nwankwo, Youth Advocate, Ebonyi"
            imageUrl="/images/story2.jpg"
            
          />
        </div>
      </div>
    </section>
  );
}
