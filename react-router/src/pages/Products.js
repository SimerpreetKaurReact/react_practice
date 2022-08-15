import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <h1>ProductDetail</h1>
      <ul>
        <Link to={`./products/p1`}>Product 1 </Link>
        <Link to={`./products/p2`}>Product 2 </Link>

        <Link to={`./products/p3`}>Product 3 </Link>
      </ul>
    </>
  );
}

export default Products;
