import React from "react";
import PropTypes from "prop-types";
import "./Course.scss" 
const Course = ({ title, description, items }) => {
  return (
    <section className="course">
      <div className="container">
        <div className="course__wrapper">
          <div className="glob__top">
            <div className="course__content">
              <h2 className="course__title">{title}</h2>
              <p className="course__text">{description}</p>
            </div>
            <div className="course__btn">
              <button>View All</button>
            </div>
          </div>
          <div className="course__cards">
            {items.map((item, index) => (
              <div className="course__card" key={index}>
                <div className="course__img">
                  <img src={item.img} alt="" />
                </div>
                <div className="course__mid">
                  <div className="course__btns">
                    <button>{item.btn1}</button>
                    <button>{item.btn2}</button>
                  </div>
                  <div className="course__author">
                    <p>{item.auth}</p>
                  </div>
                </div>
                <div className="course__card-content">
                  <h2 className="course__card-title">{item.title}</h2>
                  <p className="course__card-text">{item.text}</p>
                </div>
                <div className="sub__btn">
                  <button>Get it Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Course.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      num: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Course;
