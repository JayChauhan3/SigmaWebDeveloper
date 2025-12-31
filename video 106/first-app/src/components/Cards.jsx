import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className='card' style={{overflow: "hidden" }}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg" alt="" width={333} style={{ border: "2px solid black"}} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      
    </div>
  )
}

export default Cards