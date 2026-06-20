const rawBase = import.meta.env.BASE_URL || "/";

export const basePath = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

export const stripBasePath = (pathname: string) => {
  if (!basePath) return pathname || "/";
  if (pathname === basePath) return "/";
  if (pathname.startsWith(`${basePath}/`)) return pathname.slice(basePath.length) || "/";
  return pathname || "/";
};

export const withBasePath = (path: string) => {
  if (!path.startsWith("/")) return path;
  if (!basePath) return path;
  if (path === basePath || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path === "/" ? "" : path}`;
};
