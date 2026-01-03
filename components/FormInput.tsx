"use client";
import { useState } from "react";
import ShowPasswordIcon from "./icons/ShowPasswordIcon";
import HidePasswordIcons from "./icons/HidePasswordIcons";

interface Props {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  type = "text",
  name,
  placeholder,
  value,
  error,
  onChange,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div>
      <div className="relative">
        <input
          type={inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full h-14 px-4 border rounded-xl pr-12 text-right"
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute left-4 inset-y-0 flex items-center"
          >
            {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcons />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1 text-right">{error}</p>}
    </div>
  );
}
