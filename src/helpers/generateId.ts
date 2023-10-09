function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export function generateId(): number {
  return Date.now() + getRandomInt(1000);
}
