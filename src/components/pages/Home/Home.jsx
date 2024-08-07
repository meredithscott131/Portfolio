import React, { useEffect, useRef } from "react";
import styles from "./style.scss";

export const Home = () => {
  const interactiveRef = useRef(null);

  useEffect(() => {
    const interBubble = interactiveRef.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className={styles.textContainer}>Bubbles</div>
      <div className={styles.gradientBg}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className={styles.gradientsContainer}>
          <div className={styles.g1}></div>
          <div className={styles.g2}></div>
          <div className={styles.g3}></div>
          <div className={styles.g4}></div>
          <div className={styles.g5}></div>
          <div className={styles.interactive} ref={interactiveRef}></div>
        </div>
      </div>
    </div>
  );
};