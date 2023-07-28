import React from 'react'
import Logo from '../assets/img/logo.png'

export default function Header() {
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
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto ">
                  <li className="nav-item">
                    <a
                      className="nav-link fw-bold fs-5 text-white hovernav"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link fw-bold fs-5 text-white hovernav"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link fw-bold fs-5 text-white hovernav"
                      href="#"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold fs-5 text-white hovernav">
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
