// import React from 'react'
import './Value .css'

const Value = () => {
  return (
<section>
    <div>
        <div className="core-values-section">
            <h2 className="section-title">Our Core Values</h2>
            <div className='values-timeline-container'>
                <div className="values-timeline">
                    <span className="value-text">Integrity</span>
                    
                <div className="timeline-segment">
                    <div className="orange-line">
                        <div className="timeline-dot"></div>
                    </div>
                </div>
                    
                    <span className="value-text">Innovation</span>
                    
                <div className="timeline-segment">
                    <div className="orange-line">
                        <div className="timeline-dot"></div>
                    </div>
                </div>
                    
                    <span className="value-text">Collaboration</span>
                    
                <div className="timeline-segment">
                    <div className="orange-line">
                        <div className="timeline-dot"></div>
                    </div>
                </div>
                    
                    <span className="value-text">Excellence</span>
                </div>
            </div>
        </div>

        <div className="core-values-content">
            <p>“We’re not waiting for perfect conditions. We’re <br /> building anyway. The Pivot is where we stop <br /> asking who will fix things—and start becoming the <br /> answer.”</p>
            <p className='ValP'> -Founder, The Pivot</p>
        </div>
    </div>
</section>
  )
}

export default Value;