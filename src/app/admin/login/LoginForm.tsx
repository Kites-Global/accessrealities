"use client";

import { useActionState } from "react";
import { login } from "@/lib/admin/actions/auth";

export default function LoginForm() {
  const [error, formAction, pending] = useActionState(login, undefined);

  return (
    <form action={formAction} className="admin-form">
      {error && <div className="admin-error">{error}</div>}

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required autoFocus />

      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" required />

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn" disabled={pending}>
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </div>
    </form>
  );
}
