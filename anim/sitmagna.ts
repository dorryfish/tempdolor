function calculateResult(b: number): number {
  if (isNaN(b) || !isFinite(b) || b < 0) {
    throw new Error('Invalid input');
  }

  const optimizedValue = Math.sqrt(b);

  // Perform additional calculations or processes on optimizedValue

  return optimizedValue;
}
