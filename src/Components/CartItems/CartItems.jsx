import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

export const CartItems = () => {
  const {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  const cartHasItems = all_product.some((e) => cartItems[e.id] > 0);

  return (
    <div className="cartItems">
      {!cartHasItems ? (
        <div className="cartItems-empty">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="cartItems-format-main cartItems-header">
            <p>Product</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div key={e.id}>
                  <div className="cartItems-format cartItems-format-main">
                    <img src={e.image} alt={e.name} className="cartItem-product-icon" />
                    <p className="cartItem-name">{e.name}</p>
                    <p>${e.new_price}</p>
                    <div className="cartItem-qty-controls">
                      <button onClick={() => removeFromCart(e.id)}>−</button>
                      <span>{cartItems[e.id]}</span>
                      <button onClick={() => addToCart(e.id)}>+</button>
                    </div>
                    <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                    <img
                      className="cartItem-remove-icon"
                      src={remove_icon}
                      alt="Remove item"
                      onClick={() => removeAllFromCart(e.id)}
                    />
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}

          <div className="cartItems-down">
            <div className="cartItems-total">
              <h2>Cart Total</h2>
              <div className="cartItems-total-breakdown">
                <div className="cartItems-total-item">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount().toFixed(2)}</p>
                </div>
                <hr />
                <div className="cartItems-total-item">
                  <p>Shipping</p>
                  <p className="cartItem-free">Free</p>
                </div>
                <hr />
                <div className="cartItems-total-item cartItems-total-final">
                  <p>Total</p>
                  <p>${getTotalCartAmount().toFixed(2)}</p>
                </div>
              </div>
              <button className="cartItems-checkout-btn">Proceed to Checkout</button>
            </div>

            <div className="cartItems-promocode">
              <p>Have a promo code?</p>
              <div className="cartItems-promobox">
                <input type="text" placeholder="Enter promo code" />
                <button>Apply</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
