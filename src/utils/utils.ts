export const getRandomInteger = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min);
};

export const isNumberKey = (codes: string[], code: string): boolean => {
  return codes.includes(code)
};

export const isBackspaceKey = (code: string, reference: string): boolean => {
  return code === reference;
};