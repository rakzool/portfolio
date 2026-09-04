import  {useEffect,useRef,useState, type MouseEvent} from "react";

const useScroll =() =>{

  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
      if (!wrapperRef.current) return;
      wrapperRef.current.style.setProperty("--cursor-x", `${e.clientX}px`);
      wrapperRef.current.style.setProperty("--cursor-y", `${e.clientY}px`);
    };

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
        left: e.deltaY * 1.0,
        behavior: "auto",
      });
    };

    currentElement.addEventListener("wheel", handleWheelScroll, {
      passive: false,
    });

    return () => currentElement.removeEventListener("wheel", handleWheelScroll);
  }, []);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.setProperty(
        "--cursor-x",
        `${window.innerWidth / 2}px`,
      );
      wrapperRef.current.style.setProperty(
        "--cursor-y",
        `${window.innerHeight / 2}px`,
      );
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const pageWidth = window.innerWidth;
      
      // Determine current page index based on which section is most centered in the viewport
      const newIndex = Math.round(scrollLeft / pageWidth);
      setActiveIndex(newIndex);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
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
    activeIndex,
    wrapperRef,
    handleMouseMove
  }

}


export default useScroll;