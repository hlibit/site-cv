export function moveByOuterLink(link) {
  return window.open(link);
}

export function createRandomDelay() {
  return (Math.random() * (1 - 0.4) + 0.4).toFixed(1);
}
