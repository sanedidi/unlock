import React from "react";
import "./index.css";

// COMPONENTS
import PreHeader from "./Components/PreHeader/PreHeader";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Benefits from "./Components/Benefits/Benefits";
import Course from "./Components/Course/Course";
import Test from "./Components/Test/Test";
import Pricing from "./Components/Pricing/Pricing";
// COMPONENTS END

// IMAGES
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import card5 from "./assets/card5.png";
import card6 from "./assets/card6.png";
import pers1 from "./assets/pers1.png";
import pers2 from "./assets/pers2.png";
import pers3 from "./assets/pers3.png";
import pers4 from "./assets/pers4.png";
// IMAGES END
const App = () => {
  const data = {
    title: "Our Courses",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
    items: [
      {
        img: card1,
        title: "Web Design Fundamentals",
        text: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
        btn1: "4 Weeks",
        btn2: "Beginner",
        auth: "By John Smith",
      },
      {
        img: card2,
        title: "UI/UX Design",
        text: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
        btn1: "6 Weeks",
        btn2: "Intermediate",
        auth: "By Emily Johnson",
      },
      {
        img: card3,
        title: "Graphic Design for Beginners",
        text: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
        btn1: "8 Weeks",
        btn2: "Intermediate",
        auth: "By David Brown",
      },
      {
        img: card4,
        title: "Mobile App Development",
        text: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin. ",
        btn1: "10 Weeks",
        btn2: "Beginner",
        auth: "By Sarah Thompson",
      },
      {
        img: card5,
        title: "Front-End Web Development",
        text: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
        btn1: "10 Weeks",
        btn2: "Intermediate",
        auth: "By Michael Adams",
      },
      {
        img: card6,
        title: "Advanced JavaScript",
        text: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
        btn1: "6 Weeks",
        btn2: "Advance",
        auth: "By Jennifer Wilson",
      },
    ],
    titleTest: "Our Testimonials",
    descriptionTest:
      "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
    itemsTest: [
      {
        img: pers1,
        name: "Sarah L",
        text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      },
      {
        img: pers2,
        name: "Jason M",
        text: "The UI/UX design course exceeded my expectations. The instructors expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      },
      {
        img: pers3,
        name: "Emily R",
        text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
      },
      {
        img: pers4,
        title: "Michael K",
        text: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
      },
    ],
  };

  return (
    <>
      <PreHeader />
      <Header />
      <Hero />
      <Companies />
      <Benefits />
      <Course {...data} />
      <Test {...data} />
      <Pricing {...data} />
    </>
  );
};

export default App;
