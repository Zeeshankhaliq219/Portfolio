import React from "react";
import Header from "./Header";
import { TypeAnimation } from "react-type-animation";
import MYPIC from "../assets/img/my_pic.jpg";
import MYPICBORDER from "../assets/img/rounded_border.png";
import ELEMENT1 from "../assets/img/hero-element-1.png";
import ELEMENT2 from "../assets/img/hero-element-2.png";
import ELEMENT3 from "../assets/img/hero-element-3.png";
import ELEMENT4 from "../assets/img/hero-element-4.png";
import ELEMENT5 from "../assets/img/hero-element-5.png";

export default function Hero() {
  return (
    <>
      <div className="hero pb-5">
        <Header />
        <div className="container py-md-5">
          <div className="row d-flex flex-column d-md-flex flex-md-row justify-content-center align-items-center py-md-5">
            <div className="col-12 col-md-5 text-white d-flex flex-column justify-content-center">
              <p className="fs-2 fw-bold">Hello,I'm</p>
              <h1 className="fw-bolder textSize">
                Zeeshan <span className="text-primary">Khaliq</span>
              </h1>
              <div className="d-flex align-items-center">
                <p className="fs-2 pt-3">A_ </p>
                <TypeAnimation
                  className="fw-bold fs-3"
                  sequence={[
                    " Web Developer",
                    500,
                    " Front-end Developer",
                    500,
                    " React JS Specialist",
                    500,
                  ]}
                  style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
              </div>
              <div className="row">
                <div className="col">
                  <a href="#contact" className="text-decoration-none d-inline-block fs-4 fw-bold hoverhire text-white bg-primary border-0 px-4 px-md-5 py-2 rounded-3">
                    HIRE ME
                  </a>
                </div>
                <div className="col d-flex align-items-center">
                  <a
                    href="#Portfolio"
                    className="fs-5 fw-bold text-decoration-none hoverview text-primary  border-0 "
                  >
                    VIEW MY PORTFOLIO
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 p-0 ms-lg-2 me-md-3 d-flex d-md-block justify-content-center align-items-center">
              <div className="row mt-5 mt-md-0 mx-auto d-flex">
                <div className="col col-sm-5 position-relative">
                  <div className="">
                    <img
                      className="position-absolute borderpic"
                      src={MYPICBORDER}
                      alt=""
                    />
                    <img
                      className="img-fluid rounded-circle mypic"
                      src={MYPIC}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-7 p-0 position-relative">
                  <div className="position-absolute plusposition">
                    <div className="row d-flex flex-column mt-5 mt-md-0 p-0 mx-auto">
                      <div className="col index mt-md-5 m-0 p-0">
                        <div className="bg-white py-4 size rounded-3">
                          <i className="fa-solid fa-plus fs-2 text-primary d-inline-block"></i>{" "}
                          <span className="fs-5 fw-bolder ps-1">
                            ATTENTION TO-DETAIL
                          </span>
                        </div>
                      </div>
                      <div className="col index mt-md-5 m-0 my-3 my-md-0 p-0">
                        <div className="bg-white py-4 size px-3 rounded-3">
                          <i className="fa-solid fa-plus fs-2 text-primary d-inline-block"></i>{" "}
                          <span className="fs-5 fw-bolder ps-1">
                            TEAM ORIENTED
                          </span>
                        </div>
                      </div>
                      <div className="col index mt-md-5 m-0 p-0">
                        <div className="bg-white py-4 size px-3 rounded-3">
                          <i className="fa-solid fa-plus fs-2 text-primary d-inline-block"></i>{" "}
                          <span className="fs-5 fw-bolder ps-1">
                            RESPONSIVE DESIGN
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="elements d-none d-lg-block">
          <img
            className="position-absolute element1"
            src={ELEMENT1}
            alt="ELEMENT1"
          />
          <img
            className="position-absolute element2"
            src={ELEMENT2}
            alt="ELEMENT2"
          />
          <img
            className="position-absolute element3"
            src={ELEMENT3}
            alt="ELEMENT3"
          />
          <img
            className="position-absolute element4"
            src={ELEMENT4}
            alt="ELEMENT4"
          />
          <img
            className="position-absolute element5"
            src={ELEMENT5}
            alt="ELEMENT5"
          />
          <img
            className="position-absolute element6"
            src={ELEMENT3}
            alt="ELEMENT2"
          />
          <img
            className="position-absolute element7"
            src={ELEMENT3}
            alt="ELEMENT2"
          />
        </div>
      </div>
    </>
  );
}
