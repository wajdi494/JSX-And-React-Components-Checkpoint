import React from 'react'

function Description({ product }) {
  return (
    <div>           
         <p>{product.description}</p>
    </div>
  )
}

export default Description