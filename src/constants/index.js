import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am Prashik Ahire, a dedicated and innovative full stack developer currently in my 4th year of BE in Electronics and Telecommunication. My journey in technology has led me to master the MERN stack, along with proficiency in Bootstrap, Tailwind CSS, and SQL. My passion lies in crafting robust and scalable web applications that provide exceptional user experiences. With a blend of technical knowledge and creative problem-solving, I aim to leverage my expertise to drive business growth and bring innovative solutions to life.`;

export const ABOUT_TEXT = `I am Prashik Ahire, currently in my 4th year of BE in the Electronics and Telecommunication department at Pune Institute of Computer Technology, Pune. Hailing from Nashik, I have developed a strong passion for technology and web development over the years. As a full stack developer, I specialize in the MERN stack and have honed my skills in Bootstrap, Tailwind CSS, and SQL.Beyond coding, I have a keen interest in drawing, chess, and cricket, which help me stay creative and sharp. My goal is to leverage my technical expertise and creative problem-solving skills to deliver innovative solutions that drive business growth and provide exceptional user experiences. I thrive in collaborative environments and am always eager to learn and adapt to new challenges`;

export const EXPERIENCES = [
  {
    year: "2021-2025",
    role: "Bachelor of Engineering Electronics and Telecommunication",
    description: `Pune Institute of Computer Technology, University of Pune`,
  },
  {
    year: "2019-2021",
    role: "Higher Secondary (HSC)",
    description: `Global Junior College, Nashik`,
  },
  {
    year: "2019",
    role: "Secondary (SSC)",
    description: `Abhinav Adarsh High school, Nashik`,
  },

];

export const PROJECTS = [
  {
    title: "INotebook - A Modern Note-Taking Platform",
    image: project1,
    description:
      "INotebook is a sophisticated web application developed using the MERN technology stack. It simplifies the art of note-taking. Easily create, edit, and delete notes with a user-friendly interface.",
    technologies: ["React", "Node.js", "Express.js","MongoDB"],
  },
  {
    title: "NewsNow - News Website",
    image: project2,
    description:
      "NewsNow is a dynamic and responsive web application built using React.js and Bootstrap 5.This project leverages the power of a third-party news API to fetch real-time news data, categorizing it neatly for users to explore based on their interests.",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Textutils - Text Editing Platform",
    image: project4,
    description:
      "Textutils is a versatile web application, meticulously crafted using React.js and Bootstrap 5.Text Operations: remove extra space , convert to lowercase, convert to uppercase, copy text, cleat text..",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "+918830338534",
  email: "prashikahire2003@gmail.com",
};
