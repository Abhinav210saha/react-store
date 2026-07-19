import React from "react";

function ProductCard(props) {
  console.log("props called");
  return (
    <>
      <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>{props.category}</p>
        <p>{props.rating}</p>
        {props.inStock && <p>Fast Delivery</p>}
        <button
          style={{
            cursor: "pointer",  
          }}
          disabled={!props.inStock}
          onClick={()=>props.onAddToCart(props.id)}
        >
          {props.isAdded ? " Remove" : "Add to Cart"}
        </button>
      </div>
    </>
  );
}

export default ProductCard;
