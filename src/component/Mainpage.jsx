import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from './slice/slice'

const Mainpage = () => {
  const URL = 'https://dummyjson.com/products'
  const [product, setProduct] = useState([])

  const getData = async () => {
    try {
      let res = await axios.get(URL);
      console.log(res.data.products)
      setProduct(res.data.products)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getData()
    product.forEach(object=>{
      object.qty=1
    });
  }, [])

  
  
  
  const dispatch = useDispatch();
  const click = (e) => {
    const payload = e;
    // console.log(e);
    dispatch(addtocart(payload))
  }

  const state = useSelector(state => state.cartslice.cart)


  return (
    <div>

      <div className='container text-center'>
        <div className='row'>
          {
            product.map((data, i) => (
              <div className='col-4' key={i} style={{ marginBottom: '20px' }}>
                <div className='card' style={{ width: '25rem' }} >
                  <img src={data.thumbnail} className='card-img-top' alt='Product-img' style={{ widht: '25rem', height: '15rem' }} />
                  <div className='card-body' style={{ height: '200px' }}>
                    <div className='card-title' style={{ fontWeight: '700' }}>{data.title}</div>
                    {/*                     <div className='card-text'>{data.description}</div> */}
                    <div style={{ width: '25rem', marginBottom: '40px' }}>
                      <div className='row' style={{ padding: '30px', marginBottom: '30px' }} >
                        <div className='col-6'><h3> ₹ {data.price}</h3>
                        </div>
                       
                        
                        <div className='col-6'>
                          
                          <button className='btn btn-dark btn-lg' onClick={() => click(data)}>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>


    </div>
  )
}

export default Mainpage