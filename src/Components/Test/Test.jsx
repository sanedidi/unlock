import React from "react";
import PropTypes from "prop-types";
import "./Test.scss"; // Подключите свои стили

const Test = ({ titleTest, descriptionTest, itemsTest }) => {
  return (
    <section className="test">
      <div className="container">
        <div className="test__wrapper">
          <div className="test__top">
            <div className="test__content">
              <h2 className="test__title">{titleTest}</h2>
              <p className="test__text">{descriptionTest}</p>
            </div>
            <div className="test__btn">
              <button>View All</button>
            </div>
          </div>
          <div className="test__cards">
            {itemsTest.map((item, index) => (
              <div className="test__card" key={index}>
                <div className="test__card-top">
                  <p>{item.text}</p>
                </div>
                <div className="test__card-btm">
                <div className="test__user">
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                </div>
                <div className="sub__btn test__btn">
                <button>Read Full Story</button>
                </div>
                </div>
                {/* MAP */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Test.propTypes = {
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

export default Test;
