import React from "react";
import Layout from "./layout/Layout";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CreateImg, Home } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-img" element={<CreateImg />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
