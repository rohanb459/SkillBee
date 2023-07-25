import React from "react";
import "./styles.css";
const HeroBanner = () => {
  return (
    <div className="container">
      <div className="left-half">
        <p className="key">22376</p>
        <div className="left-upper">
          <div className="heading">Explore the nightlife of your city </div>

          <div className="some-text">Outdoor & Sporting Goods Company</div>

          <button className="explore-button">
            <div className="inside-button">
              <div className="button-text">EXPLORE MORE </div>
              <div className="button-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="8"
                  viewBox="0 0 45 8"
                  fill="none"
                >
                  <path
                    d="M44.8163 4.35355C45.0116 4.15829 45.0116 3.84171 44.8163 3.64645L41.6343 0.464466C41.4391 0.269204 41.1225 0.269204 40.9272 0.464466C40.732 0.659728 40.732 0.976311 40.9272 1.17157L43.7557 4L40.9272 6.82843C40.732 7.02369 40.732 7.34027 40.9272 7.53553C41.1225 7.7308 41.4391 7.7308 41.6343 7.53553L44.8163 4.35355ZM0.574341 4.5H44.4628V3.5H0.574341V4.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </button>

          <div className="complimentary-text">
            We have more special goods for you🚀
          </div>

          <div className="digits">
            <div>
              <p className="digit-upper-text">More than</p>
              <p className="digit-value">50+</p>
              <p className="digit-lower-text">adventure product</p>
            </div>

            <div>
              <p className="digit-upper-text">More than</p>
              <p className="digit-value">75+</p>
              <p className="digit-lower-text">OUTLET IN INDONESIA</p>
            </div>
          </div>
        </div>

        <div className="left-lower">
          <div className="icons-container">
            <div className="icon-inside-container">
              <div className="lower-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M5 21.25H36.25"
                    stroke="white"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 41.25H20"
                    stroke="white"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.25 41.25H36.25"
                    stroke="white"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M55 35.075V40.275C55 49.05 52.775 51.25 43.9 51.25H16.1C7.225 51.25 5 49.05 5 40.275V19.725C5 10.95 7.225 8.75 16.1 8.75H36.25"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M50 23.75V8.75L55 13.75"
                    stroke="#D93A31"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M50 8.75L45 13.75"
                    stroke="#D93A31"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="icons-text">
                <p className="icon-type">accessibility</p>
                <p className="icon-value">0.32</p>
              </div>
            </div>
            <div className="icon-inside-container">
              <div className="lower-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M26.2252 5.57515L13.7502 10.2751C10.8752 11.3501 8.52521 14.7501 8.52521 17.8001V36.3751C8.52521 39.3251 10.4752 43.2001 12.8502 44.9751L23.6002 53.0001C27.1252 55.6501 32.9252 55.6501 36.4502 53.0001L47.2002 44.9751C49.5752 43.2001 51.5252 39.3251 51.5252 36.3751V17.8001C51.5252 14.7251 49.1752 11.3251 46.3002 10.2501L33.8252 5.57515C31.7002 4.80015 28.3002 4.80015 26.2252 5.57515Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.6247 29.6752L26.6497 33.7002L37.3997 22.9502"
                    stroke="#D93A31"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div className="icons-text">
                <p className="icon-type">type</p>
                <p className="icon-value">social</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-half">
        <div className="price">price</div>
        <div className="photo-collage">photos</div>
      </div>
    </div>
  );
};

export default HeroBanner;
