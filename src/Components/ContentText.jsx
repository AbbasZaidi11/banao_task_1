import React from 'react'

function ContentText(props) {
  return (
    <div>
        <i class={props.categoryIcon}></i>
        <p>{props.category}</p>
        <h3><strong>{props.headline}</strong></h3>
        <p>{props.article}</p>
    </div>
  )
}

export default ContentText