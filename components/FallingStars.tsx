import React, { useEffect, useState } from "react";

const FallingStars: React.FC = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const numberOfStars = 120;
    const newStars = Array.from({ length: numberOfStars }).map((_, index) => {
      const delay = Math.random() * 5;
      const leftPosition = Math.random() * 100;
      const duration = 3 + Math.random() * 2;

      return (
        <div
          key={index}
          className="falling-star"
          style={{
            left: `${leftPosition}%`,  // Constrain within parent width
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        ></div>
      );
    });

    setStars(newStars);
  }, []);

  return <div className="starfall absolute left-0 w-full h-full overflow-hidden pointer-events-none">{stars}</div>;

};

export default FallingStars;
