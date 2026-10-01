"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

type Option = {
  value: string;
  label: string;
  tone: "positive" | "neutral";
};

type StatusToggleProps = {
  id: string;
  value: string;
  options: [Option, Option];
  onChange: (id: string, value: string) => Promise<void>;
};

export default function StatusToggle({ id, value, options, onChange }: StatusToggleProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleChange(next: string) {
    if (next === value || isPending) return;
    startTransition(async () => {
      await onChange(id, next);
      router.refresh();
    });
  }

  return (
    <div className={`status-toggle${isPending ? " status-toggle-pending" : ""}`} role="radiogroup">
      {options.map((option) => (
        <label
          key={option.value}
          className={`status-toggle-option status-toggle-${option.tone}${
            value === option.value ? " is-active" : ""
          }`}
        >
          <input
            type="radio"
            name={`status-${id}`}
            value={option.value}
            checked={value === option.value}
            onChange={() => handleChange(option.value)}
            disabled={isPending}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
