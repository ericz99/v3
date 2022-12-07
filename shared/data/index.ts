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
    liveUrl: "https://ericzhang.xyz",
    sourceUrl: "https://github.com/ericz99/discord-clone",
    imageUrl: "/discord-clone-img.png",
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
    liveUrl: "https://peer-programming-client.onrender.com/",
    sourceUrl: "https://github.com/ericz99/peer-programming",
    imageUrl: "/peer-programming.png",
  },
  {
    name: "API Builder",
    description:
      "Simple API CRUD Builder with MongoDB Schema support and ExpressJS.",
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
    liveUrl: "https://eager-shannon-fb1119.netlify.app",
    sourceUrl: "https://github.com/ericz99/api-builder",
    imageUrl: "/api-builder.png",
  },
  {
    name: "Personal Website V2",
    description: "Second iteration of my website portfolio @ ericzhang.xyz",
    techStack: [
      {
        name: "React",
        path: "/react-icon.png",
      },
    ],
    liveUrl: "https://objective-booth-c05f38.netlify.app/",
    sourceUrl: "https://github.com/ericz99/v2",
    imageUrl: "/v2-img.png",
  },
  {
    name: "Personal Website V3",
    description: "Current iteration of my website portfolio @ ericzhang.xyz",
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
    liveUrl: "https://www.ericzhang.xyz/",
    sourceUrl: "https://github.com/ericz99/v3",
    imageUrl: "/v3-img.png",
  },
];
