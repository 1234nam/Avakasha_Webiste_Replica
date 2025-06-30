import React from 'react'
import'./Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="logo" className='logo'/>
      
      <ul className="nav-links">
        <li><a href="/"> Home </a></li>

        <li className="dropdown">
        <a href="#">Register ▾</a> 
         <ul className="dropdown-menu">
            <li><a href="/candidate">Candidate: Getting Started</a></li>
            <li><a href="/company">Company: Getting Started</a></li>
            <li><a href="/institute">Institute Register</a></li>
            <li><a href="/referrals">Referrals</a></li>
          </ul>
          </li>

        <li className="dropdown">
        <a href='#'>About ▾</a>
        <ul className='dropdown-menu'>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/about us">About Us</a></li>
            <li><a href="/posts">Posts</a></li>
            <li><a href="/outsourcingservices">Outsourcing Service</a></li>
            <li><a href="/recruitmentservices">Recruitment Services</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/privacypolicy">Privacy Policy</a></li>
            <li><a href="/termsandcondition">Terms and Condition</a></li>
            <li><a href="/datapolicy">Data Policy</a></li>
            <li><a href="/disclaimer">Disclaimer</a></li>
            <li><a href="/feedback">Feedback</a></li>
            
        </ul>
        </li>
        
        <li className="dropdown">
          <a href='#'>Guideline ▾</a>
          <ul className='dropdown-menu'>
            <li><a href="/trainingsites">Training Sites</a></li>
            <li><a href="/hiringoptions">Hiring Options</a></li>
            <li><a href="/guideforinternship">Guide For Internship</a></li>
            <li><a href="/guideforapprenticeship">Guide For Apprenticeship</a></li>
            <li><a href="/unemployement">Un-Employement</a></li>
            
            </ul>
        </li>
        
       
        <li><button className='btn'>Search</button></li>
      </ul>
    </nav>
  )
}

export default Navbar