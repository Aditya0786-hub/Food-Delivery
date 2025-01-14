import React, { useContext } from 'react'
import { StoreContext } from '../../components/Context/StoreContext'
import "./Po.css"

const PlaceOrder = () => {

   const {getTotalCartAmt} = useContext(StoreContext);

  return (
    <div>
      <div className="place-order">
        <div className="place-order-left">
          <p className='title'>Delivery Information </p>
          <div className="multi-fields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last name' />
          </div>
          <input type="text" placeholder='E-mail' />
          <input type="text" placeholder='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip Code' />
            <input type="text" placeholder='Country' />
          </div>
        </div>
        <div className="place-order-right">
           <div className="cart-total">
           <h2>Cart total</h2>
                      <div>
                        <div className="cart-total-details">
                          <p>Subtotal</p>
                          <p>${getTotalCartAmt()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                          <p>Delivery Fee</p>
                          {getTotalCartAmt()===0?<p>{0}</p>
                        : <p>{2}</p>  
                        }
                        </div>
                        <hr />
                        <div className="cart-total-details">
                          <p>Total</p>
                          <p>${getTotalCartAmt() + 2 }</p>
                        </div>
                      </div>
                      <button>Proceed to Payment</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
