import  {useEffect,useRef,useState} from "react";

const useScroll =() =>{

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const currentElement = containerRef.current;

    if (!currentElement) {
      return;
    }

    const handleWheelScroll = (e: globalThis.WheelEvent) => {
      const el = containerRef.current;
      if (!el) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }

      // Check boundary positions
      const isAtStart = el.scrollLeft <= 0;
      const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

      // Prevent default scrolling if trying to scroll past edges
      if ((isAtStart && e.deltaY < 0) || (isAtEnd && e.deltaY > 0)) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      currentElement.scrollBy({
        left: e.deltaY * 1.5,
        behavior: "smooth",
      });
    };

    currentElement.addEventListener("wheel", handleWheelScroll, {
      passive: false,
    });

    return () => currentElement.removeEventListener("wheel", handleWheelScroll);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { root: el, threshold: 0.6 },
    );
    const sections = el.querySelectorAll(".portfolio-section");
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        containerRef.current.scrollBy({
          left: window.innerWidth,
          behavior: "smooth",
        });
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        containerRef.current.scrollBy({
          left: -window.innerWidth,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return {
    containerRef,
    activeIndex
  }

}


export default useScroll;