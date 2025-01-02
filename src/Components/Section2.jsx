import React from 'react'


export const Section2 = () => {
  return (
    <>
    <section className="holiday-section container py-4 text-center">
        <div className="container">
        <h1>Winter <span style={{color:"violet"}}>Holiday</span></h1>
        <p>Enjoy a cozy winter escape! Plan your trip to beautiful snowy spots and make the most of the season with fun activities and relaxing moments. Start your winter adventure today!</p>
      <div className="row mt-4 py-4 winter-card d-flex justify-content-center p-2">
    
        <div className="col-md-8 text-center ">
          <h1 className="fw-bold">ENJOY HOLIDAY</h1>
          <p className="mt-3">
            Escape to paradise and indulge in the perfect holiday getaway!
            Whether you're seeking adventure, relaxation, or cultural
            exploration, our destinations offer something for everyone. Enjoy
            breathtaking landscapes, vibrant cultures, and unforgettable
            experiences that will make your vacation truly memorable.
          </p>
          <button className="btn btn-outline-dark mt-3 px-4 py-2 text-light">Book Now</button>
        </div>
        </div>
        
      </div>
    </section>
    </>
  )
}
