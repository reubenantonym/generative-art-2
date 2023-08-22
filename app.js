const canvasSketch = require("canvas-sketch");
const { degToRad } = require("canvas-sketch-util/math");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    /// Placing the box on the canvas
    const u = width * 0.5;
    const v = height * 0.5;
    // Change shapes of the boxes
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    //Numbers of copies of the shape
    const num = 20;
    /// radius of the circle
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      // Cutting angles into pieces
      const slice = degToRad(360 / num);
      const angle = slice * i;

      x = u + radius * Math.sin(angle);
      y = v + radius * Math.cos(angle);

      context.save();
      /// Changing position of our box
      context.translate(x, y);
      context.rotate(-angle);

      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
