import React, { useContext } from 'react';
import "./RelatedProducts.css";
import { Item } from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

export const RelatedProducts = ({ category, currentId }) => {
  const { all_product } = useContext(ShopContext);

  const related = all_product
    .filter((item) => item.category === category && item.id !== currentId)
    .slice(0, 4);

  return (
    <div className="relatedProducts">
      <h2>Related Products</h2>
      <hr />
      <div className="relatedProducts-grid">
        {related.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};
