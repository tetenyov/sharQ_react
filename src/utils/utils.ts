export const getRandomInteger = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min);
};

export const isNumberKey = (codes: string[], code: string) => {
  return codes.includes(code)
};

export const isBackspaceKey = (code: string, reference: string) => {
  return code === reference;
};