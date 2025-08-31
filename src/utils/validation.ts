// src/utils/validation.ts
export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const isValidName = (name: string): boolean => {
  return name.trim().length >= 2
}

export const isValidOrganization = (org: string): boolean => {
  return org.trim().length >= 2
}
