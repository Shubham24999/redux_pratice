import { createSlice } from "@reduxjs/toolkit";


const STATUSES=Object.freeze({
    IDLE:"idle",
    ERROR:"error",
    LOADING:"loading"
});

const initialState = [];

const ProductSlice=createSlice({
    name:"product",
    status:STATUSES.IDLE,

    reducers:{

        setProduct(state=initialState, action){
            
            state.data=action.payload;

        },
        setStatus(state, action){
            state.status=action.payload
        }
    }

})

export const {setProduct,setStatus}=ProductSlice.actions;

export default ProductSlice.reducer;


//Thunk

export const fetchProducts=()=>{
    return async function fetchProductsThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING));
        try {

            const res = await fetch("https://fakestoreapi.com/products");
            const data= await res.json();
            dispatch(setProduct(data))
            dispatch(setStatus(STATUSES.IDLE));
            
        } catch (error) {
         console.log(error);
         dispatch(setStatus(STATUSES.ERROR));

        }

    }

}