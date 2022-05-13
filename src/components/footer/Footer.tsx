import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      {/* <!-- start of footer --> */}
      <footer className="flex-center flex-col mg-top-auto footer-space">
        {/* <!-- icon-links --> */}
        <div className="flex-center flex-col">
          Keep in touch
          <ul className="footer-list flex-center mg-xs">
            <li className="footer-link">
              <a
                href="https://www.linkedin.com/in/surbhi-kukreti-a91b0b163"
                target="blank"
                className="footer-icon"
              >
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li className="footer-link">
              <a
                href="https://github.com/surbhi84"
                target="blank"
                className="footer-icon"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="footer-link">
              <a
                href="https://twitter.com/Surbhikukreti89"
                target="blank"
                className="footer-icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="footer-link">
              <a
                href="https://medium.com/@surbhikukreti"
                target="blank"
                className="footer-icon"
              >
                <i className="fab fa-medium-m"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- end of icon-links --> */}

        <div className="flex-row">
          <p className="marg-un">© 2022 checkBox made by Surbhi Kukreti</p>
        </div>
      </footer>
      {/* <!-- end of footer --> */}
    </>
  );
};
