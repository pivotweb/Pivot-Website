// import React from 'react'
import './Explore.css'

const Explore = () => {
  return (
    <section>
        <div className="explore-container">
            <main className="explore-main">                 
                <h2>
                    <span>[ Explore The Pivot Conference → ]</span>
                    <span>[ Discover The Pivot Challenge → ]</span>
                </h2>             
            </main>

            <div className="explore-content">
                <div className="explore-content-left">
                    <h1>Our Story</h1>
                    <p>The Pivot was born out of frustration—and  hope. Frustration with the stagnation and  cycles of blame. Hope that if we gather the  right minds and voices, we can chart a new course.</p>
                    <p>Founded on the belief that sustainable change begins with deep reflection and deliberate  action, The Pivot brings together thinkers, builders, dreamers, and doers to shift thenarrative across Africa.</p>
                </div>

                <div className="explore-content-right">
                    <div className="explore-content-item">
                        <h1>Our Mission</h1>
                        <p>To create a platform that nurtures visionary thinking, bold discourse, and collaborative 
                         action—building a more just and prosperous society.</p>
                    </div>
                    <div className="explore-content-item2">
                        <h1>Our Vision</h1>
                        <p>A brighter and better future.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Explore