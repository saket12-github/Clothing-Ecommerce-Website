import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { Item } from "../Components/Item/Item";

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const categoryProducts = all_product.filter(
    (item) => item.category === props.category
  );

  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner} alt={`${props.category} banner`} />

      <div className="shopCategory-indexSort">
        <p>
          Showing <span>{categoryProducts.length}</span> products in{" "}
          <span style={{ textTransform: "capitalize" }}>{props.category}</span>
        </p>
      </div>

      <div className="shopCategory-products">
        {categoryProducts.map((item) => (
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
