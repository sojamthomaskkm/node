import React from 'react'

const Card = ({data}) => {
    console.log(data)
  return (
    <div>
        <div>
            <h2>{data.name}</h2>
            <h2>{data.channel}</h2>
            <h2>{data.views}</h2>
            <h2>{data.uploadeddate}</h2>
        </div>
    </div>
  )
}

export default Card