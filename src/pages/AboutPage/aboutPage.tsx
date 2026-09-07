import { useEffect, useRef, useState } from "react";
import "./aboutPage.css";

interface Highlight {
  label: string;
}

const HIGHLIGHTS: Highlight[] = [
  { label: "Ex-Paytm SDE" },
  { label: "Frontend Performance Enthusiast" },
  { label: "Open Source Contributor" },
];

const TECH_TAGS: string[] = ["React", "TypeScript", "Node.js", "System Design"];

const AboutPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isPageActive, setIsPageActive] = useState<boolean>(false);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(
    () => {
      if (typeof window === "undefined") return false;
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    // If motion is reduced, we don't need to observe anything — `showActive` below
    // already accounts for prefersReducedMotion at render time.
    if (!el || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsPageActive(entry.isIntersecting),
      { threshold: [0.3, 0.6], rootMargin: "-10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  // Derived value — combines observer state with the reduced-motion bypass
  // without needing a second setState call anywhere.
  const showActive = prefersReducedMotion || isPageActive;

  return (
    <section
      ref={sectionRef}
      className="about-section-container"
      id="about"
      aria-labelledby="about-title"
    >
      <span
        className={`literature-quote quote-top-left ${showActive ? "active" : ""}`}
        aria-hidden="true"
      >
        “
      </span>
      <span
        className={`literature-quote quote-bottom-right ${showActive ? "active" : ""}`}
        aria-hidden="true"
      >
        ”
      </span>

      <div className="about-content-wrapper">
        <div className="polaroid-wrapper">
          <div className={`polaroid-frame ${showActive ? "page-active" : ""}`}>
            <span className="polaroid-tape" aria-hidden="true" />
            <div className="polaroid-image-container">
              <img
                src="/aboutImage.png"
                alt="Rahul Kumar"
                className="polaroid-image"
                loading="lazy"
                decoding="async"
                width={320}
                height={320}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="polaroid-shine" aria-hidden="true" />
            </div>

            <div className="polaroid-caption">
              <span className="code-name">rahul_kumar</span>
              <span className="code-role">SDE-1 // Meesho</span>
            </div>
          </div>
        </div>

        <div className="about-text-content">
          <p className="about-eyebrow">Hi there, I’m</p>
          <h2 className="about-title" id="about-title">
            About Me
          </h2>

          <p className="about-bio">
            I’m a Software Development Engineer specializing in high-performance
            web architecture, fluid user interactions, and robust frontend
            systems. My work bridges clean, scalable engineering principles with
            immersive UI designs.
          </p>
          <p className="about-bio-secondary">
            When I'm not optimizing component rendering loops or building
            cross-organizational packages, you'll find me exploring complex
            metal guitar arrangements, riding motorcycles on open roads, or
            diving into dark-fantasy anime.
          </p>

          <ul className="about-highlights" role="list">
            {HIGHLIGHTS.map((item) => (
              <li className="highlight-item" key={item.label}>
                <span className="highlight-dot" aria-hidden="true" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          <div
            className="about-tech-tags"
            aria-label="Technologies I work with"
          >
            {TECH_TAGS.map((tag) => (
              <span className="tech-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="about-cta-row">
            <a
              href={`${import.meta.env.BASE_URL}Rahul_Kumar_FullStack_Resume.pdf`}
              className="about-cta primary"
              download="Rahul_Kumar_FullStack_Resume.pdf"
            >
              Download Resume
            </a>
            <a href="#contact" className="about-cta secondary">
              Let’s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
