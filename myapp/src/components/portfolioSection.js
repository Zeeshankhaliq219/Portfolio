import React from "react";
import PortfolioCard from "./PortfolioCard";
import { ProjectData } from "../Data/ProjectData";

export default function portfolioSection() {
  return (
    <>
      <div className="container">
        <h1 className="text-center text-primary fw-bolder aboutText">
          Portfolio
        </h1>
        <div className="row pb-4">
          {ProjectData.map((item, i) => {
            return (
              <PortfolioCard
                name={item.name}
                description={item.description}
                link={item.link}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
