export function deathTimeFunction(a, b) {
   const rand =  Math.random();
   return - a * Math.LN2(rand) + b;
}
