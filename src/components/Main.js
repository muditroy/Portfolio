import React from "react";
import Home from "./Home";
import About from "./Aboutus";
import Skills from "./Skills";
import Contact from "./Contact";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Main() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <switch>
          <Route path="/home" component={Home} />
          <Route exact path="/aboutus" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </switch>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Main;
