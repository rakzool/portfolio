export const PROJECTS = [
  {
    id: "dare2dev",
    name: "Dare2Dev",
    category: "Full-stack hackathon platform",
    image: "d2dHeroimage.png",
    description: "A place to build, compete, and bring ideas to life. An end-to-end hackathon portal connecting participants and judges through one shared experience.",
    stack: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "JWT"],
    features: [
      { title: "Live leaderboards", description: "Real-time competition updates over WebSockets." },
      { title: "Judge workspace", description: "A dedicated grading portal for submissions." },
      { title: "Secure access", description: "JWT authentication across the platform." },
    ],
    architecture: "Built the React frontend and Node.js/Express backend, with RESTful APIs, WebSocket communication, MongoDB persistence, and JWT authentication. The platform includes real-time leaderboards and a judge grading portal.",
  },
];

export const COMPANIES = [
  { name: "Paytm", image: "paytm-wordmark.svg", url: "https://paytm.com/" },
  { name: "Meesho", image: "meesho.svg", url: "https://www.meesho.io/" },
  { name: "INSIA (Forty4Hz)", image: "insia-logo.svg", url: "https://www.insia.ai/about" },
];
