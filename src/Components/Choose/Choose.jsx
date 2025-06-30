import React from 'react';
import './Choose.css';

const Choose = () => {
  const cards = [
    {
      title: 'DIVERSE',
      description:
        'Embracing diversity in the workplace fosters creativity and innovation by bringing together a wide range of perspectives and ideas.',
      color: '#00FFFF',
    },
    {
      title: 'ADAPTIVE',
      description:
        'An adaptive workplace embraces change and continuously evolves to meet the diverse needs of its employees.',
      color: '#FF6B35',
    },
    {
      title: 'SKILLED',
      description:
        'Skilled individuals bring high expertise, training, and experience, driving innovation and competitiveness.',
      color: '#FFA500',
    },
    {
      title: 'PROFESSIONAL',
      description:
        'Professionalism at work ensures a respectful and productive environment, enhancing trust and customer satisfaction.',
      color: '#FF00FF',
    },
  ];

  return (
    <div className="choose-container">
      <h2 className="choose-heading">Why Choose Us?</h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="choose-card" key={index}>
            <h3 style={{ color: card.color }}>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
