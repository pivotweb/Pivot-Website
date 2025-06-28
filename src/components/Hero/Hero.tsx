// import Button from "../ui/Button"
import HeroPic from '../../../public/images/HeroPic.png'
import "./Hero.css"

export const Hero = () => {
    return (
        <section className="Main-hero-sct">
           <div className="main-hero-container">
            <div className="Main-hero-context">
                <h1>Rethinking Our <span>Collective <br /> Existence.</span> Rebuilding Africa <br /> from Within.</h1>
                <p>The Pivot is a civic-inspired movement designed to <br /> spark bold conversations, spotlight real solutions, and <br /> nurture the change-makers leading Africa’s <br /> transformation.</p>
                <div className="Main-hero-input">
                    <input type="text" placeholder="Enter email address" name="" id="" />
                    <button>Join our mailing List</button>
                </div>
            </div>
            <div className="Main-hero-image">
                <img src={HeroPic} alt="" />
            </div>
           </div>
        </section>
    )
}