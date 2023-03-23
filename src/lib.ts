export const iff = (condition: boolean, then: any, otherwise: any) => {
  return condition ? then : otherwise;
};

export const cleanName = (name: string) => {
  const noUnderscore = iff(
    name.startsWith("_") || name.startsWith("/"),
    name.slice(1),
    name
  );
  const cleanText = noUnderscore[0].toUpperCase() + noUnderscore.slice(1);
  return cleanText;
};
export const twSizes = (sizes: { sm?: number; md?: number; lg?: number }) => {
  const { sm, md, lg } = sizes;
  const fallback = [sm, md, lg]
    .filter((size) => size !== undefined)
    .sort((a, b) => a! - b!)
    .at(-1);
  if (fallback === undefined) throw new Error("No size provided");
  return (
    `(max-width: 767px) ${sm ?? fallback}px,` +
    `(max-width: 1023px) ${md ?? fallback}px,` +
    `${lg ?? fallback}px`
  );
};
