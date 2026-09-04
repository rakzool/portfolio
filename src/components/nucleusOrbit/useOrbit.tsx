import React, {useRef, useEffect } from 'react';
import { ORBITS } from './constants/common.constant';

const useOrbit = (scrollContainerRef:React.RefObject<HTMLDivElement | null>) =>{
    const electronGroupRefs = useRef<(SVGGElement | null)[]>([]);

    useEffect(() => {
       const container = scrollContainerRef.current;
       if (!container) return;
   
       let animationFrameId: number;
   
       const updateOrbitPositions = () => {
         const maxScroll = container.scrollWidth - container.clientWidth;
         const progress = maxScroll > 0 ? container.scrollLeft / maxScroll : 0;
   
         // Directly update the SVG transform matrix via ref — bypasses React state lag
         ORBITS.forEach((orbit, idx) => {
           const groupEl = electronGroupRefs.current[idx];
           if (!groupEl) return;
   
           const currentElectronAngle =
             orbit.direction === 1
               ? progress * orbit.sweepAngle
               : orbit.sweepAngle - progress * orbit.sweepAngle;
   
           groupEl.setAttribute(
             "transform",
             `rotate(${currentElectronAngle} 300 300)`,
           );
         });
   
         animationFrameId = requestAnimationFrame(updateOrbitPositions);
       };
   
       // Start the high-performance render loop
       animationFrameId = requestAnimationFrame(updateOrbitPositions);
   
       return () => {
         cancelAnimationFrame(animationFrameId);
       };
     }, [scrollContainerRef]);

     return {
        electronGroupRefs
     }
  
}


export default useOrbit