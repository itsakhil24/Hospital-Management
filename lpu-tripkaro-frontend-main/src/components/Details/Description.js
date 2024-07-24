import React from 'react'
import './Description.css'

const Description = ({data}) => {
  return (
    <div id='description-area'>
           
        <div>
        <h2>{data.name}</h2>
        <h3>{data.subtitle}</h3>
        </div>

        {/* TODO: Use all the images via creating a carousel here */}

        <div>
            <img style={{width: "100%", height: "400px", objectFit : "cover"}} src={data.images[0]}/>
        </div>

        <div>
            <h4>About The Experience</h4>
            <p>{data.content}</p>
        </div>

    </div>
  )
}

export default Description