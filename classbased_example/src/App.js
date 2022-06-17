import "./App.css";
import UserFinder from "./component/UserFinder";
import UsersContext from "./store/user-context";
const Dummy_users = [
  { id: "u1", name: "julie" },
  { d: "u2", name: "manuel" },
];
function App() {
  const userContext = {
    users: Dummy_users,
  };

  return (
    <UsersContext.Provider value={userContext}>
      <div className="App">
        <UserFinder />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
