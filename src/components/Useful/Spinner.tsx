import React, { useRef, useEffect } from "react";

const Spinner = () => {
  const spinnerRef = useRef<HTMLCanvasElement>(null);
  const rnd = Math.random() * 10;

  useEffect(() => {
    const canvas = spinnerRef.current;
    const ctx = canvas?.getContext("2d");
    let startAngle = 0;
    let drawId = 0;

    function draw() {
      if (ctx) {
        ctx.clearRect(0, 0, 400, 400);

        // grey circle
        ctx.beginPath();
        ctx.arc(200, 200, 100, 0, 2 * Math.PI);
        ctx.lineWidth = 20;
        ctx.strokeStyle = "rgba(141, 141, 141, 0.2)";
        ctx.stroke();

        // pink spinner itself
        ctx.beginPath();
        ctx.arc(200, 200, 100, startAngle + rnd, 1 + startAngle + rnd);
        ctx.lineWidth = 20;
        ctx.lineCap = "round";
        ctx.strokeStyle = "rgb(255, 170, 220)";
        ctx.stroke();
      }
      startAngle += 0.1;
      drawId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(drawId);
    };
  }, []);

  return (
    <canvas
      width='400'
      height='400'
      ref={spinnerRef}
      className='spinner'
    ></canvas>
  );
};

export default Spinner;
