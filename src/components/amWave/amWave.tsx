import React, { useMemo } from 'react';
import {SVG_DIMENTIONS} from "./constants/svg.constantant";
import './amWaveIndicator.css';

type TAMWaveformIndicatorProps = {
  sectionCount: number;
  activeIndex: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function AmWave({
  sectionCount,
  activeIndex,
  containerRef,
}: TAMWaveformIndicatorProps): React.JSX.Element {
  
  const width = SVG_DIMENTIONS.width; 
  const height = SVG_DIMENTIONS.height; 
  const centerY = SVG_DIMENTIONS.height / 2; 
  const baseAmplitude = SVG_DIMENTIONS.baseAmplitude; 
  const points = SVG_DIMENTIONS.points; 

  // Memoize the path data calculation to avoid unnecessary re-computation
  const pathData = useMemo(() => {
    
    // We Map 'activeIndex' to the number of complete sine cycles (periods).
    // Section 0 -> 0 cycles (straight line).
    // Section 1 -> 1 cycle (single pulse up and down).
    // Section 2 -> 2 cycles, and so on.
    const cycles = activeIndex;

    // Build the SVG path data string: 'M 0 50 L point1 L point2 ...'
    let pathPoints = `M 0,${centerY}`;

    for (let i = 0; i <= points; i++) {
      // Calculate normalized X (0 to 1) and actual SVG X (0 to 400)
      const t = i / points;
      const x = t * width;

      // Calculate the normalized angle based on the number of cycles
      const angle = t * cycles * Math.PI * 2;

      // If activeIndex is 0 (first section), we force amplitude 0 for a straight line
      const currentAmplitude = activeIndex === 0 ? 0 : baseAmplitude;

      // The Sine Calculation
      const y = centerY - (currentAmplitude * Math.sin(angle));

      // Append point to the path (L is implicit after M)
      pathPoints += ` L ${x.toFixed(2)},${y.toFixed(2)}`;
    }

    return pathPoints;
  }, [activeIndex, centerY, width, points, baseAmplitude]);

  const handleIndicatorClick = (index: number): void => {
    containerRef.current?.scrollTo({
      left: index * window.innerWidth,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="waveform-indicator-container" aria-label="Portfolio Waveform Navigation">
      
      {/* 1. The Dynamic SVG Waveform */}
      <svg
        className="am-waveform-svg"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* The line (path) data 'd' attribute will be animated */}
        <path className="am-waveform-path" d={pathData} />
      </svg>

      {/* 2. Invisible Hit-Areas (Buttons) overlaid for clicking */}
      <div className="waveform-hit-areas">
        {Array.from({ length: sectionCount }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`waveform-step-button ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(idx)}
            aria-label={`Go to section ${idx + 1}`}
          />
        ))}
      </div>
    </nav>
  );
}