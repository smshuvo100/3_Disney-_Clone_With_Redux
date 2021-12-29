import React from "react";
import "../styleComponents/Header.css";
import { Link, useNavigate } from "react-router-dom";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector(selectUser);
  let navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="header">
      <nav className="header_nav">
        <Link to="/" className="header__logo">
          <img src="/images/logo.svg" alt="" />
        </Link>

        {!user ? (
          <>
            <a href="/" onClick={handleAuth} className="header__Login">
              Login
            </a>
          </>
        ) : (
          <>
            <div className="header__navMenu">
              <Link to="/home">
                <img src="/images/home-icon.svg" alt="HOME" />
                <span>HOME</span>
              </Link>
              <a href="/">
                <img src="/images/search-icon.svg" alt="SEARCH" />
                <span>SEARCH</span>
              </a>
              <a href="/">
                <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                <span>WATCHLIST</span>
              </a>
              <a href="/">
                <img src="/images/original-icon.svg" alt="ORIGINALS" />
                <span>ORIGINALS</span>
              </a>
              <a href="/">
                <img src="/images/movie-icon.svg" alt="MOVIES" />
                <span>MOVIES</span>
              </a>
              <a href="/">
                <img src="/images/series-icon.svg" alt="SERIES" />
                <span>SERIES</span>
              </a>
            </div>
            <div className="header__signOut">
              <img src={user.photoURL} alt="" />
              <div
                onClick={() => {
                  //logout and redirect to home
                  const auth = getAuth();
                  signOut(auth);
                  navigate("/");
                }}
                className="header__dropDown"
              >
                <span>Sign out</span>
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}

export default Header;
