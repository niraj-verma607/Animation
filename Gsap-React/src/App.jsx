import { useGSAP } from "@gsap/react"; //npm install @gsap/react
import gsap from "gsap"; //npm install gsap
import { useRef, useState } from "react";

const App = () => {
  //Normal Animation without useRef()
  // useGSAP(() => { //Gsap hook to use gsap
  //   gsap.to(".box", {
  //     x: 500,
  //     duration: 1,
  //     delay: 0.5,
  //     rotate: 360,
  //     borderRadius: "50%",
  //   });
  // });

  // const gsapRef = useRef()

  // useGSAP(()=>{
  //   gsap.to(gsapRef.current, {
  //     x : 1000,
  //     duration : 2,
  //     delay : 1,
  //     rotate : 720
  //   })
  // })

  // const boxRef = useRef(); //useRef ka use humlog karte hai taki hum koi specific element me animation laga skte hai joki simple useGsap use karne se sare element me apply ho jata hai jisko jisko same class mila ho

  // useGSAP(() => {
  //   gsap.to(boxRef.current, {
  //     rotate: 360,
  //     delay: 1,
  //     duration: 2,
  //   });
  // });

  // useGSAP(
  //   () => {
  //     gsap.from(".box", {
  //       rotate: 360,
  //       scale: 0,
  //       duration: 1,
  //       opacity: 0,
  //       delay: 0.5,
  //     });
  //   },
  //   { scope: ".container" }
  //   //isse wahi element animate hoga to container class me hoga aha pe hum useRef() bhi use kar skate hai
  // );

  // const [circle, setCircle] = useState(0);

  // const random = gsap.utils.random(-500, 500, 100); //random values in gsap

  // useGSAP(() => {
  //   gsap.to(".circle", {
  //     x: circle,
  //     duration: 0.5,
  //   });
  // }, [circle]);

  const randomX = gsap.utils.random(-500, 500, 100);
  const rotateX = gsap.utils.random(-360, 360, 30);
  const randomY = gsap.utils.random(-200, 200, 30);

  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [roti, setRoti] = useState(0);

  const imageRef = useRef();

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        x: xValue,
        y: yValue,
        rotate: roti,
        duration: 1,
      });
    },
    { scope: "main", dependencies: [xValue, yValue, roti] }
  );

  return (
    <main>
      {/* <div ref={gsapRef} className="box"></div> */}

      {/* <div className="container">
        <div className="circle"></div> */}
      {/* <div ref={boxRef} className="box"></div> */}
      {/* <div className="box"></div>
      </div> */}

      {/* <div className="container2">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}

      {/* <button
        onClick={() => {
          setCircle(random);
        }}
      >
        Animate
      </button>
      <div className="circle"></div> */}

      <button
        onClick={() => {
          setXValue(randomX);
          setRoti(rotateX);
          setYValue(randomY);
        }}
      >
        Animate
      </button>
      <img
        ref={imageRef}
        src="https://png.pngtree.com/png-clipart/20230411/original/pngtree-cute-yellow-bee-cartoon-illustration-png-image_9043912.png"
        alt=""
      />
      {/* <div ref={imageRef} className="box"></div> */}
    </main>
  );
};

export default App;
