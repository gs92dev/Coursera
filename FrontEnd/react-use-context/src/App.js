import "./App.css";
import { UserProvider, useUser } from "./UserContext";
import React from "react";

const Hello = () => {
  const { user } = useUser();
  return <p>{`Hello there ${user.name}`}</p>;
};

function App() {
  const user = useUser();
  console.log(user);
  return (
    <div className="App">
      <p>Hello world</p>
      <UserProvider>
        <Hello />
        <Hello />
      </UserProvider>
    </div>
  );
}
const Root = () => {
  return (
    <>
      <App />
    </>
  );
};
export default Root;
