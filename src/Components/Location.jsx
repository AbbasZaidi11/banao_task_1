import React from 'react';
import "../Styles/Location.css";
import Recommend from './Recommend';
function Location() {
  return (
  <>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1"><span>&#x1F4CD;</span>
</span>
  <input type="text" class="form-control" placeholder="Enter your Location" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<Recommend/>

</>
  )
}

export default Location;