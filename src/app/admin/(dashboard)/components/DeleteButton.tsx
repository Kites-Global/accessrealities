"use client";

import { useEffect, useRef, useState } from "react";
import SubmitButton from "./SubmitButton";

type DeleteButtonProps = {
  action: (formData: FormData) => void | Promise<void>;
  confirmMessage: string;
};

export default function DeleteButton({ action, confirmMessage }: DeleteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const confirmedRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;
    cancelRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (confirmedRef.current) return;
    e.preventDefault();
    setIsOpen(true);
  }

  function handleConfirm() {
    confirmedRef.current = true;
    setIsOpen(false);
    formRef.current?.requestSubmit();
  }

  return (
    <>
      <form ref={formRef} action={action} onSubmit={handleSubmit}>
        <SubmitButton className="admin-btn admin-btn-danger">Delete</SubmitButton>
      </form>

      {isOpen && (
        <div className="admin-modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="admin-modal"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="admin-modal-message"
            onClick={(e) => e.stopPropagation()}
          >
            <p id="admin-modal-message" className="admin-modal-message">
              {confirmMessage}
            </p>
            <div className="admin-modal-actions">
              <button ref={cancelRef} type="button" className="admin-btn admin-btn-secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button type="button" className="admin-btn admin-btn-danger" onClick={handleConfirm}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
