import React from "react";
function Footer() {
  return (
    <div className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-facebook"
                href="https://www.facebook.com/roy.hero.55/"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="https://www.linkedin.com/in/mudit-roy-2baaa936/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="https://mail.google.com/"
              >
                <i className="fa fa-google"></i>
              </a>
              <a
                className="btn btn-social-icon btn-github"
                href="https://github.com/muditroy"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                className="btn btn-social-icon btn-instagram"
                href="https://www.instagram.com/mudit_roy/"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p style={{ color: "white", paddingUp: "10px" }}>
              Made in <i className="fa fa-heart"></i> by{" "}
              <strong>MUDIT ROY</strong>
            </p>
            <p style={{ color: "white" }}>
              © Copyright 2020 <strong>MUDIT ROY</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
