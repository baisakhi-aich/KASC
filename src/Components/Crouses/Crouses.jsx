import React from "react";
import "./Crouses.css"; // Correct path to the CSS file
import bookImage from "../../assets/book3.jpeg"; // Correct path to the image file

const Crouses = () => {
  const courses = [
    {
      title: "Online Courses",
      description: "Join our online courses and study from the comforts of your home.",
      imgSrc: bookImage,
      btn1: "Course Details",
      btn2: "Call Us",
      phoneNumber: "+919776462222",
      bgColor: "#1abc9c",
    },
    {
      title: "Offline Courses",
      description: "Join our offline courses and study in a classroom environment.",
      imgSrc: bookImage,
      btn1: "Course Details",
      btn2: "Call Us",
      phoneNumber: "+919776462222",
      bgColor: "#e67e22",
    },
    {
      title: "Prelims Test Series",
      description: "Join our prelims test series and build your confidence for the exam.",
      imgSrc: bookImage,
      btn1: "Course Details",
      btn2: "Call Us",
      phoneNumber: "+919776462222",
      bgColor: "#3498db",
    },
    {
      title: "Mains Test Series",
      description: "Join our mains test series and discussion classes with professors.",
      imgSrc: bookImage,
      btn1: "Course Details",
      btn2: "Call Us",
      phoneNumber: "+919776462222",
      bgColor: "#e74c3c",
    },
  ];

  return (
    <div className="courses-container">
      {courses.map((course, index) => (
        <div
          key={index}
          className="course-card"
          style={{ backgroundColor: course.bgColor }}
        >
          <h3>{course.title}</h3>
          <div className="course-image">
            <img src={course.imgSrc} alt={course.title} />
          </div>
          <p>{course.description}</p>
          <div className="buttons">
            <button className="btn">{course.btn1}</button>
            <a href={`tel:${course.phoneNumber}`} className="btn">
              <span className="call-icon">📞</span> {course.btn2}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Crouses;
