import React from 'react'
import './DpHome.css'
import DpInfo from './DpInfo'

const DpHome = () => {
  return (
     <div className="dp-page">
      <section className="dp-hero">
        <h1>Data Policy</h1>
      </section>
      <DpInfo />
      </div>
  )
}

export default DpHome