import React from "react";
import Slider from "react-slick";

export default function Skills() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container-fluid bg-secondary py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
                <div className=" d-flex flex-column align-items-center flex-md-row justify-content-between  text-white py-5">
                  <div className="">
                    <i class="fa-brands fontsizeskill fa-html5 text-center d-block"></i>
                    <h2>HTML5</h2>
                  </div>
                  <div className="">
                    <i class="fa-brands fontsizeskill fa-css3 text-center d-block"></i>
                    <h2>CSS3</h2>
                  </div>
                  <div className="">
                    <i class="fa-brands fontsizeskill fa-js text-center d-block"></i>
                    <h2>Javascript</h2>
                  </div>
                  <div className="">
                    <i class="fa-brands fontsizeskill fa-bootstrap text-center d-block"></i>
                    <h2>BOOTSTRAP</h2>
                  </div>
                  <div className="">
                    <i class="fa-brands fontsizeskill fa-react text-center d-block"></i>
                    <h2>REACT JS</h2>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center flex-md-row justify-content-between text-white py-5">
                  <div className="">
                    <i class="fa-brands fontsizeskill fa-github text-center d-block"></i>
                    <h2>GITHUB</h2>
                  </div>
                  <div className="">
                    <i class="fa-brands fontsizeskill fa-node-js text-center d-block"></i>
                    <h2>NODE JS</h2>
                  </div>
                  <div className="">
                    <span className="text-center d-block">
                      <box-icon
                        color="white"
                        size="80px"
                        type="logo"
                        name="firebase"
                      ></box-icon>
                    </span>

                    <h2>FIREBASE</h2>
                  </div>
                  <div className="">
                    <span className="text-center d-block">
                      <box-icon
                        color="white"
                        size="80px"
                        type="logo"
                        name="mongodb"
                      ></box-icon>
                    </span>

                    <h2>MONGODB</h2>
                  </div>
                  <div className="">
                    <span className="text-center d-block">
                      <box-icon
                        color="white"
                        size="80px"
                        type="logo"
                        name="typescript"
                      ></box-icon>
                    </span>

                    <h2>TYPESCRIPT</h2>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
