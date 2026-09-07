import { FiArrowUpRight, FiCode, FiLayers, FiPlus, FiShield, FiUsers, FiZap } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
import type { IconType } from "react-icons";
import { COMPANIES, PROJECTS } from "./projectsData";
import "./projectPage.css";

const STACK_ICONS: Record<string, IconType> = {
  React: SiReact, "Node.js": SiNodedotjs, Express: SiExpress,
  MongoDB: SiMongodb, WebSockets: FiZap, JWT: FiShield,
};
const FEATURE_ICONS = [FiZap, FiUsers, FiShield];

const ProjectPage = () => (
  <section className="projects-page" id="projects" aria-labelledby="projects-title"
    onKeyDown={(event) => { if (event.key.startsWith("Arrow")) event.stopPropagation(); }}>
    <div className="projects-content" data-vertical-scroll tabIndex={0} role="region" aria-label="Companies and projects">
      <section className="project-companies" aria-labelledby="project-companies-title">
        <header className="project-companies-heading">
          <p className="projects-eyebrow"><span>.04 /</span> EXPERIENCE</p>
          <h2 id="project-companies-title">Companies I’ve worked with</h2>
        </header>
        <div className="project-company-strip">
        <ul className="project-company-list">
          {COMPANIES.map((company) => (
            <li key={company.name}>
              <a href={company.url} target="_blank" rel="noopener noreferrer" aria-label={`${company.name} website (opens in a new tab)`}>
                <span className="project-company-logo"><img src={`${import.meta.env.BASE_URL}companies/${company.image}`} alt={`${company.name} logo`} decoding="async" /></span>
              </a>
            </li>
          ))}
        </ul>
        </div>
      </section>

      <header className="projects-heading">
        <div>
          <p className="projects-eyebrow"><span>.05 /</span> SELECTED WORK</p>
          <h2 id="projects-title">Ideas, made <span>real.</span></h2>
        </div>
        <p className="projects-heading-note"><FiCode aria-hidden="true" /> Built from interface to infrastructure.</p>
      </header>

      <div className="projects-list">
        {PROJECTS.map((project, index) => (
          <article className="project-feature" key={project.id} aria-labelledby={`${project.id}-title`}>
            <div className="project-visual">
              <div className="project-window-bar" aria-hidden="true"><span /><span /><span /><p>PROJECT / {String(index + 1).padStart(2, "0")}</p></div>
              <a className="project-preview" href={`${import.meta.env.BASE_URL}${project.image}`} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${project.name} preview in a new tab`}>
                <img src={`${import.meta.env.BASE_URL}${project.image}`} alt="Dare2Dev hackathon portal landing page with registration entry and developer illustration" width="2048" height="1162" decoding="async" />
                <a className="project-preview-link" href="https://dare2dev.netlify.app/">Explore the preview <FiArrowUpRight aria-hidden="true" /></a>
              </a>
              <div className="project-visual-footer"><span><i aria-hidden="true" /> FULL-STACK BUILD</span><span>01</span></div>
            </div>
            <div className="project-story" data-vertical-scroll tabIndex={0} role="region" aria-label={`${project.name} project details`}>
              <p className="project-category">{project.category}</p>
              <div className="project-title-row">
                <h3 id={`${project.id}-title`}>{project.name}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-features">
                {project.features.map((feature, i) => {
                  const Icon = FEATURE_ICONS[i] ?? FiLayers;
                  return <li key={feature.title}><Icon aria-hidden="true" /><div><h4>{feature.title}</h4><p>{feature.description}</p></div></li>;
                })}
              </ul>
              <ul className="project-stack" aria-label={`${project.name} technologies`}>
                {project.stack.map((technology) => {
                  const Icon = STACK_ICONS[technology] ?? FiCode;
                  return <li key={technology}><Icon aria-hidden="true" />{technology}</li>;
                })}
              </ul>
              <details className="project-architecture"><summary>Under the hood <FiPlus aria-hidden="true" /></summary><p>{project.architecture}</p></details>
            </div>
          </article>
        ))}
      </div>


    </div>
  </section>
);

export default ProjectPage;
