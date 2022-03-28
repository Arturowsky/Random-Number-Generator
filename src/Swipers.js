import React, {useRef, useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const Swipers = () => {

    return (
        <Swiper>
            <SwiperSlide><div className="selection">
            <select>
              <option disabled selected>Twórz wiele jednocześnie [wkrótce]</option>
              <option disabled>Wylosuj 3 liczby</option>
              <option disabled>Wylosuj 10 liczb</option>
              <option disabled>Wylosuj 16 liczb</option>
              <option disabled>Wylosuj 50 liczb</option>
              <option disabled>Wylosuj 100 liczb</option>
              <option disabled>Wylosuj 200 liczb</option>
              <option disabled>Wylosuj 300 liczb</option>
              <option disabled>Wylosuj 500 liczb</option>
              <option disabled>Wylosuj 1000 liczb</option>
            </select>
            <button className="btn-custom" style={{background: "#2C3E50"}}>stwórz</button>
          </div></SwiperSlide>
            <SwiperSlide><div style={{background: "#34495e", display: "grid", placeItems: "center", height: "100px"}}>pierwszy slajd</div></SwiperSlide>
        </Swiper>
    )
}
export default Swipers;