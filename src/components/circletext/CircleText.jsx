import { motion } from "framer-motion";
import "./circletext.css";

export default function CircleText({ text, spinDuration = 20 }) {
  const letters = Array.from(text);

  return (
    <div className="circletext-container">

      <img src="/images/Photo.jpeg" className="circletext-image" />

      <motion.div
        className="circletext-rotator"
        animate={{ rotate: 360 }}
        transition={{
          duration: spinDuration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="circletext">
          {letters.map((letter, i) => {
            const angle = (360 / letters.length) * i;

            return (
              <span
                key={i}
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translate(220px)
                  `
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
