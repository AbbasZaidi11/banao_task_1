import React from 'react'
import '../Styles/ContentImage.css';
function ContentImage(props) {
  return (
    <img className='content-image' src={props.imgsrc} alt="contentrelatedpicture"/>
  )
}

export default ContentImage;