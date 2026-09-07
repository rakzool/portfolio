import React from "react";
import "./crystalnav.css"

type TPages = {
  id: number;
  title: string;
  Component: React.ComponentType
};
type TCrystalNavProps = {
  pages: TPages[];
  activeIndex: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
};

const CrystalNav = ({ pages, activeIndex, containerRef }: TCrystalNavProps) => {

  const handleNavClick = (index: number): void => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth",
    });
  };

  return (
   <header className="portfolio-navbar-container">
      <nav className="portfolio-navbar" aria-label="Main Portfolio Navigation">
        <button className="nav-brand" type="button" onClick={() => handleNavClick(0)} aria-label="Rahul Kumar — home">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} width="44" height="44" alt="~/r*" />
        </button>
        {pages.map((page, idx) => (
          <button
            key={page.id}
            type="button"
            className={`nav-item ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => handleNavClick(idx)}
          >
            {page.title}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default CrystalNav;
