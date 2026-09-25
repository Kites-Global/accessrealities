import { z } from "zod";

const recaptchaToken = z.string().min(1, "Please complete the reCAPTCHA");

export const officeInquirySchema = z.object({
  type: z.literal("office"),
  businessName: z.string().trim().min(1, "Business name is required"),
  name: z.string().trim().min(1, "Your name is required"),
  phone: z.string().trim().min(1, "Phone number is required"),
  natureOfBusiness: z.string().trim().min(1, "Nature of business is required"),
  email: z.string().trim().email("Enter a valid email"),
  size: z.string().trim().optional(),
  requirements: z.string().trim().optional(),
  downloadFloorPlan: z.boolean().optional(),
  recaptchaToken,
});

export const facilitiesInquirySchema = z.object({
  type: z.literal("facilities"),
  name: z.string().trim().min(1, "Your name is required"),
  phone: z.string().trim().min(1, "Phone number is required"),
  nature: z.string().trim().min(1, "Nature of requirement is required"),
  email: z.string().trim().email("Enter a valid email"),
  requirements: z.string().trim().optional(),
  recaptchaToken,
});

export const westTowerInquirySchema = z.object({
  type: z.literal("west-tower"),
  name: z.string().trim().min(1, "Your name is required"),
  phone: z.string().trim().min(1, "Phone number is required"),
  email: z.string().trim().email("Enter a valid email"),
  requirements: z.string().trim().optional(),
  recaptchaToken,
});

export const contactInquirySchema = z.object({
  type: z.literal("contact"),
  name: z.string().trim().min(1, "Your name is required"),
  phone: z.string().trim().min(1, "Phone number is required"),
  email: z.string().trim().email("Enter a valid email"),
  company: z.string().trim().optional(),
  message: z.string().trim().min(1, "Message is required"),
  recaptchaToken,
});

export const inquirySchema = z.discriminatedUnion("type", [
  officeInquirySchema,
  facilitiesInquirySchema,
  westTowerInquirySchema,
  contactInquirySchema,
]);

export type InquiryInput = z.infer<typeof inquirySchema>;
