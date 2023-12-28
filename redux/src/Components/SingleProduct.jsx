import React from 'react'
export const SingleProduct = (props) => {
    
    const {category,description,image,price,rating,handleAdd}=props;

  return (
    <div style={{width:"400px",height:"350px",margin:"40px",border:"2px solid black"}}>
        <div ><img style={{width:"100px",height:"120px"}} src={image} alt="ProductImage" /></div>
        <div>
            <h3>{category}</h3>
            <p>{description.substring(0, 50)}</p>
            <div style={{display:"flex"}}>
            <h3>{price}</h3>
            <h3>{rating.count}</h3>
            <h3>{rating.rate}</h3>
            </div>
        </div>
        <div style={{display:"flex"}}>
        {/* <button>+</button> */}
        {/* <h3>{quantity}</h3> */}
        {/* <button>-</button> */}
        <button onClick={()=>handleAdd(props)} style={{color:"white",backgroundColor:"blue"}}>Add To Cart</button>
        </div>
    </div>
  )
}
