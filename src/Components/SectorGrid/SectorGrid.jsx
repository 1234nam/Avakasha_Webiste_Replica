import React from 'react';
import { Link } from 'react-router-dom';
import './SectorGrid.css';

const sectors = [
  { title: 'IT and Related', color: '#00e1d4', path: '/itandrelated' },
  { title: 'Health', color: '#ff9900', path: '/health' },
  { title: 'Transport', color: '#ff9900', path: '/transport'},
  { title: 'Management Services', color: '#f20074',path: '/managementservices' },
  { title: 'Environmental Sustainability', color: '#00e1d4',path: '/environmentalsustainability' },
  { title: 'Energy', color: '#00bfff', path: '/energy'},
  { title: 'Safety, Security, and Risk', color: '#d42d70',path: '/safetysecurityandrisk'},
  { title: 'Building and Construction', color: '#f97b2f', path: '/buildingandconstruction' },
  { title: 'Materials', color: '#f8dc3f', path: '/materials' },
  { title: 'Food and Agriculture', color: '#f89e1b', path: '/foodandagriculture'},
  { title: 'Engineering', color: '#d42d70', path:'/engineering' },
  { title: 'Diversity and Inclusion', color: '#f97b2f',path: '/diversityandinclusion'},
  { title: 'Education and Training', color: '#00e1d4', path: 'educationandtraining' },
  { title: 'Finance and Accounting', color: '#ff55a3',path: '/financeandaccounting' },
  { title: 'Marketing and Advertising', color: '#f8b100',path: '/marketingandadvertising' },
  { title: 'Legal Services', color: '#38b6ff',path: '/legalservices' },
];

const SectorGrid = () => {
  return (
    <div className="sector-wrapper">
      <h2 className="sector-heading">Explore By Sectors</h2>
      <div className="sector-grid">
        {sectors.map((sector, index) => (
          <div className="sector-card" key={index}>
            {sector.path ? (
              <Link to={sector.path} style={{ color: sector.color, textDecoration: 'none' }}>
                {sector.title}
              </Link>
            ) : (
              <span style={{ color: sector.color }}>{sector.title}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorGrid;

