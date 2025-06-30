import React from 'react'
import './Checkout.css'


const blogDataC = [
  {
    title: 'College to Corporate',
    description: 'Your roadmap from student life to a thriving career. Learn the secrets to a smooth transition.',
    bgColor: '#f05a3c',
  },
]

const Checkout = () => {
  return (
     <div className="blog-wrapper-c">
      <h2 className="blog-heading-c">Checkout our Insights</h2>
      {blogDataC.map((item, index) => (
        <div className="blog-card-c" key={index} style={{ backgroundColor: item.bgColor }}>
          <div className="blog-text-c">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <button className="blog-button-c">Visit Insight</button>
        </div>
      ))}
    </div>
  );
};
  

export default Checkout