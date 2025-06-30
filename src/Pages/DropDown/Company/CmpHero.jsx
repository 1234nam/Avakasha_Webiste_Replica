import React from 'react'
import './CmpHero.css'
import Cmpinfo from './Cmpinfo'
// import LottiCmp from './LottiCmp'

const CmpHero = () => {
  return (
   <div className="company-page">
      <section className="company-hero">
        <h1>Candidate: Getting Started</h1>
      </section>
      {/* <section className="candidate-lottie-section">
        <Lotti />
      </section> */}
            
        
        <Cmpinfo />
    </div>
  )
}

export default CmpHero