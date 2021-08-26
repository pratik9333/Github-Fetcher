import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//react-router
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//Firebase
import firebase from "firebase/app";
import "firebase/auth";

//Pages
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotfound";

//UserContext
import { UserContext } from "./Context/UserContext";

//Footer
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

import firebaseConfig from "./Config/FireBase_Config";
//init Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
