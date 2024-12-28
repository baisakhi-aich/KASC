import React from "react";
import "./Crouses.css"; // Ensure the filename is correct
import one from "../../assets/onlinecls.jpg";
import two from "../../assets/offlinecls.jpg";
import three from "../../assets/mains.jpg";
import four from "../../assets/prelims.jpg"; // Correct the path if needed

const coursesData = [
  {
    id: 1,
    title: "Online Courses",
    description:
      "Join our online course and study from the comforts of your homes.",
    image: one, // Use the imported image variable
    colorClass: "classroom",
  },
  {
    id: 2,
    title: "Offline Courses",
    description:
      "Join our offline classroom batch and boost of your preparation.",
    image: two, // Use the imported image variable
    colorClass: "postal",
  },
  {
    id: 3,
    title: "Prelims Test series",
    description:
      "join our prlims test series and build your confidence for the exam.",
    image: three, // Use the imported image variable
    colorClass: "online",
  },
  {
    id: 4,
    title: "Mains Test Series",
    description:
      "join our mains test series and disussion class with prefessors.",
    image: four, // Use the imported image variable
    colorClass: "test-series",
  },
];

const Courses = () => {
  return (
    <div className="courses-container" id="courses">
      {coursesData.map((course) => (
        <div key={course.id} className={`course-card ${course.colorClass}`}>
          <h3>{course.title}</h3>
          <div className="course-image">
            <img src={course.image} alt={course.title} />
          </div>
          <p>{course.description}</p>
          <div className="course-buttons">
            <button>Course Details</button>
            <a href="tel:+919776462222">
              <button>☎Call Us</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
