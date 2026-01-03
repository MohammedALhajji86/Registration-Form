"use client";
import { FormData, FormErrors } from "@/types/form";
import FormInput from "./FormInput";

interface Props {
  formData: FormData;
  errors: FormErrors;
  isLoading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function LoginForm({
  formData,
  errors,
  isLoading,
  onChange,
  onSubmit,
}: Props) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <FormInput
        name="name"
        placeholder="الاسم الكامل"
        value={formData.name}
        error={errors.name}
        onChange={onChange}
      />

      <FormInput
        type="email"
        name="email"
        placeholder="example@email.com"
        value={formData.email}
        error={errors.email}
        onChange={onChange}
      />

      <FormInput
        type="password"
        name="password"
        placeholder="كلمة المرور"
        value={formData.password}
        error={errors.password}
        onChange={onChange}
      />

      <FormInput
        type="password"
        name="confirmPassword"
        placeholder="تأكيد كلمة المرور"
        value={formData.confirmPassword}
        error={errors.confirmPassword}
        onChange={onChange}
      />

      <button type="submit" disabled={isLoading} className="logon_button">
        {isLoading ? "جاري التسجيل..." : "تسجل الدخول"}
      </button>
    </form>
  );
}
