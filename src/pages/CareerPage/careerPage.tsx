import "./careerPage.css";

interface Milestone {
  id: number;
  title: string;
  org: string;
  period: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    id: 0,
    title: "Education",
    org: "B.Tech, Computer Science",
    period: "2019 — 2023",
    description:
      "Built a foundation in data structures, systems programming, and web fundamentals.",
  },
  {
    id: 1,
    title: "Paytm",
    org: "Software Development Engineer",
    period: "2023 — 2025",
    description:
      "Worked on high-scale payment interfaces and performance-critical frontend systems.",
  },
  {
    id: 2,
    title: "Meesho",
    org: "SDE-1",
    period: "2025 — Present",
    description:
      "Building fluid, high-performance UI systems for one of India's largest e-commerce platforms.",
  },
];

const formatIndex = (n: number) => `.${String(n).padStart(2, "0")}`;

// One complete cosine wave, inset so endpoint cards stay inside the viewport.
const WAVE_PATH = Array.from({ length: 241 }, (_, i) => {
  const progress = i / 240;
  const x = 180 + progress * 840;
  const y = 50 - 42 * Math.cos(progress * Math.PI * 2);
  return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
}).join(" ");

const SNAKE_DIAMETERS = [8, 6.5, 5, 4, 3, 2];

const CareerPage = () => {

  return (
    <section className="career-section" id="career" aria-label="Career timeline">
      <div className="career-desktop-track">
        <svg className="career-wave-svg" viewBox="0 0 1200 100" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path d={WAVE_PATH} stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          {[{ x: 180, y: 8 }, { x: 600, y: 92 }, { x: 1020, y: 8 }].map((dot, i) => (
            <path key={i} d={`M ${dot.x} ${dot.y} h 0`}
              stroke="#FB644B" strokeWidth="14" strokeLinecap="round"
              vectorEffect="non-scaling-stroke" className="career-wave-dot" />
          ))}
          {SNAKE_DIAMETERS.map((diameter, i) => (
            <g key={diameter} opacity="0" className="career-snake">
              <animateMotion path={WAVE_PATH} dur="6s" begin={`${i * 0.07}s`} repeatCount="indefinite" calcMode="paced" />
              <animate attributeName="opacity" values="1;1;0" keyTimes="0;0.99;1"
                dur="6s" begin={`${i * 0.07}s`} repeatCount="indefinite" />
              {/* A round non-scaling stroke stays circular even when the wave stretches. */}
              <path d="M 0 0 h 0" stroke="#FB644B" strokeWidth={diameter}
                strokeLinecap="round" vectorEffect="non-scaling-stroke" className="career-snake-circle" />
            </g>
          ))}
        </svg>
        {MILESTONES.map((milestone, i) => (
          <article key={milestone.id} className={`career-card-wrapper career-card-wrapper--${i}`}>
            <span className="career-index-number">{formatIndex(i)}</span>
            <div className="career-card"><CareerCardBody milestone={milestone} /></div>
          </article>
        ))}
      </div>

      <div className="career-mobile-viewport" data-vertical-scroll tabIndex={0}
        role="region" aria-label="Scrollable career timeline"
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") event.stopPropagation();
        }}
      >
      <div className="career-mobile-track">
        <div className="career-rail" aria-hidden="true">
          <span className="career-rail-traveler">
            {SNAKE_DIAMETERS.map((diameter, i) => (
              <span key={diameter} className="career-rail-circle"
                style={{ width: diameter, height: diameter, animationDelay: `${i * 0.07}s` }}>
                <span className="career-snake-circle" />
              </span>
            ))}
          </span>
        </div>
        {MILESTONES.map((milestone, i) => (
          <article className="career-mobile-item" key={milestone.id}>
            <span className="rail-dot" aria-hidden="true" />
            <div className="career-card">
              <span className="career-index-number">{formatIndex(i)}</span>
              <CareerCardBody milestone={milestone} />
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
};

function CareerCardBody({ milestone }: { milestone: Milestone }) {
  return (
    <div className="career-card-body">
      <h3 className="career-card-title">{milestone.title}</h3>
      <p className="career-card-org">{milestone.org}</p>
      <p className="career-card-period">{milestone.period}</p>
      <p className="career-card-desc">{milestone.description}</p>
    </div>
  );
}

export default CareerPage;
