import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <>
    <section className='background'>
    <nav className="navbar navbar-expand-lg bg-transparent py-4 fs-5">
  <div className="container">
    <a className="navbar-brand" href="#"> <FontAwesomeIcon icon={faPlaneDeparture} /> Travora</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav  ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">How it works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Winter Holiday</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Resort</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Discover</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item login-but ms-5">
        <button type="button" className="btn btn-outline-dark">Sign up</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className="container py-2 mt-5">
  <div className="row ms-5">
    <div className="col-md-12 section1-content">
      <h1>Amazing</h1>
      <h1><span>santorini </span>10 days tour</h1>
      <p>
      Santorini is a stunning Greek island known for its iconic white-washed buildings, breathtaking sunsets, and unique volcanic beaches. It's a must-visit destination for experiencing the beauty of the Aegean Sea and exploring ancient ruins.</p>
      <button type="button" className="btn btn-outline-dark btn-lg">BOOK NOW</button>
    </div>
  </div>
</div>
    </section>
    </>
  )
}
