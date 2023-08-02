import React, { useState } from 'react'
import Logo from '../assets/img/logo.png'

export default function Header() {


  const [toggle , settoggle] =useState(false)

    return (
      <>
        <div className="container">
          <nav className="navbar navbar-expand-lg  bg-transparent">
            <div className="container-fluid bg-transparent">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img src={Logo} alt="logo" />
                <p className="fs-1 text-white">zkdev</p>
              </a>
              <button
                onClick={() => {
                  settoggle(!toggle)
                }}
                className="navbar-toggler toggleIcon border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded={toggle}
                aria-label="Toggle navigation"
              >
                {toggle ? (
                  <i class="fa-solid fa-xmark text-white fs-2 "></i>
                ) : (
                  <i class="fa-solid fa-bars text-white fs-2 "></i>
                )}
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto ">
                  <li className="nav-item">
                    <a
                      className="nav-link fw-bold fs-5 text-primary hovernav"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link fw-bold fs-5 text-white hovernav"
                      href="#About"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link fw-bold fs-5 text-white hovernav"
                      href="#Portfolio"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link fw-bold fs-5 text-white hovernav"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
}
