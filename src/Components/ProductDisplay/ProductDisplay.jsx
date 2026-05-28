import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="productDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt={product.name} />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <p>(122 reviews)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
          {product.old_price > product.new_price && (
            <div className="productdisplay-right-discount">
              {Math.round(((product.old_price - product.new_price) / product.old_price) * 100)}% OFF
            </div>
          )}
        </div>

        <div className="productdisplay-right-description">
          Made from ultra-soft, high-quality cotton blend, this item ensures
          you stay warm and comfortable throughout the day. The fabric is gentle
          on the skin, making it ideal for everyday wear.
        </div>

        <div className="productdisplay-right-size">
          <h3>Select Size</h3>
          <div className="productdisplay-right-sizes">
            {sizes.map((size) => (
              <div
                key={size}
                className={`size-option${selectedSize === size ? ' size-selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <button
          className="productdisplay-add-btn"
          onClick={() => addToCart(product.id)}
        >
          Add to Cart
        </button>

        <div className="productdisplay-right-meta">
          <p><span>Category:</span> {product.category}</p>
          <p><span>Tags:</span> Modern, Latest</p>
        </div>
      </div>
    </div>
  );
};
