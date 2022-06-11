import "./App.css";
import React from "react";
import { AppRouter } from "./Approuter/AppRouter";

export const UserContext = React.createContext();

function App() {
  const [loggedUser, setLoggedUser] = React.useState(
    localStorage.getItem("loggedUser")
      ? JSON.parse(localStorage.getItem("loggedUser"))
      : null
  );
  return (
    <UserContext.Provider value={{ user: [loggedUser, setLoggedUser] }}>
      <AppRouter />
    </UserContext.Provider>
  );
}
export default App;
