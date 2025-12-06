import { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import Projectcard from "../projectcard/ProjectCard";
import "./projecthome.css";

const MAX_VISIBILITY = 3;

export default function ProjectHome() {
  const cards = [
    { src: "OneFifty.png", title: "Test 1" },
    { src: "OneFifty.png", title: "Test 2" },
    { src: "OneFifty.png", title: "Test 3" },
    { src: "OneFifty.png", title: "Test 4" },
  ];

  const [active, setActive] = useState(0);
  const count = cards.length;

  // ✔️ swap directions
  const next = () => setActive((prev) => (prev - 1 + count) % count);
  const prev = () => setActive((prev) => (prev + 1) % count);

  return (
    <div className="carousel">
      <button className="nav left" onClick={next}>
        <TiChevronLeftOutline size={32} />
      </button>

      {cards.map((card, i) => {
        // ✔️ reversed offset
        let offset = active - i;

        // wrap for infinite
        if (offset < -count / 2) offset += count;
        if (offset > count / 2) offset -= count;

        const absOffset = Math.abs(offset);

        return (
          <div
            key={i}
            className="card-container"
            style={{
              "--active": offset === 0 ? 1 : 0,
              "--offset": offset,
              "--direction": Math.sign(offset),
              "--abs-offset": absOffset,
              pointerEvents: offset === 0 ? "auto" : "none",
              opacity: absOffset >= MAX_VISIBILITY ? "0" : "1",
              display: absOffset > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            <Projectcard src={card.src} title={card.title} />
          </div>
        );
      })}

      <button className="nav right" onClick={prev}>
        <TiChevronRightOutline size={32} />
      </button>
    </div>
  );
}
