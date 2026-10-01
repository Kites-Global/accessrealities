import { mediaSrc } from "@/lib/admin/media";
import SubmitButton from "../components/SubmitButton";

type VacancyFormProps = {
  action: (formData: FormData) => void | Promise<void>;
  defaultValues?: {
    title: string;
    isOpen: boolean;
  };
  currentDocumentUrl?: string;
  /** Only the edit form shows the open/closed toggle — new vacancies always start open. */
  showStatus?: boolean;
  /** New vacancies require a PDF; editing lets you keep the existing one instead. */
  documentRequired?: boolean;
  submitLabel: string;
};

export default function VacancyForm({
  action,
  defaultValues,
  currentDocumentUrl,
  showStatus = false,
  documentRequired = true,
  submitLabel,
}: VacancyFormProps) {
  return (
    <form action={action} className="admin-form">
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" defaultValue={defaultValues?.title} required />

      <label htmlFor="document">Vacancy Document (PDF, max 5MB)</label>
      <input id="document" name="document" type="file" accept=".pdf,application/pdf" required={documentRequired} />
      {currentDocumentUrl && (
        <p style={{ margin: "4px 0" }}>
          Current document:{" "}
          <a href={mediaSrc(currentDocumentUrl) ?? currentDocumentUrl} target="_blank" rel="noopener noreferrer">
            View
          </a>
          {" — choose a new file above to replace it."}
        </p>
      )}

      {showStatus && (
        <label className="admin-checkbox">
          <input type="checkbox" name="isOpen" defaultChecked={defaultValues?.isOpen ?? true} />
          Open for applications
        </label>
      )}

      <div className="admin-form-actions">
        <SubmitButton>{submitLabel}</SubmitButton>
      </div>
    </form>
  );
}
