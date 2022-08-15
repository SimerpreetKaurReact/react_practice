import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import DUMMY_PRODUCTS from "../../utils/dummy-products.js";

const Products = (props) => {
  const [productList, setProductList] = useState(DUMMY_PRODUCTS.products);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {console.log(productList)}
        {productList?.map((ele) => (
          <ProductItem
            key={ele.id}
            id={ele.id}
            title={ele.title}
            price={ele.price}
            description={ele.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
