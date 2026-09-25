"use client";

import { useActionState } from "react";
import { uploadFloorPlan } from "@/lib/admin/actions/floorPlans";
import type { Tower } from "@/lib/floorPlans";

export default function FloorPlanUploadForm({ tower, uploaded }: { tower: Tower; uploaded: boolean }) {
  const [state, formAction, pending] = useActionState(uploadFloorPlan, undefined);

  return (
    <form action={formAction} className="admin-form">
      <input type="hidden" name="tower" value={tower} />
      {state?.error && <div className="admin-error">{state.error}</div>}
      {state?.success && <div className="admin-success">{state.success}</div>}
      {!state && (
        <p style={{ margin: "0 0 8px", opacity: 0.75 }}>
          {uploaded ? "A PDF is already uploaded — choosing a new one replaces it." : "No PDF uploaded yet."}
        </p>
      )}

      <input type="file" name="file" accept="application/pdf" required />

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn" disabled={pending}>
          {pending ? "Uploading…" : "Upload"}
        </button>
      </div>
    </form>
  );
}
