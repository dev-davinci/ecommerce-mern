import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/product/:id" component={Product} />
        <Route path="/cart/:id?" component={Cart} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/payment" component={Payment} />
        <Route path="/placeorder" component={PlaceOrder} />
        <Route path="/" component={Home} exact />
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
