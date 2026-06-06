export const social = [
  { url: "mailto:tronghieu1201@example.com", name: "mail" },
  { url: "https://github.com/tronghieu1201", name: "github" },
  { url: "https://www.linkedin.com/", name: "linkedin" },
  { url: "https://x.com/", name: "x" },
  //{ url: "https://www.instagram.com/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
