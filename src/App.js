import React from "react";
import './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Login from "./components/Header/Login/Login";
import Register from "./components/Header/Register/Register";

import Auth from "./components/Auth/Auth";
import Me from "./components/Me/Me";
import MyPost from "./components/Me/MyPost/MyPost";
import Profile from "./components/Me/Profile/Profile";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Main /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/register" element={<Register />} />

          <Route exact path="/login" element={<Login />} />

          {/* <Route exact path="/protected" element={<Auth />} /> */}

          <Route exact path="/me/*" element={<Auth display={{display: "none"}}><Me /></Auth>} />
          <Route exact path="/mypost/*" element={<Auth display={{display: "none"}}><MyPost /></Auth>} />
          <Route exact path="/profile/*" element={<Auth display={{display: "none"}}><Profile /></Auth>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
