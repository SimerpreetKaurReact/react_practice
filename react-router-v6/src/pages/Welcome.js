import { Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user" element={<p>Welcome new user</p>} />
      {/* <Routes>
        <Route path="new-user" element={<p>"Welcome new user"</p>}></Route>
      </Routes> */}

      <Outlet />
    </section>
  );
};
// for nested path in v6 it already assumes we have current path so wae dont need to add /welcome rather just the nested path
// so path is relative
// links anf nested routes are realative paths
export default Welcome;
