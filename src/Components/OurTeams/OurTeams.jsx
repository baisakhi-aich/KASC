import React from 'react';
import "./OurTeams.css";
import demoman1 from "../../assets/alexdas.jpg";
import demoman2 from "../../assets/RANJAN_DAS.jpg";

const OurTeams = () => {
  return (
    <div className="quote-container" id='advisors'>
      
      <h2>Director's & Chief Advisor's Message</h2>

      {/* Director's Message */}
      <div className="quote-item">

        <div className="quote-image-wrapper">
          <img
            src={demoman1}
            alt="Director"
            className="quote-image"
          />
        </div>
        <div className="quote-text">
          <blockquote>
            Welcome to the Kalinga Academy of Civil Services (KACS), a premier Civil Services Coaching Institute with Library facility, located in the capital city of Bhubaneswar, Odisha.
            As the Director of KACS, it is my privilege to extend a warm welcome to all those who aspire to embark on a journey of excellence and service in the realm of civil service. Our institution stands at the forefront of shaping the next generation of public servants, and I am honoured to lead this endeavour.

            In today's fast-paced and dynamic world, the role of civil servants carries unprecedented responsibilities. With technological advancements, demographic shifts, and global interconnectedness, the challenges are manifold, but so are the opportunities. It is our duty to ensure that the graduates of our State are prepared to meet these challenges with resilience, innovation, and a steadfast commitment to the public good.

            At KACS, we are deeply committed to nurturing the talents and capabilities of aspiring civil servants, particularly focusing on poor rural talents of Odisha who may face barriers to accessing coaching in larger cities due to financial constraints. Through our comprehensive academic programs, personalized mentoring, and exposure to real-world challenges, we aim to cultivate a cadre of professionals who are not only competent but also imbued with a strong sense of purpose and integrity.

            Our institute prides itself on fostering an environment of inclusivity, collaboration, and intellectual curiosity. Our esteemed faculty members are experts in their respective fields, dedicated to guiding the academic and professional growth of our students. Their mentorship, combined with meticulously designed courses, has helped numerous students succeed in Civil Services such as OPSC -2021.

            I invite you to explore the diverse range of programs and resources that KACS has to offer. Whether you are a recent graduate seeking to launch your career in public service or a seasoned professional looking to enhance your skills, we have tailored offerings to meet your needs.

            Join us on this transformative journey, where you will not only gain knowledge and expertise but also forge lifelong connections and make a meaningful difference in the society. Together, let us strive towards excellence and service in the noble endeavour of civil service.
          </blockquote>
          <p>—Er. Alexzandar Das,Director(KACS)</p>
        </div>
      </div>

      {/* Chief Advisor's Message */}
      <div className="quote-item">
        <div className="quote-image-wrapper">
          <img
            src={demoman2}
            alt="Chief Advisor"
            className="quote-image"
          />
        </div>
        <div className="quote-text">
          <blockquote>
            Message from Chief Advisor, KACS Shri Ranjan Kumar Das, IAS (Retd)
            As the Chief Advisor of Kalinga Academy of Civil Services (KACS), I am immensely proud to be a part of this remarkable institution which is a premier institution for civil services coaching in Odisha. The Institute has registered an extraordinary milestone by delivering 92 successful candidates in the Odisha Civil Services Exam 2022, within a short period, since its inception. This outstanding accomplishment reflects the visionary leadership of its Director, Shri Alexzandar Das, the steadfast support of the Chairman, KGI, and the relentless dedication of the entire KACS team.

            The success of our students is a testament to the collaborative efforts and the high-quality guidance provided by our faculty and mentors. I am confident that KACS will continue to grow and achieve greater heights in the coming days, shaping the aspirations of many more young minds and contributing meaningfully to society.
          </blockquote>
          <p>— Shri Ranjan Kumar Das, IAS (Retd) Chief Advisor, (KACS)

          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;

