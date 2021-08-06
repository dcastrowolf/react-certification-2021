function random(limit) {
  return Math.floor(Math.random() * limit);
}

function rgba(hex, alpha = 1) {
  const regex = /.{1,2}/g;
  const matched = hex.slice(1).match(regex);
  let [r, g, b] = matched;
  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);
  const result = `rgba(${r},${g},${b}, ${alpha})`;
  return result;
}

export { random, rgba };
