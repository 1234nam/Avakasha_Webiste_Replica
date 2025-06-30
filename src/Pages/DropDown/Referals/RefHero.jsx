import React from 'react'
import './RefHero.css'
import RefInfo from './RefInfo'
import ReferralForm from './ReferralForm'

const RefHero = () => {
  return (
   <div className="referrals-page">
      <section className="referrals-hero">
        <h1>Referrals Register</h1>
      </section>
      <RefInfo />
      <ReferralForm />
    </div>
  )
}


export default RefHero