import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { BiLogoJavascript } from "react-icons/bi";
import {
  SiAxios,
  SiCsharp,
  SiExpress,
  SiMui,
  SiNextdotjs,
  SiPostman,
  SiSequelize,
  SiTailwindcss,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const skillsData = [
  {
    id: 1,
    Icon: FaHtml5,
    title: "HTML",
    proficiencyPercent: 100,
  },
  {
    id: 2,
    Icon: FaCss3Alt,
    title: "CSS",
    proficiencyPercent: 75,
  },
  {
    id: 3,
    Icon: FaBootstrap,
    title: "Bootstrap",
    proficiencyPercent: 75,
  },
  {
    id: 4,
    Icon: BiLogoJavascript,
    title: "JavaScipt",
    proficiencyPercent: 75,
  },
  {
    id: 5,
    Icon: FaReact,
    title: "ReactJS",
    proficiencyPercent: 50,
  },
  {
    id: 6,
    Icon: SiMui,
    title: "Material UI",
    proficiencyPercent: 75,
  },
  {
    id: 7,
    Icon: SiNextdotjs,
    title: "NextJS",
    proficiencyPercent: 25,
  },
  {
    id: 8,
    Icon: SiTailwindcss,
    title: "Tailwind CSS",
    proficiencyPercent: 25,
  },
  {
    id: 9,
    Icon: FaFigma,
    title: "Figma",
    proficiencyPercent: 75,
  },
  {
    id: 10,
    Icon: FaNodeJs,
    title: "NodeJS",
    proficiencyPercent: 50,
  },
  {
    id: 11,
    Icon: SiExpress,
    title: "ExpressJS",
    proficiencyPercent: 50,
  },
  {
    id: 12,
    Icon: SiAxios,
    title: "Axios",
    proficiencyPercent: 50,
  },
  {
    id: 13,
    Icon: SiSequelize,
    title: "Sequelize",
    proficiencyPercent: 50,
  },
  {
    id: 14,
    Icon: GrMysql,
    title: "My SQL",
    proficiencyPercent: 50,
  },
  {
    id: 15,
    Icon: FaGithub,
    title: "Github",
    proficiencyPercent: 50,
  },
  {
    id: 16,
    Icon: SiPostman,
    title: "Postman",
    proficiencyPercent: 50,
  },
  {
    id: 17,
    Icon: SiCsharp,
    title: "C#",
    proficiencyPercent: 50,
  },
];
skillsData.sort((a, b) => b.proficiencyPercent - a.proficiencyPercent);

export default skillsData;
