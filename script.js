function func(x) {
  return 1 * x - 1;
}

function translate(x, y) {
  return [x + 250, 250 - y];
}

function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let oldX = -40;

  for (let x = -40; x < 40; x += 0.1) {
    ctx.moveTo(...translate(oldX, func(oldX)));
    ctx.lineTo(...translate(x, func(x)));
    oldX = x;
  }
  ctx.stroke();
}
