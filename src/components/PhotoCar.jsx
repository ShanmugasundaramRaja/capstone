import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function PhotoCar() {
  return (
    <MDBCarousel showControls fade >
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://www.travelandleisure.com/thmb/xyyOmec2yAqPGBcN-Y2FLfFadu0=/1600x1000/filters:fill(auto,1)/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.thetinybook.com/wp-content/uploads/2015/04/2-DAYS-IN-MILAN.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.budapest.com/w/respsliders/bpcompromo02_1_2_1_2.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='https://www.chasingthedonkey.com/wp-content/uploads/2021/04/Cleopatra-beach_Turkey_Cleopatra-Island_Depositphotos_265905366_s-2019.jpeg'
        alt='...'
      />
    </MDBCarousel>
  );
}