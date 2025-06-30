import React from 'react' 
import './PstHome.css'
import PostInfo from './PostInfo'

const PstHome = () => {
  return (
     <div className="pst-page">
      <section className="pst-hero">
        <h1>Posts</h1>
      </section>
      <PostInfo />
      </div>
  )
}

export default PstHome