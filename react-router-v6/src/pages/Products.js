import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const Navigate = useNavigate();
  Navigate("/welcome", { replace: true });
  Navigate(-1);
  //going ot the previous page
  // use the above navigate to navigat on some action
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
