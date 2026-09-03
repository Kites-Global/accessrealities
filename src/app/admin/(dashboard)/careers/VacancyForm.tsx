import RichTextEditor from "../components/RichTextEditor";

type VacancyFormProps = {
  action: (formData: FormData) => void | Promise<void>;
  defaultValues?: {
    title: string;
    location: string | null;
    description: string;
    isOpen: boolean;
  };
  submitLabel: string;
};

export default function VacancyForm({ action, defaultValues, submitLabel }: VacancyFormProps) {
  return (
    <form action={action} className="admin-form">
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" defaultValue={defaultValues?.title} required />

      <label htmlFor="location">Location</label>
      <input id="location" name="location" type="text" defaultValue={defaultValues?.location ?? ""} />

      <label htmlFor="description">Description</label>
      <RichTextEditor
        name="description"
        defaultValue={defaultValues?.description}
        placeholder="Describe the role, responsibilities and requirements…"
        imageContext="vacancy"
      />

      <label className="admin-checkbox">
        <input type="checkbox" name="isOpen" defaultChecked={defaultValues?.isOpen ?? true} />
        Open for applications
      </label>

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
