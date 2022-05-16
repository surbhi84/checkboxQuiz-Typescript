import React from "react";
import "./loader.css";
export const Loader = () => {
  return (
    <div className="flex-row flex-center App-logo">
      <img
        src="/assets/icon/box.svg"
        alt="Profile icon"
        className="logo-icon"
      />

      <div className="flex-row">
        <h1 className="marg-un logo">check</h1>
        <h1 className="marg-un logo1">Box</h1>
      </div>
    </div>
  );
};
