// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={6}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={6}
                  country={"in"}
                  category={"business"}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={6}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={6}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={6}
                  country={"in"}
                  category={"health"}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={6}
                  country={"in"}
                  category={"science"}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={6}
                  country={"in"}
                  category={"sports"}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={6}
                  country={"in"}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
