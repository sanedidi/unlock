import React, { useState } from "react";
import "./Qa.scss";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const Qa = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  const handleChange1 = () => {
    setExpanded1(!expanded1);
  };

  const handleChange2 = () => {
    setExpanded2(!expanded2);
  };

  const handleChange3 = () => {
    setExpanded3(!expanded3);
  };

  const handleChange4 = () => {
    setExpanded4(!expanded4);
  };

  return (
    <section className="qa">
      <div className="container">
        <div className="qa__wrapper">
          <div className="qa__left">
            <div className="qa__left__content">
              <h2 className="glob__title qa__title">Frequently Asked Questions</h2>
              <p className="glob__text">
                Still you have any questions? Contact our Team via
                support@skillbridge.com
              </p>
            </div>
            <button className="glob__btn">See All FAQ’s</button>
          </div>
          <div className="qa__right">
            <Accordion expanded={expanded1} onChange={handleChange1}>
              <AccordionSummary
                className="qa__top"
                id="panel-header1"
                aria-controls="panel-content1"
              >
                <p className="qa__acc">
                  Can I enroll in multiple courses at once?
                </p>
                {expanded1 ? (

                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="6" fill="#FFF4E6" />
                    <path
                      d="M16.7574 27.2426L22 22M27.2426 16.7574L22 22M22 22L16.7574 16.7574M22 22L27.2426 27.2426"
                      stroke="#262626"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                    <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="6" fill="#FFF4E6" />
                    <path
                      d="M16 22H22M28 22H22M22 22V16M22 22V28"
                      stroke="#262626"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </AccordionSummary>
              <AccordionDetails>
                Absolutely! You can enroll in multiple courses simultaneously
                and access them at your convenience.
              </AccordionDetails>
              <AccordionDetails className="qa__bg">
                <p>
                  Enrollment Process for Different Courses{" "}
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded2} onChange={handleChange2}>
              <AccordionSummary
                className="qa__top"
                id="panel-header2"
                aria-controls="panel-content2"
              >
                <p className="qa__acc">
                  What kind of support can I expect from instructors?
                </p>
                {expanded2 ? (
                 <svg
                 width="44"
                 height="44"
                 viewBox="0 0 44 44"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <rect width="44" height="44" rx="6" fill="#FFF4E6" />
                 <path
                   d="M16.7574 27.2426L22 22M27.2426 16.7574L22 22M22 22L16.7574 16.7574M22 22L27.2426 27.2426"
                   stroke="#262626"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>
             ) : (
                 <svg
                 width="44"
                 height="44"
                 viewBox="0 0 44 44"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <rect width="44" height="44" rx="6" fill="#FFF4E6" />
                 <path
                   d="M16 22H22M28 22H22M22 22V16M22 22V28"
                   stroke="#262626"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>
                )}
              </AccordionSummary>
              <AccordionDetails>
                Absolutely! You can enroll in multiple courses simultaneously
                and access them at your convenience.
              </AccordionDetails>
              <AccordionDetails className="qa__bg">
                <p>
                  Enrollment Process for Different Courses{" "}
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded3} onChange={handleChange3}>
              <AccordionSummary
                className="qa__top"
                id="panel-header3"
                aria-controls="panel-content3"
              >
                <p className="qa__acc">
                  Are the courses self-paced or do they have specific start and end dates?
                </p>
                {expanded3 ? (
                  <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="44" height="44" rx="6" fill="#FFF4E6" />
                  <path
                    d="M16.7574 27.2426L22 22M27.2426 16.7574L22 22M22 22L16.7574 16.7574M22 22L27.2426 27.2426"
                    stroke="#262626"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                  <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="44" height="44" rx="6" fill="#FFF4E6" />
                  <path
                    d="M16 22H22M28 22H22M22 22V16M22 22V28"
                    stroke="#262626"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                )}
              </AccordionSummary>
              <AccordionDetails>
                Absolutely! You can enroll in multiple courses simultaneously
                and access them at your convenience.
              </AccordionDetails>
              <AccordionDetails className="qa__bg">
                <p>
                  Enrollment Process for Different Courses{" "}
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded4} onChange={handleChange4}>
              <AccordionSummary
                className="qa__top"
                id="panel-header4"
                aria-controls="panel-content4"
              >
                <p className="qa__acc">
                  Are there any prerequisites for the courses?
                </p>
                {expanded4 ? (
                 <svg
                 width="44"
                 height="44"
                 viewBox="0 0 44 44"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <rect width="44" height="44" rx="6" fill="#FFF4E6" />
                 <path
                   d="M16.7574 27.2426L22 22M27.2426 16.7574L22 22M22 22L16.7574 16.7574M22 22L27.2426 27.2426"
                   stroke="#262626"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>
             ) : (
                 <svg
                 width="44"
                 height="44"
                 viewBox="0 0 44 44"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <rect width="44" height="44" rx="6" fill="#FFF4E6" />
                 <path
                   d="M16 22H22M28 22H22M22 22V16M22 22V28"
                   stroke="#262626"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>
                )}
              </AccordionSummary>
              <AccordionDetails>
                Absolutely! You can enroll in multiple courses simultaneously
                and access them at your convenience.
              </AccordionDetails>
              <AccordionDetails className="qa__bg">
                <p>
                  Enrollment Process for Different Courses{" "}
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qa;
