import React from 'react'
import './AbtHome.css'
import AbtInfo from './AbtInfo'

const AbtHome = () => {
 
    return (
    <div className="abt-page">
      <section className="abt-hero">
        <h1>About Us</h1>
      </section>
     <AbtInfo />
    </div>
  )
  
}

export default AbtHome