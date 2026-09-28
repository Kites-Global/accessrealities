"use server";

import { saveFloorPlan } from "@/lib/admin/storage";
import { isTower, towerLabel } from "@/lib/floorPlans";

const MAX_BYTES = 15 * 1024 * 1024;

export type FloorPlanUploadState = { error?: string; success?: string };

export async function uploadFloorPlan(
  _prevState: FloorPlanUploadState | undefined,
  formData: FormData,
): Promise<FloorPlanUploadState> {
  const tower = formData.get("tower");
  if (!isTower(tower)) {
    return { error: "Unknown tower." };
  }

  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "Please choose a PDF file." };
  }
  if (file.type !== "application/pdf") {
    return { error: "File must be a PDF." };
  }
  if (file.size > MAX_BYTES) {
    return { error: `PDF must be under ${Math.round(MAX_BYTES / (1024 * 1024))}MB.` };
  }

  await saveFloorPlan(file, tower);

  return { success: `${towerLabel(tower)} floor plan updated.` };
}
