import React from 'react'
import corousel1 from '../assets/carousal1.jpg'
import corousel2 from '../assets/carousal2.jpg'
import corousel3 from '../assets/carousal3.jpg'
import corousel4 from '../assets/carousal4.jpg'
import corousel5 from '../assets/carousal5.jpg'

export const Section3 = () => {
  return (
    <>
    <section>
        <div className="container py-md-4 py-3">
            <div className="row p-md-5 p-2">
                <div className="col-md-12">
                <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={corousel1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={corousel2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={corousel3} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={corousel4} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={corousel5} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
