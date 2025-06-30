import React from 'react';
import './Perks.css';

const perksData = [
  {
    icon: '⚡',
    title: 'Agility',
    description: 'We are constantly transforming the landscape, taking on new challenges and tasks every day.',
  },
  {
    icon: '🛡️',
    title: 'Benefits',
    description: 'Flexi Working, Remote Working, Medical, Group, and Medical Insurance.',
  },
  {
    icon: '🤝',
    title: 'People First',
    description: 'We encourage ideas, thoughts, and a culture of inclusivity among individuals.',
  },
  {
    icon: '📚',
    title: 'Learning Never Stops',
    description: 'We prioritize growth and offer immersive learning environments for continuous development.',
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'We are committed to digital transformation for customers and stakeholders.',
  },
  {
    icon: '⚖️',
    title: 'Work-Life Balance',
    description: 'We are more than an employer; we actively support a healthy work–life balance.',
  },
  {
    icon: '🔓',
    title: 'Freedom to Grow',
    description: 'Over the years, we empower employees with opportunities to grow and take ownership.',
  },
  {
    icon: '🛑',
    title: 'Less Likely to be Injured',
    description: 'We ensure employees are protected from risks through strict safety policies.',
  },
  {
    icon: '🌍',
    title: 'Our Values',
    description: 'Driven by the 5 core values: Speed, Trust, Bold, Passion, and Digital.',
  },
  
];

const Perks = () => {
  return (
    <div className="perks-container">
      <h2 className="perks-heading">Perks of Being with Avakasha</h2>
      <div className="perks-grid">
        {perksData.map((perk, index) => (
          <div className="perk-card" key={index}>
            <div className="perk-icon">{perk.icon}</div>
            <h3 className="perk-title">{perk.title}</h3>
            <p className="perk-description">{perk.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perks;
