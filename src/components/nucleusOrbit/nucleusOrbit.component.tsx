import React from "react";
import { ORBITS } from "./constants/common.constant";
import useOrbit from "./useOrbit";
import "./nucleusOrbit.css";

type TNucleusOrbitProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
};

export default function NucleusOrbit({
  scrollContainerRef,
}: TNucleusOrbitProps): React.JSX.Element {
  const { electronGroupRefs } = useOrbit(scrollContainerRef);

  return (
    <div className="nucleus-orbit-container">
      <svg
        className="nucleus-svg"
        viewBox="100 120 380 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Center Nucleus */}
        <circle cx="300" cy="300" r="45" fill="#FFFFFF" />

        {ORBITS.map((orbit, idx) => {
          const circumference = 2 * Math.PI * orbit.radius;
          const visibleRatio = orbit.sweepAngle / 360;
          const dashArray = `${circumference * visibleRatio} ${circumference * (1 - visibleRatio)}`;

          return (
            <g key={idx} transform={`rotate(${orbit.startAngle} 300 300)`}>
              {/* Static Arc */}
              <circle
                cx="300"
                cy="300"
                r={orbit.radius}
                stroke="#FFFFFF"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray={dashArray}
                strokeLinecap="round"
                opacity={0.7 - idx * 0.1}
              />

              {/* Moving Electron (Targeted directly via ref loop) */}
              <g
                ref={(el) => {
                  electronGroupRefs.current[idx] = el;
                }}
                transform="rotate(0 300 300)"
              >
                <circle
                  cx={300 + orbit.radius}
                  cy="300"
                  r={orbit.electronSize}
                  fill="#FB644B"
                />
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
