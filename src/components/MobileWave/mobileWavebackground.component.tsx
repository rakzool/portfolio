import React, { useEffect, useRef, useState } from 'react';
import './MobileWaveBackground.css';

const DASH_ARRAY = [140, 50, 160, 55, 120];
const DOT_RADII = [5, 6];

// Manual nudges, indexed by TOP-TO-BOTTOM visual order (0 = topmost dot).
// dy in viewBox units, positive = further down the screen.
const DOT_OFFSETS: { dx: number; dy: number }[] = [
  { dx: 0, dy: 0 },   // 1st dot from top
  { dx: 0, dy: 40 },  // 2nd dot from top — nudged down to clear content
];

interface DotPosition {
  x: number;
  y: number;
  r: number;
}

export default function MobileWaveBackground(): React.JSX.Element {
  const pathRef = useRef<SVGPathElement>(null);
  const [dots, setDots] = useState<DotPosition[]>([]);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const totalLength = path.getTotalLength();

    const pattern =
      DASH_ARRAY.length % 2 === 0 ? DASH_ARRAY : [...DASH_ARRAY, ...DASH_ARRAY];
    const patternLength = pattern.reduce((sum, v) => sum + v, 0);

    const gapMidpoints: number[] = [];
    let base = 0;

    while (base < totalLength) {
      let cursor = base;
      pattern.forEach((segment, i) => {
        const isGap = i % 2 === 1;
        if (isGap) {
          const midpoint = cursor + segment / 2;
          if (midpoint <= totalLength) gapMidpoints.push(midpoint);
        }
        cursor += segment;
      });
      base += patternLength;
    }

    // gapMidpoints is in PATH order (path runs bottom -> top, i.e. length 0 = bottom).
    // Build raw dot positions first.
    const rawDots = gapMidpoints.map((length, i) => {
      const point = path.getPointAtLength(length);
      return { x: point.x, y: point.y, r: DOT_RADII[i % DOT_RADII.length], length };
    });

    // Sort a copy by y ascending to get TOP-TO-BOTTOM visual order,
    // then apply the corresponding offset back onto the original dot.
    const topToBottom = [...rawDots].sort((a, b) => a.y - b.y);

    topToBottom.forEach((dot, visualIndex) => {
      const offset = DOT_OFFSETS[visualIndex];
      if (offset) {
        dot.x += offset.dx;
        dot.y += offset.dy;
      }
    });

    setDots(rawDots.map(({ x, y, r }) => ({ x, y, r })));
  }, []);

  return (
    <div className="mobile-wave-container" aria-hidden="true">
      <svg
        className="mobile-wave-svg"
        viewBox="0 0 400 800"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M 0 800 C 150 720, 50 520, 200 400 C 350 280, 250 120, 400 0"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={DASH_ARRAY.join(' ')}
          className="wave-path"
        />

        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r={dot.r}
            fill="#FB644B"
            className="wave-dot"
          />
        ))}
      </svg>
    </div>
  );
}