import { Navigate, Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to={"/welcome"} />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>"Welcome new user"</p>}></Route>
          </Route>

          <Route path="/products" exact element={<Products />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}
// directly add nested routes in route inapp
//v6 looks for the best match instead of the first match
// for starts with behaviour use *
///welcome/* for starts wirh welcome so it wont find an exact match but starts with welcome , and we can add nested routes
export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
