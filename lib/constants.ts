/**
 * Application-wide constants
 */

// Course Structure
export const MAX_LESSONS = 7;
export const LESSON_IDS = Array.from({ length: MAX_LESSONS }, (_, i) => i + 1);

// AI Analysis Limits
export const MAX_FEAR_ANALYSES = 5;
export const MAX_FEAR_DESCRIPTION_LENGTH = 750;

// Rate Limiting
export const DEFAULT_RATE_LIMIT_REQUESTS = 10;
export const DEFAULT_RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

// Timeout Settings
export const AUTH_LOADING_TIMEOUT_MS = 5000; // 5 seconds

// Payment
export const COURSE_PRICE_CENTS = 999; // $9.99 in cents
export const COURSE_PRICE_DISPLAY = '$9.99';
export const COURSE_PRICE_REGULAR = '$29.99'; // Regular price for display
