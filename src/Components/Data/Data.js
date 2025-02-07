import clinic_lab_management from "../../Assets/Project/clinicuserpage.JPG";
import math_quizes from "../../Assets/Project/mathuserhomepage.JPG";
import clock from "../../Assets/Project/digitalclock.JPG";
import e_commerce from "../../Assets/Project/eshopping.JPG";
import shopsy_clone from "../../Assets/Project/shopsy.JPG";
import portfolio from "../../Assets/Project/portfolio.JPG";

export const Personal_Description = `
Hello! I'm Gulam Mohiuddin Ansari, an enthusiastic and skilled recent graduate
          with a BCA in Web Development, equipped with a diverse range
          of technical skills including PHP, JavaScript, And Learning MERN stack
          to Becoming full-stack web development. Eager to contribute
          to a dynamic team and database technologies (SQL, MongoDB)
          in a challenging software development role.
`


//Education data
export const EducationData = [
  {
    id: 1,
    course: "BCA Web Development",
    score: "6.51 CGPA",
    grade: "First Class",
    institute: "Veer Narmad South Gujarat University",
    description:
      "I pursued a Bachelor's degree in Web Development from Veer Narmad South Gujarat University (Surat), where I gained a strong foundation in various aspects of IT.",
  },
  {
    id: 2,
    course: "HSC",
    score: "53.07%",
    grade: "C1",
    institute: "RM&VM School, Valsad-396001",
    description:
      "I successfully completed my Higher Secondary Education (HSC) from the Gujarat State Board with a notable achievement of securing a 53.07% overall score.",
  },
  {
    id: 3,
    course: "SSC",
    score: "58.67%",
    grade: "C1",
    institute: "Bai Avabai Heigh School, Valsad-396001",
    description:
      "I successfully completed my Secondary School Certificate (SSC) from the Gujarat State Board, achieving an impressive overall percentage of 58.67%. This period of my education laid a strong foundation for my academic journey.",
  },
];


//experience data
export const Experience = [
  {
    id: 1,
    designation: "Fresher",
  }
];


// Project data with images
export const projects = [
  {
    id: 1,
    title: "Online-Appointment-System-For-Clinical-Lab",
    src: clinic_lab_management,
    git: "https://github.com/GulammohiuddinAnsari/Online-Appointment-System-For-Clinical-Lab",
    demo: null
  },
  {
    id: 2,
    title: "math_quiz_for_kids",
    src: math_quizes,
    git: "https://github.com/GulammohiuddinAnsari/math_quiz_for_kids",
    demo: null
  },
  {
    id: 3,
    title: "DigitalClock",
    src: clock,
    git: "https://github.com/GulammohiuddinAnsari/DigitalClock",
    demo: null
  },
  {
    id: 4,
    title: "E-Shopping",
    src: e_commerce,
    git: "https://github.com/GulammohiuddinAnsari/E-Shopping",
    demo: null
  },
  {
    id: 5,
    title: "Shopsy",
    src: shopsy_clone,
    git: "https://github.com/GulammohiuddinAnsari/Shopsy",
    demo: null
  },
  {
    id: 6,
    title: "Portfolio Website",
    src: portfolio,
    git: "https://github.com/GulammohiuddinAnsari/Portfolio",
    demo: "https://gulammohiuddinportfolio0712.netlify.app/"
  },
];