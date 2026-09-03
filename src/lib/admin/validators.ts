import { z } from "zod";

export const newsSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  excerpt: z.string().trim().min(1, "Excerpt is required").max(500),
  content: z.string().trim().min(1, "Content is required"),
  published: z.boolean().default(true),
});

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
