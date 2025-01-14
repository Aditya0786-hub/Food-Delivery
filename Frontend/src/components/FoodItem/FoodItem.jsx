import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Fooditem.css'
import { StoreContext } from '../Context/StoreContext';

const FoodItem = ( {id,name,price,description,image}) => {
    
   
    const{cartItem,addTocart,removefromCart} = useContext(StoreContext);
    
  return (
    <div className='food-item'>
      <div className="food-item-img-contain">
        <img className='food-item-image' src={image} alt="" /> 
        {!cartItem[id]
          ? <img className='add' onClick={() => addTocart(id) } src={assets.add_icon_white}/>
          : <div className="food-item-counter">
            <img onClick={()=>removefromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItem[id]}</p>
            <img onClick={()=>addTocart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className='food-item-name-rating'>
        <p className='food-item-info'>{name}</p>
        <img  src={assets.rating_starts} alt="" />
      </div>
      <p className='food-item-desc'>{description}</p>
      <p className='food-item-price'>${price}</p>
    </div>
  )
}

export default FoodItem
