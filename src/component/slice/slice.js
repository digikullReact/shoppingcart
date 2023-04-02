import { createSlice } from "@reduxjs/toolkit";


export const Slice= createSlice({
  name:'cart',
  initialState:{
    cart:[]
  },
  reducers:{
    addtocart:(state,action)=>{

   
     let presentData=state.cart.find(ele=>ele.id==action.payload.id);
     if(presentData){
      presentData.quantity++;
    // let newRecord= JSON.parse(JSON.stringify(presentData[0])) ;
        //remove the alread existing data for this id ;
     let filteredData=state.cart.filter(ele=>ele.id!=action.payload.id);
     state.cart=[...filteredData,presentData];
     }else{
      state.cart.push({...action.payload,quantity:1});
     }
   
   
    },
    removeFromcart:(state,action)=>{

   
      let presentData=state.cart.find(ele=>ele.id==action.payload.id);
      if(presentData && presentData.quantity>0){
       presentData.quantity--;
     // let newRecord= JSON.parse(JSON.stringify(presentData[0])) ;
         //remove the alread existing data for this id ;
      let filteredData=state.cart.filter(ele=>ele.id!=action.payload.id);
      state.cart=[...filteredData,presentData];
      }
    
    
     }
  }
})

export const {addtocart,removeFromcart}=Slice.actions
export default Slice.reducer