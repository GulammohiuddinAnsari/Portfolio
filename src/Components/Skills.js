// Importing images for the technology stack logos
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import github from "../Assets/github.png";
import javascript from "../Assets/javascript.png";
import node from "../Assets/node.png";
import react from "../Assets/react.png";
import tailwind from "../Assets/tailwind.png";
import c from "../Assets/c.png";
import cpp from "../Assets/cpp.png";
import express from "../Assets/expressjs.png"
import java from "../Assets/java.png"
import mongo from "../Assets/mongodb.png"

// TechStack data containing information about each technology
const TechStack = [
  {
    id: 1,
    src: html,
    title: "HTML",
    shadow: "shadow-orange-500"
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    shadow: "shadow-sky-500"
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    shadow: "shadow-yellow-500"
  },
  {
    id: 4,
    src: github,
    title: "GitHub",
    shadow: "shadow-white"
  },
  {
    id: 5,
    src: node,
    title: "NodeJs",
    shadow: "shadow-green-500"
  },
  {
    id: 6,
    src: react,
    title: "ReactJs",
    shadow: "shadow-cyan-400"
  },
  {
    id: 7,
    src: tailwind,
    title: "Tailwind CSS",
    shadow: "shadow-cyan-600"
  },
  {
    id: 8,
    src: c,
    title: "C",
    shadow: "shadow-indigo-600"
  },
  {
    id: 9,
    src: cpp,
    title: "C++",
    shadow: "shadow-blue-600"
  },
  {
    id: 10,
    src: java,
    title: "Java",
    shadow: "shadow-red-500"
  },
  {
    id: 12,
    src: express,
    title: "Express Js",
    shadow: "shadow-white"
  },
  {
    id: 13,
    src: mongo,
    title: "MongoDb",
    shadow: "shadow-green-600"
  },
];

// Experiences component to display technology stack and experiences
const Skills = () => {
  return (
    // Div container for the Experiences section with gradient background
    <div name="Skills" className="pt-14 w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white flex flex-col justify-center items-center">
      {/* Max width container for content with padding and center alignment */}
      <div className="max-w-screen-lg mx-auto h-full py-14">
        {/* Section header with bold text and bottom border */}
        <div className="px-10 text-justify">
          <div className="flex justify-center pb-4">
            <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
              Skills
            </p>
          </div>
          {/* Introduction text for the Experiences section */}
          <p className="py-6">
            These are the technologies on which I have hands-on practice.
          </p>
        </div>

        {/* Grid layout for technology stack logos and titles */}
        <div className="w-full grid sm:grid-cols-2 md:grid-cols- text-center gap-8 py-8 px-12 sm:px-0">
          {/* Mapping through the tech stack data to generate logos and titles */}
          {TechStack.map(({ id, src, title, shadow }) => (
            <div key={id} className={`shadow-md shadow-gray-500 hover:scale-105 duration-500 py-2 rounded-lg ${shadow}`}>
              {/* Technology logo image */}
              <img src={src} alt="" className="w-24 mx-auto " />
              {/* Technology title */}
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Exporting the Experiences component as the default export
export default Skills;
