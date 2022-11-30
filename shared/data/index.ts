/* eslint-disable import/prefer-default-export */

import { Job, Project } from "../interfaces";

export const jobs: Job[] = [
  {
    title: "Software Engineer",
    company: "LogiCloud Technologies",
    url: "https://www.logicloud.tech/",
    range: "November 2021 - April 2022",
    descriptions: [
      "Developed and maintained code for clients application primarily using TypeScript, NodeJS, Sequelize, and Azure",
      "Helped shipped out ready-production code",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Discord Clone",
    description:
      "Fully functional discord clone application with essential features like DM, Group Chat, and server creation.",
    techStack: [
      {
        name: "React",
        path: "/react-icon.png",
      },
      {
        name: "Node",
        path: "/node-icon.png",
      },
      {
        name: "Graphql",
        path: "/graphql-icon.png",
      },
    ],
    liveUrl: "some url",
    sourceUrl: "https://github.com/ericz99/discord-clone",
    imageUrl: "/discord-icon.png",
  },
  {
    name: "Pair Programming",
    description:
      "Fully functional peer programming web application that allows multiple users to collaborate on a code editor.",
    techStack: [
      {
        name: "React",
        path: "/react-icon.png",
      },
      {
        name: "Node",
        path: "/node-icon.png",
      },
    ],
    liveUrl: "some url",
    sourceUrl: "https://github.com/ericz99/peer-programming",
    imageUrl: "/discord-icon.png",
  },
  {
    name: "API Builder",
    description: "Simple API CRUD Builder with MongoDB Schema support.",
    techStack: [
      {
        name: "React",
        path: "/react-icon.png",
      },
      {
        name: "Node",
        path: "/node-icon.png",
      },
    ],
    liveUrl: "some url",
    sourceUrl: "https://github.com/ericz99/api-builder",
    imageUrl: "/discord-icon.png",
  },
];
