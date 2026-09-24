"use client";

import { useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { uploadContentImage } from "@/lib/admin/actions/uploads";

type ImageContext = "news" | "vacancy";

type RichTextEditorProps = {
  name: string;
  defaultValue?: string;
  placeholder?: string;
  imageContext?: ImageContext;
};

const CONTENT_IMAGE_LIMITS: Record<ImageContext, number> = {
  news: 800 * 1024,
  vacancy: 1024 * 1024,
};

export default function RichTextEditor({
  name,
  defaultValue,
  placeholder,
  imageContext = "news",
}: RichTextEditorProps) {
  const maxImageBytes = CONTENT_IMAGE_LIMITS[imageContext];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const [isSource, setIsSource] = useState(false);
  const [sourceValue, setSourceValue] = useState("");

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ link: { openOnClick: false } }),
      Image,
      Placeholder.configure({ placeholder: placeholder ?? "Write something…" }),
    ],
    content: defaultValue || "",
    editorProps: {
      attributes: { class: "rte-content" },
      handleDrop: (_view, event) => {
        const file = event.dataTransfer?.files?.[0];
        if (file && file.type.startsWith("image/")) {
          event.preventDefault();
          void insertImage(file);
          return true;
        }
        return false;
      },
      handlePaste: (_view, event) => {
        const file = Array.from(event.clipboardData?.files ?? []).find((f) =>
          f.type.startsWith("image/"),
        );
        if (file) {
          event.preventDefault();
          void insertImage(file);
          return true;
        }
        return false;
      },
    },
    onUpdate: ({ editor }) => {
      if (hiddenInputRef.current) hiddenInputRef.current.value = editor.getHTML();
    },
  });

  async function insertImage(file: File) {
    if (!editor) return;
    if (file.size > maxImageBytes) {
      window.alert(`Image must be under ${Math.round(maxImageBytes / 1024)}KB.`);
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("context", imageContext);
    const result = await uploadContentImage(formData);
    if ("url" in result) {
      editor.chain().focus().setImage({ src: result.url }).run();
    } else {
      window.alert(result.error);
    }
  }

  function handleFilePick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) void insertImage(file);
    e.target.value = "";
  }

  function toggleSource() {
    if (!editor) return;
    if (isSource) {
      editor.commands.setContent(sourceValue);
      if (hiddenInputRef.current) hiddenInputRef.current.value = sourceValue;
      setIsSource(false);
    } else {
      setSourceValue(editor.getHTML());
      setIsSource(true);
    }
  }

  function handleSourceChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setSourceValue(e.target.value);
    if (hiddenInputRef.current) hiddenInputRef.current.value = e.target.value;
  }

  function setLink() {
    if (!editor) return;
    const previousUrl = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Link URL", previousUrl ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }

  if (!editor) return null;

  return (
    <div className="rte">
      <div className="rte-toolbar">
        <fieldset disabled={isSource} className="rte-toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <em>I</em>
          </button>
          <span className="rte-divider" />
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
          >
            H2
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
          >
            H3
          </button>
          <span className="rte-divider" />
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            • List
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            1. List
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            “ Quote
          </button>
          <span className="rte-divider" />
          <button
            type="button"
            onClick={setLink}
            className={editor.isActive("link") ? "is-active" : ""}
          >
            Link
          </button>
          <button type="button" onClick={() => fileInputRef.current?.click()}>
            Image
          </button>
          <span className="rte-divider" />
          <button type="button" onClick={() => editor.chain().focus().undo().run()}>
            Undo
          </button>
          <button type="button" onClick={() => editor.chain().focus().redo().run()}>
            Redo
          </button>
        </fieldset>
        <span className="rte-divider" />
        <button
          type="button"
          onClick={toggleSource}
          className={isSource ? "is-active" : ""}
          title="View/edit raw HTML"
        >
          {"</>"} HTML
        </button>
      </div>

      {isSource ? (
        <textarea
          className="rte-source"
          value={sourceValue}
          onChange={handleSourceChange}
          spellCheck={false}
        />
      ) : (
        <EditorContent editor={editor} />
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFilePick}
        style={{ display: "none" }}
      />
      <input ref={hiddenInputRef} type="hidden" name={name} defaultValue={defaultValue || ""} />
    </div>
  );
}
