import React from 'react'

function Image({ product }) {
  return (
    <div>
         <img src={product.image} alt='' />
    </div>
  )
}

export default Image