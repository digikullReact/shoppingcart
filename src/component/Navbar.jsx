import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const state = useSelector(state => state.cartslice.cart)
  if(state.length>0){
    // localStorage.setItem(state)
  }

  return (
    <div>
      <nav className='navbar bg-body-tertiary bg-dark'>
        <div className='container-fluid'>
          <h2 style={{ textAlign: 'center', }}>Product Navbar</h2>
          <div className='d-flex'>
            <div className=''>
              <ul className='navbar-nav   '>
                <li className='nav-item nav-link ' style={{ marginRight: '50px' }}><h4><Link to='./Cart'>cart {state.length<=0?'':<span style={{background:'red',borderRadius:'100px' , color:'white',padding:'5px',marginBottom:'10px', zIndex:'10'}}>{state.length}</span>}</Link></h4></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar

