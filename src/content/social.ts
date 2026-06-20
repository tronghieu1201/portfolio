export const social = [
  { url: "mailto:tronghieu.dev16@gmail.com", name: "mail" },
  { url: "https://github.com/tronghieu1201", name: "github" },
  { url: "https://www.linkedin.com/in/tronghieu-dev/", name: "linkedin" },
  { url: "https://www.facebook.com/", name: "facebook" },
] as const satisfies { url: string; name: "mail" | "github" | "linkedin" | "facebook" }[];
