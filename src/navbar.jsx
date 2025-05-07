import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <section id='navbar' className='mt-1 navbar bg-black p-3'>
<ul className="container d-flex flex-column flex-sm-row align-items-center text-white gap-3 gap-sm-4 justify-content-between py-3">
  <li className="nav-item">
    <Link to="/" className="nav-link text-white" style={{ textDecoration: 'none' }}>
      Home
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/about" className="nav-link text-white" style={{ textDecoration: 'none' }}>
      About
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/learn-more" className="nav-link text-white" style={{ textDecoration: 'none' }}>
      Learn More
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/contact" className="nav-link text-white" style={{ textDecoration: 'none' }}>
      Contact Us
    </Link>
  </li>
</ul>

    </section>
  );
}
