import { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import Projectcard from "../projectcard/ProjectCard";
import "./projecthome.css";

const MAX_VISIBILITY = 2;

export default function ProjectHome() {
  const cards = [
    { src: "/images/Project6/page1.png", title: "Mental Well-Being App", link: "/projects/mwba" },
    { src: "/images/Project5/page1.png", title: "E-commerce Website", link: "/projects/ec" },
    { src: "/images/Project4/page11.jpeg", title: "GeoQuest App", link: "/projects/gq" },
    { src: "/images/Project3/page1.png", title: "Digital Twin Manufacturing", link: "/projects/dt" },
    { src: "/images/Project2/page1.png", title: "House Weather Risk Analysis", link: "/projects/hwras" },
    { src: "/images/Project1/page1.png", title: "Weather Claim Prediction", link: "/projects/wcps" },
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
            <Projectcard src={card.src} title={card.title} link={card.link} />
          </div>
        );
      })}

      <button className="nav right" onClick={prev}>
        <TiChevronRightOutline size={32} />
      </button>
    </div>
  );
}
