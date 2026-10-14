/**
 * Add an approved executive here to publish them.
 * Leave the list empty until a name, role, and any portrait are approved.
 * Do not add phone numbers.
 */
export type ExecutiveProfile = {
  name: string;
  role: string;
  imageSrc?: string;
  imageAlt?: string;
  linkedIn?: string;
  biography?: string;
};

export const executives: ExecutiveProfile[] = [];
