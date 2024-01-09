import React from "react";
import "../../loader.styles.css";
import loadingGif from "../../assets/Coffee cup.gif";
const Loader = () => {
  return (
    <div className="text-loader font-monoton flex flex-col gap-1 items-center">
      <span>
        <img
          width={100}
          src={loadingGif}
          alt="loading..."
          className="opacity-[0.25]"
        />
      </span>
      
    </div>
  );
};

export default Loader;
