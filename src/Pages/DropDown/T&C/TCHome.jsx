import React from 'react'
import './TCHome.css'
import TCInfo from './TCInfo'

const TCHome = () => {
  return (
    <div className="tc-page">
      <section className="tc-hero">
        <h1>Terms and Condition</h1>
      </section>
      <TCInfo />
      </div>
  )
}

export default TCHome