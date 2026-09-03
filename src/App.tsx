import { PAGES } from "./constants/common.constants";
import AmWave from "./components/amWave/amWave";
import useScroll from "./hooks/useScroll";

import "./App.css";

function App() {
  const {containerRef,activeIndex} = useScroll();
  return (
    <div className="portfolio-wrapper">
      {/* Scrollable Container */}
      <main ref={containerRef} className="horizontal-scroll-container">
        {PAGES.map((proj, idx) => (
          <section
            key={proj.id}
            data-index={idx}
            className="portfolio-section"
          >
            <>
             { proj.element()}
            </>
          </section>
        ))}
      </main>
      <AmWave 
        sectionCount={PAGES.length}
        activeIndex={activeIndex}
        containerRef={containerRef} 
      />
    </div>
  );
}

export default App;
