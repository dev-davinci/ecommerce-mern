import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/product/:id" component={Product} />
        <Route path="/" component={Home} exact />
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
