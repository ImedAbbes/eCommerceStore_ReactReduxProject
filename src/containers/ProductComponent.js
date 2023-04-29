import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products)
  const renderList = products.map((product)=>{
    const {id, title,image,price,category} = product
    return (
        <div className='four wide column ' key={id}>
          <Link to={`/product/${id}`}> 
          <div className='ui link cards'>
            <div className='card'>
                <img  src={image} alt={title} height={300} />
                <div className='content'>
                  <h2>{title}</h2>
                  <div className='meta price'>${price}</div>
                  <div className='meta'>{category}</div>
                </div>
            </div>
          </div>
          </Link>
        </div>
      )
  })
  return <>{renderList}</>
}

export default ProductComponent
