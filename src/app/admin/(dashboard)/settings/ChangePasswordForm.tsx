"use client";

import { useActionState } from "react";
import { changePassword } from "@/lib/admin/actions/auth";

export default function ChangePasswordForm() {
  const [state, formAction, pending] = useActionState(changePassword, undefined);

  return (
    <form action={formAction} className="admin-form">
      {state?.error && <div className="admin-error">{state.error}</div>}
      {state?.success && <div className="admin-success">{state.success}</div>}

      <label htmlFor="currentPassword">Current password</label>
      <input id="currentPassword" name="currentPassword" type="password" required autoComplete="current-password" />

      <label htmlFor="newPassword">New password</label>
      <input
        id="newPassword"
        name="newPassword"
        type="password"
        required
        minLength={8}
        autoComplete="new-password"
      />

      <label htmlFor="confirmPassword">Confirm new password</label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        required
        minLength={8}
        autoComplete="new-password"
      />

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn" disabled={pending}>
          {pending ? "Updating…" : "Update password"}
        </button>
      </div>
    </form>
  );
}
