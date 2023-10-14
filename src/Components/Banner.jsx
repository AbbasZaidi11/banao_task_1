import React, { useState } from 'react';
import '../Styles/Banner.css';

function Banner() {
    const[followers,setfollowers]=useState(142765);
  return (
    <div class="banner">
    <div className="bannerText">

        <h1>Computer Engineering</h1>
        <p>{followers} Computer Engineers follow this</p>
    </div>
     </div>
  );
}

export default Banner;