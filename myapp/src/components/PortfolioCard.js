import React from "react";

export default function PortfolioCard(props) {
  let { name, description, link, img } = props;

  return (
    <div className="col-12 col-md-6 col-lg-4 mt-4 d-flex justify-content-center align-items-center overflow-hidden">
      <div
        className="card"
        style={{
          width: "22rem",
          minHeight: "30rem",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <img
          src={img}
          className="card-img-top"
          style={{ height: "14rem" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description.map((item, i) => {
              return (
                <>
                  <p className="bg-secondary d-inline-block text-white mx-1 py-1 text-nowrap px-2 rounded-3">
                    {item}
                  </p>
                </>
              );
            })}
          </p>
          <a
            target="_blank"
            href={link}
            className="btn btn-primary fs-5 fw-bold position-absolute bottom-0 mb-3 text-white "
          >
            Visit
            <span>
              <i className="fa-solid fa-arrow-trend-up ms-2"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
