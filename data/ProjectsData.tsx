import { FaFigma, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  SiCsharp,
  SiExpress,
  SiMui,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const projectsData = [
  {
    id: 1,
    image: "/assets/projects/lokal_360.webp",
    title: "Lokal 360: An Online E-Commerce Platform for Local Businesses ",
    tags: [
      { id: 1, Icon: FaReact, title: "ReactJS" },
      { id: 2, Icon: FaNodeJs, title: "NodeJS" },
      { id: 3, Icon: SiExpress, title: "ExpressJS" },
      { id: 4, Icon: SiMui, title: "Material UI" },
    ],
  },

  {
    id: 2,
    image: "/assets/projects/lokal_360_figma.webp",
    title: "Lokal 360 (Mobile and Web Figma Design)",
    tags: [{ id: 1, Icon: FaFigma, title: "Figma" }],
  },

  {
    id: 3,
    image: "/assets/projects/web_portfolio.webp",
    title: "Personal Web Resume",
    tags: [
      { id: 1, Icon: SiNextdotjs, title: "NextJS" },
      { id: 2, Icon: SiTailwindcss, title: "Tailwind CSS" },
    ],
  },

  {
    id: 4,
    image: "/assets/projects/patient_mgmt.webp",
    title: "Patient Management System",
    tags: [{ id: 1, Icon: SiCsharp, title: "C# (Windows Forms App)" }],
  },
];

export default projectsData;
