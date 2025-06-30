import React from 'react'
import './TsHome.css'
import TsInfo from './TsInfo'

const TsHome = () => {
  return (
   <div className="ts-page">
      <section className="ts-hero">
        <h1>Training Sites</h1>
      </section>
      <TsInfo />
      
      </div>
  )
}

export default TsHome