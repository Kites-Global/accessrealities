"use client";

import "./admin.css";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="admin-login-wrap">
      <div className="admin-login-card">
        <h1>Something went wrong</h1>
        <div className="admin-error">{error.message || "Unexpected error."}</div>
        <button type="button" className="admin-btn" onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  );
}
