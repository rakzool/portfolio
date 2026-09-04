import AmWave from "./components/amWave/amWave";
import useScroll from "./hooks/useScroll";
import CrystalNav from "./components/crystalNav/crystalnav.component";

import { PAGES } from "./constants/common.constants";
import { ScrollContext } from "./common/context/ScrollContext";


import "./App.css";

function App() {
  const { containerRef, activeIndex, wrapperRef, handleMouseMove } =
    useScroll();

  return (
    <ScrollContext.Provider value={{ containerRef }}>
      <div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        className="portfolio-wrapper"
      >
        <div className="mouse-glow-overlay" aria-hidden="true" />
        <CrystalNav 
          pages={PAGES} 
          activeIndex={activeIndex} 
          containerRef={containerRef} 
        />
        {/* Scrollable Container */}
        <main ref={containerRef} className="horizontal-scroll-container">
          {PAGES.map((page, idx) => {
            const PageComponent = page.Component; 
            return (
              <section key={page.id} data-index={idx} className="portfolio-section">
                <PageComponent />
              </section>
            );
          })}
        </main>
        <AmWave
          sectionCount={PAGES.length}
          activeIndex={activeIndex}
          containerRef={containerRef}
        />
      </div>
    </ScrollContext.Provider>
  );
}

export default App;
