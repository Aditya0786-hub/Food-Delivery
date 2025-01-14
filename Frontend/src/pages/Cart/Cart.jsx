import React, { useContext } from "react";
import "./Cart.css";

import { StoreContext } from "../../components/Context/StoreContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartItem, food_list, removefromCart, getTotalCartAmt } = useContext(StoreContext);

   const navigate = useNavigate();

  return (
    <div>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title cart-items-item">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((items, index) => {
            if (cartItem[items._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item ">
                    <img src={items.image} alt="" />
                    <p>{items.name}</p>
                    <p>${items.price}</p>
                    <p>{cartItem[items._id]}</p>
                    <p>${items.price * cartItem[items._id]}</p>
                    <p
                      onClick={() => removefromCart(items._id)}
                      className="cross"
                    >
                      x
                    </p>
                  </div>
                  <hr />
                  
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
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
                      <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
                      <div className="cart-promocode">
                        <div>
                          <div className="cart-promocode">
                            <p>If you have a promo code, Enter it</p>
                            <div className="cart-promocode-input">
                              <input type="text" placeholder="Promo Code" />
                              <button>Submit it</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      </div>
    </div>
  );
};

export default Cart;
