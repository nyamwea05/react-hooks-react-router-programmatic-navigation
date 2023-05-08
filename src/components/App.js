import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import { useHistory, Redirect } from "react-router-dom";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  function handleLogin() {
    // perform login logic here
    setIsLoggedIn(true);
    history.push("/home");
  }

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const history = useHistory();

  function handleLogout() {
    // perform logout logic here
    setIsLoggedIn(false);
    history.push("/");
  }

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
