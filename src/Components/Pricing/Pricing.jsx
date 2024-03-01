import React from "react";
import PropTypes from "prop-types";
import "./Pricing.scss"; 

const Pricing = ({ titleTest, descriptionTest }) => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing__wrapper">
          <div className="glob__top">
            <div className="pricing__content">
              <h2 className="glob__title">{titleTest}</h2>
              <p className="glob__text">{descriptionTest}</p>
            </div>
            <div className="pricing__btn">
              <button className="orange">Monthly</button>
              <button className="white">Yearly</button>
            </div>
          </div>
          <div className="pricing__cards">
            {/* MAP */}
          </div>
        </div>
      </div>
    </section>
  );
};

Pricing.propTypes = {
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

export default Pricing;
