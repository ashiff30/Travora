import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';



export const Section5 = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="row mt-4 fs-1  text-center section5">
                <div className="col-6 col-md-3">
                <FontAwesomeIcon icon={faUmbrellaBeach} className='icon' />
                <h4>425</h4>
                <h4 className='text'>Tourist</h4>
                </div>
                <div className="col-6 col-md-3">
                <FontAwesomeIcon icon={faCalendarDays} className='icon' />
                <h4>425 </h4>
                <h4 className='text'>Years</h4>
                </div>
                <div className="col-6 col-md-3">
                <FontAwesomeIcon icon={faHouseChimneyWindow} className='icon' />
                <h4>425</h4>
                <h4 className='text'>Rooms</h4>
                </div>
                <div className="col-6 col-md-3">
                <FontAwesomeIcon icon={faChampagneGlasses} className='icon' />
                <h4>425</h4>
                <h4 className='text'>Restaurants</h4>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
