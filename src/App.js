import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./component/Home.jsx";
import BookDetails from "./component/BookDetails.jsx";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/books/:id"
          render={(props) => <BookDetails {...props} />}
        />
      </Switch>
    </div>
  );
};

export default App;
