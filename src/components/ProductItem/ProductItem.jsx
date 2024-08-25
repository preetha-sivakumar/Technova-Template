import React, { useContext } from 'react';
import './ProductItem.css';  // Importing CSS for styling the product item
import { StoreContext } from '../../context/StoreContext';  // Importing context for cart state management

// ProductItem component
const ProductItem = ({ id, name, price, description, image }) => {
  // Extract cartItems, addToCart, and removeFromCart from StoreContext
  const { cartItems } = useContext(StoreContext);

  return (
    <div className="product-item">
      {/* Container for product image and cart actions */}
      <div className="prod-item-img-cont">
        {/* Product image */}
        <img className="prod-item-img" src={image} alt={name} />

       
     
      <div className="prod-info">
       
        <div className="prod-name">
          <p>{name}</p>
        </div>
       
        <p className="prod-item-desc">{description}</p>
        <p className="prod-item-price">${price}</p>
      </div>
    </div>
    </div>
  );
}

export default ProductItem;
