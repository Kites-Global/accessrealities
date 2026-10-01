"use client";

import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export default function SubmitButton({ children, disabled, className = "admin-btn" }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={className} disabled={pending || disabled} aria-busy={pending}>
      {pending ? "Saving…" : children}
    </button>
  );
}
