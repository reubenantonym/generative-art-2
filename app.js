import canvasSketch from "canvas-sketch";
import random from "canvas-sketch-util/random";
import math from "canvas-sketch-util/math";

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    ///=== Placing the box on the canvas ===//
    const u = width * 0.5;
    const v = height * 0.5;
    // Change shapes of the boxes
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    //==== Numbers of copies of the shape ===//
    const num = 40;
    /// radius of the circle
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      // Cutting angles into pieces
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = u + radius * Math.sin(angle);
      y = v + radius * Math.cos(angle);

      context.save();
      /// Changing position of our box
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(1, 3), random.range(0.2, 0.5));

      context.beginPath();
      context.rect(-w * 0.5, random.range(1, -h * 0.5), w, h);
      context.fill();
      context.restore();

      ///==== Create an arc (incomplete circle) ====//
      context.save();
      context.translate(u, v);
      context.rotate(-angle);

      /// Make the arc thicker
      context.lineWidth = random.range(6, 30);

      context.beginPath();
      context.arc(
        0,
        0,
        radius * random.range(0.7, 1.3),
        slice * random.range(1, -8),
        slice * random.range(2, 10)
      );
      context.stroke();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
