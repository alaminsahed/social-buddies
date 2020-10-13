import React from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import Navbar from "./Component/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFound from "./Component/NotFound/NotFound";
import PostDetails from "./Component/PostDeatails/PostDetails";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
          <Home />
        </Route>
        <Route path="/details/:id">
          <PostDetails/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
