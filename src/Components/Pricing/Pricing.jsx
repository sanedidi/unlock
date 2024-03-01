import React from "react";
import PropTypes from "prop-types";
import "./Pricing.scss";

const Pricing = ({ titlePric, descriptionPric, itemsPric }) => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing__wrapper">
          <div className="glob__top">
            <div className="pricing__content">
              <h2 className="glob__title">{titlePric}</h2>
              <p className="glob__text">{descriptionPric}</p>
            </div>
            <div className="pricing__btn">
              <button className="orange">Monthly</button>
              <button className="white">Yearly</button>
            </div>
          </div>
          <div className="pricing__cards">
            {itemsPric.map((el, index) => {
              return (
                <div className="pricing__card" key={index}>
                  <div className="pricing__card-top">
                    <p className="pricing__card-title">{el.btn}</p>
                    <p className="pricing__card-price">
                      <span>${el.price}</span>/month
                    </p>
                  </div>
                  <div className="pricing__box">
                    <h2 className="pricing__box-title">Available Features</h2>
                    <div className="pricing__item">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="4" fill="#FFF4E6" />
                        <path
                          fillRule="evenodd" // Заменено fill-rule на fillRule
                          clipRule="evenodd" // Заменено clip-rule на clipRule
                          d="M17.3637 7.32277C17.6272 7.5236 17.6781 7.90008 17.4773 8.16366L11.0773 16.5637C10.9724 16.7014 10.813 16.7871 10.6403 16.7987C10.4675 16.8103 10.2982 16.7467 10.1758 16.6243L6.57576 13.0243C6.34145 12.79 6.34145 12.4101 6.57576 12.1758C6.81007 11.9415 7.18997 11.9415 7.42429 12.1758L10.5388 15.2903L16.5228 7.43641C16.7236 7.17282 17.1001 7.12195 17.3637 7.32277Z"
                          fill="#262626"
                        />
                      </svg>
                      <p>{el.text1}</p>
                    </div>
                    <div className="pricing__item">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="4" fill="#FFF4E6" />
                        <path
                          fillRule="evenodd" // Заменено fill-rule на fillRule
                          clipRule="evenodd" // Заменено clip-rule на clipRule
                          d="M17.3637 7.32277C17.6272 7.5236 17.6781 7.90008 17.4773 8.16366L11.0773 16.5637C10.9724 16.7014 10.813 16.7871 10.6403 16.7987C10.4675 16.8103 10.2982 16.7467 10.1758 16.6243L6.57576 13.0243C6.34145 12.79 6.34145 12.4101 6.57576 12.1758C6.81007 11.9415 7.18997 11.9415 7.42429 12.1758L10.5388 15.2903L16.5228 7.43641C16.7236 7.17282 17.1001 7.12195 17.3637 7.32277Z"
                          fill="#262626"
                        />
                      </svg>
                      <p>{el.text2}</p>
                    </div>
                    <div className="pricing__item">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="4" fill="#FFF4E6" />
                        <path
                          fillRule="evenodd" // Заменено fill-rule на fillRule
                          clipRule="evenodd" // Заменено clip-rule на clipRule
                          d="M17.3637 7.32277C17.6272 7.5236 17.6781 7.90008 17.4773 8.16366L11.0773 16.5637C10.9724 16.7014 10.813 16.7871 10.6403 16.7987C10.4675 16.8103 10.2982 16.7467 10.1758 16.6243L6.57576 13.0243C6.34145 12.79 6.34145 12.4101 6.57576 12.1758C6.81007 11.9415 7.18997 11.9415 7.42429 12.1758L10.5388 15.2903L16.5228 7.43641C16.7236 7.17282 17.1001 7.12195 17.3637 7.32277Z"
                          fill="#262626"
                        />
                      </svg>
                      <p>{el.text3}</p>
                    </div>
                    <div className="pricing__item">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="4" fill="#FFF4E6" />
                        <path
                          fillRule="evenodd" // Заменено fill-rule на fillRule
                          clipRule="evenodd" // Заменено clip-rule на clipRule
                          d="M17.3637 7.32277C17.6272 7.5236 17.6781 7.90008 17.4773 8.16366L11.0773 16.5637C10.9724 16.7014 10.813 16.7871 10.6403 16.7987C10.4675 16.8103 10.2982 16.7467 10.1758 16.6243L6.57576 13.0243C6.34145 12.79 6.34145 12.4101 6.57576 12.1758C6.81007 11.9415 7.18997 11.9415 7.42429 12.1758L10.5388 15.2903L16.5228 7.43641C16.7236 7.17282 17.1001 7.12195 17.3637 7.32277Z"
                          fill="#262626"
                        />
                      </svg>
                      <p>{el.text4}</p>
                    </div>
                    <div className="pricing__item">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="4" fill="#FFF4E6" />
                        <path
                          fillRule="evenodd" // Заменено fill-rule на fillRule
                          clipRule="evenodd" // Заменено clip-rule на clipRule
                          d="M17.3637 7.32277C17.6272 7.5236 17.6781 7.90008 17.4773 8.16366L11.0773 16.5637C10.9724 16.7014 10.813 16.7871 10.6403 16.7987C10.4675 16.8103 10.2982 16.7467 10.1758 16.6243L6.57576 13.0243C6.34145 12.79 6.34145 12.4101 6.57576 12.1758C6.81007 11.9415 7.18997 11.9415 7.42429 12.1758L10.5388 15.2903L16.5228 7.43641C16.7236 7.17282 17.1001 7.12195 17.3637 7.32277Z"
                          fill="#262626"
                        />
                      </svg>
                      <p>{el.text5}</p>
                    </div>
                    <div className="pricing__item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.02426 4.17574C4.78995 3.94142 4.41005 3.94142 4.17574 4.17574C3.94142 4.41005 3.94142 4.78995 4.17574 5.02426L7.15147 8L4.17574 10.9757C3.94142 11.2101 3.94142 11.59 4.17574 11.8243C4.41005 12.0586 4.78995 12.0586 5.02426 11.8243L8 8.84853L10.9757 11.8243C11.2101 12.0586 11.59 12.0586 11.8243 11.8243C12.0586 11.59 12.0586 11.2101 11.8243 10.9757L8.84853 8L11.8243 5.02426C12.0586 4.78995 12.0586 4.41005 11.8243 4.17574C11.59 3.94142 11.2101 3.94142 10.9757 4.17574L8 7.15147L5.02426 4.17574Z"
                          fill="#262626"
                        />
                      </svg>

                      <p>{el.text6}</p>
                    </div>
                    <div className="pricing__item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.02426 4.17574C4.78995 3.94142 4.41005 3.94142 4.17574 4.17574C3.94142 4.41005 3.94142 4.78995 4.17574 5.02426L7.15147 8L4.17574 10.9757C3.94142 11.2101 3.94142 11.59 4.17574 11.8243C4.41005 12.0586 4.78995 12.0586 5.02426 11.8243L8 8.84853L10.9757 11.8243C11.2101 12.0586 11.59 12.0586 11.8243 11.8243C12.0586 11.59 12.0586 11.2101 11.8243 10.9757L8.84853 8L11.8243 5.02426C12.0586 4.78995 12.0586 4.41005 11.8243 4.17574C11.59 3.94142 11.2101 3.94142 10.9757 4.17574L8 7.15147L5.02426 4.17574Z"
                          fill="#262626"
                        />
                      </svg>

                      <p>{el.text7}</p>
                    </div>
                  </div>
                  <button className="pricing__card-btn">Get Started</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

Pricing.propTypes = {
  titlePric: PropTypes.string.isRequired,
  descriptionPric: PropTypes.string.isRequired,
  itemsPric: PropTypes.arrayOf(
    PropTypes.shape({
      num: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Pricing;
