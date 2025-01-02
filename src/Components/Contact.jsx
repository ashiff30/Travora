import React from 'react'

export const Contact = () => {
  return (
    <>
    <section className='contact-section mt-md-3'>
        <div className="container mt-md-4 ">
            <div className="row">
                <div className="col-md-12 text-center">
                <h4>Contact</h4>
                </div>
            <div className="col-md-12 mt-md-3 d-flex justify-content-center form-section">
            <form>
  <div class="mb-3 mt-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3 mt-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3 mt-3">
    <label for="exampleInputEmail1" class="form-label">Phone number</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your contact with anyone else.</div>
  </div>
  <button type="submit" class="btn mb-md-3 btn-outline-light">Submit</button>
</form>
            </div>
            
            
            </div>
        </div>
    </section>
    </>
  )
}
