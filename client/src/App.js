import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";
import Home from "./pages/Home";
import Topics from './pages/Topics';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SecretPage from './pages/SecretPage';
import NotFound from "./pages/NotFound";
import Navbar from './components/navbar/Navbar';


export default function App() {

  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/topics" component={Topics} />
          <Route path="/about" component={About} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <PrivateRoute path="/secret" exact={true} component={SecretPage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
