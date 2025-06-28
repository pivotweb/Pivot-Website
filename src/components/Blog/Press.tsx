import "./Press.css"

export const BlogPress = () => {
 return (
    <section className="my-15 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Blog & Press</h1>
        <p className="text-md md:text-lg ">News & Updates from The Pivot Desk</p>
        <main className="flex md:flex-row flex-col gap-0 md:gap-5 justify-center mt-15 flex-wrap">
            <div className="hero-bg text-white ">
                <h1 className="text-2xl md:text-xl font-medium">Event Recaps</h1>
            </div>
            <div className="hero-bg text-white ">
                <h1 className="text-2xl md:text-xl font-medium">Event Recaps</h1>
            </div>
            <div className="hero-bg text-white ">
                <h1 className="text-2xl md:text-xl font-medium">Event Recaps</h1>
            </div>
            <div className="hero-bg text-white ">
                <h1 className="text-2xl md:text-xl font-medium">Event Recaps</h1>
            </div>
            <div className="hero-bg text-white ">
                <h1 className="text-2xl md:text-xl font-medium">Event Recaps</h1>
            </div>
        </main>
    </section>
 )
}