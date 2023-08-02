import React from "react";
import Lottie from "react-lottie";
import LoadingData from "../assets/json/Loading .json";
export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div id="loadingContainer">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </>
  );
}
