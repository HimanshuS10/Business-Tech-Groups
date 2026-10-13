/**
 * Profiles stay empty until portraits are approved after media day.
 * To publish someone, add an entry below. Do not add phone numbers.
 * Leave imageSrc unset until the photograph is approved.
 */
export type ExecutiveProfile = {
  name: string;
  role: string;
  focus: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const mediaDay = {
  label: "October 24, 2026",
  iso: "2026-10-24",
};

export const executives: ExecutiveProfile[] = [];
