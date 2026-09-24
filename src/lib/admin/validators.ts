import { z } from "zod";

export const newsSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  excerpt: z.string().trim().min(1, "Excerpt is required").max(500),
  content: z.string().trim().min(1, "Content is required"),
  publishedAt: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date is required")
    // Parsed without a timezone suffix so the stored day matches the day picked.
    .transform((value) => new Date(`${value}T00:00:00`))
    .refine((date) => !Number.isNaN(date.getTime()), "Enter a valid date"),
  published: z.boolean().default(true),
});

/** Formats a date for an <input type="date"> value (local time, not UTC). */
export function toDateInputValue(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

export const vacancySchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  location: z.string().trim().optional(),
  description: z.string().trim().min(1, "Description is required"),
  isOpen: z.boolean().default(true),
});

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(8, "New password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New passwords do not match",
    path: ["confirmPassword"],
  });

export const applicationSchema = z.object({
  vacancyId: z.string().min(1),
  name: z.string().trim().min(1, "Name is required"),
  phone: z.string().trim().min(1, "Phone number is required"),
  email: z.string().trim().email("Enter a valid email address"),
});

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
