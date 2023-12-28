import React, { useEffect } from 'react'
import { SingleProduct } from '../Components/SingleProduct';
import {useDispatch,useSelector} from "react-redux"
import {add} from "../Store/CartSlice"
import { fetchProducts } from '../Store/ProductSlice';

export const Products = () => {

    const {data}=useSelector((state)=>state.product)
    // const [data,setData]=useState([]);

    const dispatch=useDispatch();
    
  
    useEffect(() => {
      dispatch(fetchProducts())
      // fetch('https://fakestoreapi.com/products')
      //         .then(res=>res.json())
      //         .then(json=>{
      //           console.log(json);
      //           setData(json);
      //         })
      //         .catch(e=>{
      //           console.log(e);
      //         })
    },[]);

    const handleAdd=(item)=>{

      dispatch(add(item));

    }

    return (
      <div>
      <h1>Hello </h1>
      {
        data.map((item,id)=>{
          return <SingleProduct handleAdd={handleAdd} category={item.category} description={item.description} image={item.image} price={item.price} rating={item.rating} id={id} key={id}/>
        })
      }
      </div>
    );
}
