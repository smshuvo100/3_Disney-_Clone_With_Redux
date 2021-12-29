import React from "react";
import "../styleComponents/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__content">
          <div className="login__cta">
            <img
              className="login__img1"
              src="/images/cta-logo-one.svg"
              alt=""
            />
            <button>GET ALL THERE</button>
            <p>
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 03/26/21, the price of
              Disney+ and The Disney Bundle will increase by $1.
            </p>

            <img
              className="login__img2"
              src="/images/cta-logo-two.png"
              alt=""
            />
            <p></p>
          </div>
          <div className="login__bg" />
        </div>
      </div>
    </div>
  );
}

export default Login;
