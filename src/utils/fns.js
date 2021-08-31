function random(limit) {
  return Math.floor(Math.random() * limit);
}

function rgba(hex, alpha = 1) {
  let regex = /.{1,2}/g;
  const hexPolished = hex.slice(1);
  if (hexPolished.length === 3) {
    regex = /.{1}/g;
  }
  const matched = hexPolished.match(regex);
  let [r, g, b] = matched;
  r = r.length === 1 ? `${r}${r}` : r;
  g = g.length === 1 ? `${g}${g}` : g;
  b = b.length === 1 ? `${b}${b}` : b;
  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);
  const result = `rgba(${r},${g},${b}, ${alpha})`;
  return result;
}

export { random, rgba };
