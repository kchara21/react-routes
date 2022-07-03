import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import User from "../pages/User";
import MenuConceptos from "./MenuConceptos";
import Products from "../pages/Products";
import ReactTopics from "../pages/ReactTopics";
import Topic from "../pages/Topic";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const ConceptosBasicos = () => {
  let auth;
  auth = false;

  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />

          <Route
            path="/acerca"
            element={
              <>
                <Navigate to="/about" />
              </>
            }
          />

          <Route
            path="/contacto"
            element={
              <>
                <Navigate to="/contact" />
              </>
            }
          />
          <Route path="/react/*" element={<ReactTopics />}>
            <Route path=":topic" element={<Topic />}></Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route
            path="dashboard"
            element={auth ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
      <hr />
      <h2>Conceptos Basicos</h2>

      <Router>
        <MenuConceptos />
        <Routes></Routes>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
