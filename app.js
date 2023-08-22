const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    /// Placing the box on the canvas
    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.3;
    const h = height * 0.3;

    context.save();
    /// Changing position of  our box
    context.translate(x, y);
    context.rotate(0.3);

    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5, w, h);
    context.fill();
    context.restore();
  };
};

canvasSketch(sketch, settings);
