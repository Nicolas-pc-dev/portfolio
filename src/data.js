import Tailwind from "./assets/tailwind.png";
import Css from "./assets/css.png";
import GitHub from "./assets/github.png";
import Html from "./assets/html.png";
import Js from "./assets/javascript.png";
import Mongo from "./assets/mongo.png";
import Node from "./assets/node.png";
import ReactImg from "./assets/react.png";
import NextJs from "./assets/nextjs.png";
import Figma from "./assets/Figma.png";
import Git from "./assets/Git.png";

import vetTeams from "./assets/Vet-teams.png";
import Guess from "./assets/Guess.png";
import BankApp from "./assets/BankAppDemo.png";

export const DUMMY_SKILLS = [
  { title: "HTML", image: `${Html}` },
  { title: "CSS", image: `${Css}` },
  { title: "JavaScript", image: `${Js}` },
  { title: "Figma", image: `${Figma}` },
  { title: "Tailwind", image: `${Tailwind}` },
  { title: "React", image: `${ReactImg}` },
  { title: "NextJS", image: `${NextJs}` },
  { title: "NodeJS", image: `${Node}` },
  { title: "MongoDB", image: `${Mongo}` },
  { title: "Git", image: `${Git}` },
  { title: "Git-Hub", image: `${GitHub}` },
];

export const DUMMY_WORKS = [
  {
    image: `${vetTeams}`,
    gitHub:
      " https://github.com/gabrielcontrerasv/top-gun-javascript-project.git",
    website: "https://tglpet.vercel.app/",
    center: false,
  },
  {
    image: `${BankApp}`,
    gitHub: "https://github.com/Nicolas-pc-dev/Guess-My-Number",
    website: "https://npc-bankappdemo.netlify.app/",
    center: true,
  },
  {
    image: `${Guess}`,
    gitHub: "https://github.com/Nicolas-pc-dev/Guess-My-Number",
    website: "https://nicolas-pc-dev.github.io/Guess-My-Number/",
    center: true,
  },
];
