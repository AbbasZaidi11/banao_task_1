import React from 'react'
import "../Styles/NavigationMenu.css";
function NavigationMenu() {
  return (
    <div className='navimenu'>
    <ul class="nav nav-tabs">
    
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">All Posts</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Article</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Event</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Education</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Job</a>
    </li>
  </ul>
  </div>
  )
}

export default NavigationMenu;