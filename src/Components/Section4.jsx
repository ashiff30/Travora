import React from 'react'
import imgtop from '../assets/section4top.png'

export const Section4 = () => {
  return (
    <>
    <section className='section4'>
        <div className="container">
            <div className="row section4-front py-5">
                <div className="col-md-12 d-flex justify-content-center  mt-4">
                    <img src={imgtop} alt="" />
                </div>
                <div className="col-md-12 text-center mt-5 py-5 text-dark">
                    <h5>Embark on a journey of discovery and adventure as you explore the beauty of our planet. <br /><br /> Enjoy the world around you, from breathtaking landscapes to vibrant cultures, and create unforgettable memories along the way. <br /> <br /> Travel far and wide, embrace new experiences, and let your wanderlust guide you to incredible destinations. The world is full of wonders waiting to be explored!</h5>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
