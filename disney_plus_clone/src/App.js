/* 
https://disney-plus-clone-a5e5f.web.app/
*/
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Counter } from "./features/counter/Counter";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

import "./firebaseConfig";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login, logout } from "./features/userSlice";

import { useDispatch } from "react-redux";

import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {!user ? (
          <>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Detail />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
