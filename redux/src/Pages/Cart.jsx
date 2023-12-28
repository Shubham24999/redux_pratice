
import { useSelector } from "react-redux"
import { remove } from "../Store/CartSlice";
import { useDispatch } from "react-redux";

export const Cart = () => {

  const dispatch=useDispatch()

  
  const cartproducts=useSelector((state)=>state.cart)

  const handleRemove=(productId)=>{
    dispatch(remove(productId));
  }

  return (
    <div>
      <h1>Cart</h1>
      {
        cartproducts.map((item,itemNo)=>{
          return <div style={{width:"400px",height:"350px",margin:"40px",border:"2px solid black"}} key={itemNo}>
            <div ><img style={{width:"100px",height:"120px"}} src={item.image} alt="ProductImage" /></div>
        <div>
            <h3>{item.category}</h3>
            <p>{item.description.substring(0, 50)}</p>
            <div style={{display:"flex"}}>
            <h3>{item.price}</h3>
            <h3>{item.rating.count}</h3>
            <h3>{item.rating.rate}</h3>
            </div>
        </div>
        <button onClick={()=>handleRemove(item.id)} style={{color:"white",backgroundColor:"blue"}}>Remove</button>
          </div>
        })
      }
      
    </div>
  )
}
