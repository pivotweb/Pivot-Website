export const Footprint = () => {
  return (
    <section className="py-10 my-15 bg-black text-white text-center ">
        <h1 className="text-[#F06621] text-2xl">Our Footprint So Far</h1>
        <main className="mt-15">
            <article className="w-[80%] text-center text-[#F06621] space-y-10 mb:w-full md:flex m-auto md:space-y-0">
                <div className="md:w-1/3">
                    <h1 className="text-4xl font-bold">5000+</h1>
                    <p className="text-xl mt-2 text-white">Program participants</p>
                </div>
                
                <div className="md:w-1/3">
                    <h1 className="text-4xl font-bold">10+</h1>
                    <p className="text-xl mt-2 text-white">States reached - 2 annual conferences</p>
                </div>
                
                <div className="md:w-1/3">
                    <h1 className="text-4xl font-bold">10M</h1>
                    <p className="text-xl mt-2 text-white">Funding awarded through The Pivot Challenge</p>
                </div>
                
            </article>
        </main>
    </section>
  );
}