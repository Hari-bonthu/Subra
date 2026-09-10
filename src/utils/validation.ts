/**
 * Validation utilities for Subra House Service forms
 */

/**
 * Validates whether an input string is a valid Indian mobile number.
 * Supports:
 * - 10-digit mobile starting with 6, 7, 8, or 9 (e.g. 9876543210)
 * - Country code prefixed numbers (e.g. +91 9876543210 or 919876543210)
 * - Trunk prefix 0 (e.g. 09876543210)
 */
export const isValidIndianPhone = (val: string): boolean => {
  if (!val) return false;
  const digits = val.replace(/\D/g, '');
  if (digits.length === 10) {
    return /^[6-9]\d{9}$/.test(digits);
  }
  if (digits.length === 12 && digits.startsWith('91')) {
    return /^[6-9]\d{9}$/.test(digits.slice(2));
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return /^[6-9]\d{9}$/.test(digits.slice(1));
  }
  return false;
};

/**
 * Formats a valid 10-digit number to standard readable Indian format (+91 XXXXX XXXXX)
 */
export const formatIndianPhone = (val: string): string => {
  const digits = val.replace(/\D/g, '').slice(-10);
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return val.trim();
};
