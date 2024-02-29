import React from "react";
import "./Benefits.scss";
const Benefits = () => {
  const card = [
    {
      num: "01",
      title: "Flexible Learning Schedule",
      text: "Fit your coursework around your existing commitments and obligations.",
    },
    {
      num: "02",
      title: "Expert Instruction",
      text: "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      num: "03",
      title: "Diverse Course Offerings",
      text: "Explore a wide range of design and development courses covering various topics.",
    },
    {
      num: "04",
      title: "Updated Curriculum",
      text: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      num: "05",
      title: "Practical Projects and Assignments",
      text: "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      num: "06",
      title: "Interactive Learning Environment",
      text: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__wrapper">
          <div className="benefits__top">
            <div className="benefits__content">
              <h2 className="benefits__title">Benefits</h2>
              <p className="benefits__text">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
            </div>
            <div className="benefits__btn">
              <button>View All</button>
            </div>
          </div>
            <div className="benefits__cards">
              {card.map((el) => {
                return (
                  <div className="benefits__card">
                    <div className="benefits__num">
                      <p>{el.num}</p>
                    </div>
                    <div className="benefits__card-content">
                      <h2 className="benefits__card-title">{el.title}</h2>
                      <p className="benefits__card-text">{el.text}</p>
                    </div>
                    <div className="benefits__arrow">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.78557 19.2144C7.16633 19.5952 7.78367 19.5952 8.16443 19.2144L17.55 9.82886V17.225C17.55 17.7635 17.9865 18.2 18.525 18.2C19.0635 18.2 19.5 17.7635 19.5 17.225V7.475C19.5 6.93652 19.0635 6.5 18.525 6.5H8.775C8.23652 6.5 7.8 6.93652 7.8 7.475C7.8 8.01348 8.23652 8.45 8.775 8.45H16.1711L6.78557 17.8356C6.40481 18.2163 6.40481 18.8337 6.78557 19.2144Z"
                          fill="#FF9500"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
