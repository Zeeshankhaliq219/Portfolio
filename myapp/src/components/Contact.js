import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container">
        <h1 className="text-center text-primary fw-bolder aboutText">
          Contact Me
        </h1>
        <div className="row">
          <div className="col-12 col-md-5 mt-3">
            <div>
              <div className="row">
                <div className="col-1 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-envelope ps-1 fs-1 text-primary"></i>
                </div>
                <div className="col-11">
                  <p className="p-0 m-0 fs-4 fw-bold">E-mail</p>
                  <p className="p-0 m-0 fs-5 text-wrap">
                    zeeshankhaliqofficial@gmail.com
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-1 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-location-dot ps-1 fs-1 text-primary"></i>
                </div>
                <div className="col-11">
                  <p className="p-0 m-0 fs-4 fw-bold">Location</p>
                  <p className="p-0 m-0 fs-5">Internet</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7">
            <form action="https://formspree.io/f/xpzgqrap" method="post">
              <div className="row my-4">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className="rounded-3 bg-warning ps-3">
                        <p className="m-0 ps-2 pt-2">Name</p>
                        <input
                          className="py-2 bg-warning border-0 focusNone"
                          placeholder="Enter Your Name"
                          type="text"
                          name="user_name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                      <div className="rounded-3 bg-warning ps-3">
                        <p className="m-0 ps-2 pt-2">Email</p>
                        <input
                          className="py-2 px-3 bg-warning border-0 focusNone"
                          placeholder="example@gmail.com"
                          type="email"
                          name="user_email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 my-3 bg-warning rounded-3">
                <div>
                  <p className="m-0 ms-3 mt-2">message</p>
                  <textarea
                    className="w-100 rounded-3 bg-warning border-0 focusNone ps-3"
                    name="message"
                    placeholder="Type your message here..."
                    cols="30"
                    rows="8"
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                value="Send"
                className="bg-primary text-white fs-4 fw-bold border-0 mb-3 py-2 px-2 rounded-2"
              >
                Send message
                <span>
                  <i className="fa-regular fa-paper-plane ms-2"></i>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
