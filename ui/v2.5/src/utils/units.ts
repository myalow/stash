export function cmToImperial(cm: number) {
  const cmInInches = 0.393700787;
  const inchesInFeet = 12;
  const inches = Math.round(cm * cmInInches);
  const feet = Math.floor(inches / inchesInFeet);
  return [feet, inches % inchesInFeet];
}

export function kgToLbs(kg: number) {
  return Math.round(kg * 2.20462262185);
}
