import HomePage from "../pages/HomePage/homePage";
import ProjectPage from "../pages/ProjectsPage/projectPage";
import AboutPage from "../pages/AboutPage/aboutPage";
import CareerPage from "../pages/CareerPage/careerPage";
import SkillsPage from "../pages/skillsPage/SkillsPage";
import ConnectPage from "../pages/connectPage/ConnectPage";

export const PAGES = [
  { id: 0, title: "Home", Component: HomePage },
  { id: 1, title: "About", Component: AboutPage },
  { id: 2, title: "Career", Component: CareerPage },
  { id: 3, title: "Skills", Component: SkillsPage },
  { id: 4, title: "Projects", Component: ProjectPage },
  { id: 5, title: "Connect", Component: ConnectPage },
];
