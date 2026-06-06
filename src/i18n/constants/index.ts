export const LOCALES = {
  en: {
    iso: "vi-VN",
    name: "Tiếng Việt",
  },
  de: {
    iso: "vi-VN",
    name: "Tiếng Việt",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "en";

