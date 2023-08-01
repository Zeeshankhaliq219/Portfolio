import React from "react";
import LOGO from "../assets/img/logo.png";

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <>
      <div className="container-fluid footerBG">
        <div className="container">
          <div className="row py-5">
            <div className="col d-flex flex-column justify-content-center align-items-center">
              <div>
                <a
                  className="d-flex align-items-center text-decoration-none"
                  href="#"
                >
                  <img src={LOGO} alt="logo" />
                  <p className="fs-1 text-white">zkdev</p>
                </a>
              </div>
              <div className="py-5">
                <a target="_blank" href="https://twitter.com/zeeshankhaliq29">
                  <i class="fa-brands fa-twitter text-white fs-2 mx-3 ps-2"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/zeeshan-khaliq-front-end-developer/"
                >
                  <i class="fa-brands fa-linkedin text-white fs-2 mx-3 ps-2"></i>
                </a>
                <a target="_blank" href="https://github.com/Zeeshankhaliq219">
                  <i class="fa-brands fa-github text-white fs-2 mx-3 ps-2"></i>
                </a>
              </div>
              <div>
                <p className="text-white fs-5 text-center">
                  All rights reserved © {year}
                  <span className="fw-bolder text-primary">
                    {" "}
                    Zeeshan Khaliq
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
