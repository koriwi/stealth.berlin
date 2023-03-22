export const iff = (condition: boolean, then: any, otherwise: any) => {
  return condition ? then : otherwise;
};

export const cleanName = (name: string) => {
  const noUnderscore = iff(name.startsWith("_"), name.slice(1), name);
  const cleanText = noUnderscore[0].toUpperCase() + noUnderscore.slice(1);
  return cleanText;
};
