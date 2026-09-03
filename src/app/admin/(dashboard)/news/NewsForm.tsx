"use client";

import { useState } from "react";
import RichTextEditor from "../components/RichTextEditor";

const MAX_THUMBNAIL_BYTES = 800 * 1024;
const THUMBNAIL_WIDTH = 640;
const THUMBNAIL_HEIGHT = 427;

type NewsFormProps = {
  action: (formData: FormData) => void | Promise<void>;
  defaultValues?: {
    title: string;
    excerpt: string;
    content: string;
    published: boolean;
    imageUrl: string | null;
  };
  submitLabel: string;
};

export default function NewsForm({ action, defaultValues, submitLabel }: NewsFormProps) {
  const [imageError, setImageError] = useState<string | null>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setImageError(null);
      return;
    }

    if (file.size > MAX_THUMBNAIL_BYTES) {
      setImageError("Thumbnail image must be under 800KB");
      e.target.value = "";
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      if (img.naturalWidth !== THUMBNAIL_WIDTH || img.naturalHeight !== THUMBNAIL_HEIGHT) {
        setImageError(
          `Thumbnail image must be exactly ${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT} pixels (got ${img.naturalWidth}x${img.naturalHeight})`
        );
        e.target.value = "";
      } else {
        setImageError(null);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      setImageError("Couldn't read that image file");
      e.target.value = "";
    };
    img.src = objectUrl;
  }

  return (
    <form action={action} className="admin-form">
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" defaultValue={defaultValues?.title} required />

      <label htmlFor="excerpt">Excerpt</label>
      <textarea
        id="excerpt"
        name="excerpt"
        maxLength={500}
        defaultValue={defaultValues?.excerpt}
        required
        style={{ minHeight: "80px" }}
      />

      <label htmlFor="content">Content</label>
      <RichTextEditor name="content" defaultValue={defaultValues?.content} placeholder="Write the full story…" />

      <label htmlFor="image">Thumbnail image {defaultValues ? "(leave empty to keep current)" : ""}</label>
      {defaultValues?.imageUrl && (
        <p style={{ fontSize: "0.85rem", color: "#8a8a92" }}>Current: {defaultValues.imageUrl}</p>
      )}
      <p style={{ fontSize: "0.85rem", color: "#8a8a92" }}>
        Must be exactly {THUMBNAIL_WIDTH}x{THUMBNAIL_HEIGHT}px and under 800KB.
      </p>
      <input id="image" name="image" type="file" accept="image/*" onChange={handleImageChange} />
      {imageError && <div className="admin-error">{imageError}</div>}

      <label className="admin-checkbox">
        <input type="checkbox" name="published" defaultChecked={defaultValues?.published ?? true} />
        Published
      </label>

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn" disabled={!!imageError}>
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
