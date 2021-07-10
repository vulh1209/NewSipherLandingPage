import React from "react";
import { useSprings, animated } from "react-spring";

export default function Test({ Position, isActive }) {
  const springs = useSprings(
    10,
    Position.map((item) => ({
      from: isActive
        ? {
            opacity: 1,
            transform: `rotate3d(${item.rx}, ${item.ry}, ${item.rz}, ${item.deg}) translate3d(${item.tx}, ${item.ty}, ${item.tz}) scale3d(${item.sx}, ${item.sy}, ${item.sz})`,
          }
        : { opacity: 0.5, transform: `rotate3d(0, 0, 0, 0deg) translate3d(0px, 0px, 0px) scale3d(1,1, 1)` },
      to: !isActive
        ? {
            opacity: 1,
            transform: `rotate3d(${item.rx}, ${item.ry}, ${item.rz}, ${item.deg}) translate3d(${item.tx}, ${item.ty}, ${item.tz}) scale3d(${item.sx}, ${item.sy}, ${item.sz})`,
          }
        : { opacity: 0.5, transform: `rotate3d(0, 0, 0, 0deg) translate3d(0px, 0px, 0px) scale3d(1,1, 1)` },
      config: { duration: 500 },
    }))
  );
  return (
    <div>
      {springs.map((styles) => (
        <animated.div style={styles}>Position[0].rx</animated.div>
      ))}
    </div>
  );
}
