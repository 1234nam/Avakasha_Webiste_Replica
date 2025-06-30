import React from 'react';
import './InfoBlock.css';

const blockData = [
  {
    title: '💼 How to Nail Your First Job Interview',
    description: 'Master the best techniques to impress recruiters and land your dream job.',
    color: 'cyan'
  },
  {
    title: '🔗 Building a Killer LinkedIn Profile',
   description: 'Optimize your profile to boost visibility and attract top recruiters.',
    color: 'orange'
  },
  {
    title: '⏳ Time Management Hacks for Gen Z',
    description: 'Stay productive and balance work, fun, and personal growth like a pro..',
    color: 'gold'
  },
  {
    title: '🎨 Personal Branding on Social Media',
    description: 'Stand out in the digital age by building a unique personal brand.',
    color: 'magenta'
  },
  {
    title: '🛠️ Must-Have Skills for 2025',
    description: 'Discover the top skills that will make you career-ready for the future.',
    color: 'turquoise'
  },
  {
    title: '📊 How to Start Investing as a Gen Z',
    description: 'Learn the basics of investing and grow your wealth early!',
    color: 'orangered'
  }
];

const InfoBlock = () => {
  return (
    <div className="info-wrapper">
      <h2 className="section-title">From Our Blogs</h2>
      <div className="block-container">
        {blockData.map((block, index) => (
          <div className="info-block" key={index}>
            <h3 style={{ color: block.color }}>{block.title}</h3>
            <p>{block.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBlock;
