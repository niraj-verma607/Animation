import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const App2 = () => {
  const boxRef = useRef();

  const { contextSafe } = useGSAP();
  //Context Safe (iska use humlog memory ko clear karne ke liye karte hain)
  const rotateBox = contextSafe(function () {
    gsap.to(boxRef.current, {
      rotation: 360,
      duration: 1,
    });
  });

  return (
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div className="box" ref={boxRef}>
        Box
      </div>
    </main>
  );
};

export default App2;
