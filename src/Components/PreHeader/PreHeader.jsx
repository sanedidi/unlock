import React from "react";
import "./PreHeader.scss";

const PreHeader = () => {
  return (
    <section className="preheader">
      <div className="container">
        <div className="preheader__wrapper">
          <p className="preheader__text">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </p>
          <div className="preheader__icon">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5 10.5C3.5 10.0858 3.83579 9.75 4.25 9.75L14.8879 9.75L10.7302 5.79062C10.4316 5.50353 10.4223 5.02875 10.7094 4.73017C10.9965 4.43159 11.4713 4.42228 11.7698 4.70937L17.2698 9.95937C17.4169 10.1008 17.5 10.296 17.5 10.5C17.5 10.704 17.4169 10.8992 17.2698 11.0406L11.7698 16.2906C11.4713 16.5777 10.9965 16.5684 10.7094 16.2698C10.4223 15.9713 10.4316 15.4965 10.7302 15.2094L14.8879 11.25L4.25 11.25C3.83579 11.25 3.5 10.9142 3.5 10.5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreHeader;
