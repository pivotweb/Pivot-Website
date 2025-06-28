
export const Realpeople = () => {
 return (
    <section className="my-15 ">
        <main className="flex flex-col gap-10 justify-center md:items-center mt-15  md:m-auto md:flex-row md:mt-15">
            <article className="w-1/2 space-y-8">
                <h1 className="text-3xl font-bold">Real People. Real Progress.</h1>
                <p className="text-lg">We measure success not just by numbers, but by lives changed, narratives shifted, and systems moved.</p>
                <div className="w-full h-[350px] md:h-[400px] overflow-hidden ">
                    <img src="images/pivot1.jpg" alt="" className="w-full h-full object-cover rounded-2xl"/>
                </div>
            </article>

            <div className="w-1/2">
                <article>
                    <p>“I came to The Pivot as a curious onlooker. I left with a business model, a mentor, and a tribe.”</p>
                    <img src="" alt="" />
                    <p>— Adaobi Eze, Entrepreneur, Enugu</p>
                </article>
            </div>
        </main>
    </section>
 )
}