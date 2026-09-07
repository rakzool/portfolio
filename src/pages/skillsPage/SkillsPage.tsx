import { useState } from "react";
import { FiArrowDownRight, FiArrowUpRight, FiPlus } from "react-icons/fi";
import { SKILL_CATEGORIES, type SkillFilter } from "./skillsData";
import "./skillsPage.css";

const FILTERS: SkillFilter[] = ["All skills", "Frontend", "Full stack", "Tools"];

const SkillsPage = () => {
  const [filter, setFilter] = useState<SkillFilter>("All skills");
  const visibleCategories = SKILL_CATEGORIES.filter((category) => filter === "All skills" || category.filters.includes(filter));

  return (
    <section id="skills" className="skills-page" aria-labelledby="skills-title"
      onKeyDown={(event) => {
        if (event.key.startsWith("Arrow")) event.stopPropagation();
      }}>
      <div className="skills-scroll-area" data-vertical-scroll tabIndex={0} role="region" aria-label="Skills and experience">
        <header className="skills-header">
          <div>
            <p className="skills-eyebrow"><span aria-hidden="true">.03 /</span> THE TOOLKIT</p>
            <h2 id="skills-title">Built across <span>the stack.</span></h2>
            <p className="skills-intro">From thoughtful interfaces to the services behind them.</p>
          </div>
          <a className="skills-resume-link" href={`${import.meta.env.BASE_URL}Rahul_Kumar_FullStack_Resume.pdf`} download="Rahul_Kumar_FullStack_Resume.pdf">
            View my resume <FiArrowUpRight aria-hidden="true" />
          </a>
        </header>

        <div className="skills-toolbar">
          <div className="skills-filters" role="group" aria-label="Filter skill categories">
            {FILTERS.map((option) => (
              <button key={option} type="button" aria-pressed={filter === option}
                onClick={() => setFilter(option)}>{option}</button>
            ))}
          </div>
          <p className="skills-count" role="status">{visibleCategories.length} categories <FiArrowDownRight aria-hidden="true" /></p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <article className="skills-category" key={category.id} id={`skills-${category.id}`}
                aria-labelledby={`skills-${category.id}-title`}
                data-vertical-scroll tabIndex={0}
                hidden={!visibleCategories.includes(category)}>
                <header className="skills-category-header">
                  <span className="skills-category-icon"><CategoryIcon aria-hidden="true" /></span>
                  <div>
                    <h3 id={`skills-${category.id}-title`}>{category.title}</h3>
                    <p>{category.subtitle}</p>
                  </div>
                  <span className="skills-category-number" aria-hidden="true">0{index + 1}</span>
                </header>
                <ul className="skills-list" aria-label={`${category.title} skills`}>
                  {category.skills.map(({ name, icon: Icon }) => (
                    <li key={name}><Icon aria-hidden="true" focusable="false" /><span>{name}</span></li>
                  ))}
                </ul>
                <details className="skills-evidence">
                  <summary>In practice <FiPlus aria-hidden="true" /></summary>
                  <p>{category.evidence}</p>
                </details>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
