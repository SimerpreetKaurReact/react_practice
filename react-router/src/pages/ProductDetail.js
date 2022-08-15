import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  console.log(productId);
  return (
    <>
      <h1>Product detail</h1>
      <h2>{productId}</h2>
    </>
  );
}

export default ProductDetail;
