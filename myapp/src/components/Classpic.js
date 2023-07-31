import React from "react";
import ClassPics from "../assets/img/classPics.jpg";

export default function Classpic() {
  return (
    <>
      <div className="container-fluid classPic d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center py-5">
          <img
            className="img-fluid rounded-5 classPicSize "
            src={ClassPics}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
