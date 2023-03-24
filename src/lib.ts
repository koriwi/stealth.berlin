export const iff = (condition: boolean, then: any, otherwise: any) => {
  return condition ? then : otherwise;
};

export const cleanName = (name: string) => {
  const noUnderscore: string = iff(
    name.startsWith("_") || name.startsWith("/"),
    name.slice(1),
    name
  );
  return noUnderscore.split("_").map(elem => elem[0].toUpperCase()+elem.slice(1)).join("-")
};
export const twSizes = (sizes: { sm?: number; md?: number; lg?: number }) => {
  const { sm, md, lg } = sizes;
  const fallback = [sm, md, lg]
    .filter((size) => size !== undefined)
    .sort((a, b) => a! - b!)
    .at(-1);
  if (fallback === undefined) throw new Error("No size provided");
  return (
    `(max-width: 639) ${sm ?? fallback}px,` +
    `(max-width: 767px) ${md ?? fallback}px,` +
    `(max-width: 1023px) ${lg ?? fallback}px,` +
    `1x`
  );
};
