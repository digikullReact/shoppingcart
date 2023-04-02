import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addtocart,removeFromcart } from './slice/slice'

const Cart = () => {

  const [qty, setQty] = useState(1)
  const [sum, setSum] = useState(0)
  const dispatch=useDispatch();

  const utilityGetTotal=(state)=>{
  
    return state.reduce((acc,ele)=>acc+=Number(ele.price)*Number(ele.quantity),0);

  }

  const productPrice=(product)=>{
    return Number(product.quantity)*Number(product.price);

  }
  /*
  const clickplusone = () => {
    let incr = qty + 1;
    setQty(incr)
  }
  */
  const clickMone = (data) => {
    // dispatch the action and increment the quantity
    
   // let der = qty - 1;
    //setQty(der)
    dispatch(addtocart(data))
  }
  const clickLess = (data) => {
    // dispatch the action and increment the quantity
    
   // let der = qty - 1;
    //setQty(der)
    dispatch(removeFromcart(data))
  }
  let sumtotal = 0
  // let items = localSt
  const state = useSelector(state => state.cartslice.cart)

 // console.log(state)
  
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}> Your cart [{state.length} items ]</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {

            state.map((data, i) => (
              <tr key={i}>
                <td><img src={data.thumbnail} style={{ height: '100px', width: '100px' }} /><span style={{ fontSize: '28px', marginLeft: '25px', color: 'red' }}>{data.title} </span></td>
                <td><span style={{ fontSize: '28px', marginLeft: '25px', color: '' }}>₹ {data.price} </span> </td>
                <td><button onClick={()=>clickMone(data)}>+</button>{data.quantity}<button onClick={()=>clickLess(data)}>-</button></td>
                <td><span style={{ fontSize: '28px', marginLeft: '25px', color: '' }}>{productPrice(data)} </span></td>
              </tr>


            ))


          }
          <tr>
            <th>Subtotal</th>
            <td>{sum}</td>
          </tr>
          <tr>
            <th>Sales tax</th>
            <td>-----</td>
          </tr>
          <tr>
            <th>Coupon Code</th>
            <td>Add Coupon</td>
          </tr>
          <tr>
            <th>Grand Total</th>
            <td>₹-----------{utilityGetTotal(state)} </td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}

export default Cart