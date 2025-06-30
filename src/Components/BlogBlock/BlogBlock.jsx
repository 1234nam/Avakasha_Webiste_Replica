import React from 'react';
import './BlogBlock.css';

const blogData = [
  {
    title: 'College to Corporate',
    description: 'Your roadmap from student life to a thriving career. Learn the secrets to a smooth transition.',
    bgColor: '#f05a3c',
  },
  {
    title: 'Mastering Time Management',
    description: 'Discover practical strategies to manage your time effectively and achieve your goals with ease.',
    bgColor: '#1d85e6',
  },
  {
    title: 'Building Financial Freedom',
    description: 'Start early and learn how to manage money smartly for a secure future.',
    bgColor: '#24c465',
  },
    {
    title: 'The Art of Personal Branding',
    description: 'Uncover the steps to create a personal brand that stands out in today',
    bgColor: 'grey',
  },
  {
    title: 'Navigating the Gig Economy',
    description: 'Explore how to leverage freelance work and build a successful career in the gig economy.',
    bgColor: 'pink',
  },
];

const BlogBlock = () => {
  return (
    <div className="blog-wrapper">
      <h2 className="blog-heading">Featured Insights</h2>
      {blogData.map((item, index) => (
        <div className="blog-card" key={index} style={{ backgroundColor: item.bgColor }}>
          <div className="blog-text">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <button className="blog-button">Visit Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogBlock;
