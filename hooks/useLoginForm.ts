"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { FormData, FormErrors } from "../types/form";
import { validateForm } from "../utils/validation";

export const useLoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((p) => ({
      ...p,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((p) => ({ ...p, [name]: "" }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsLoading(true);

    setTimeout(() => {
      setSuccess(true);
      setIsLoading(false);

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setSuccess(false);
      }, 1000);
    }, 500);
  };

  return {
    formData,
    errors,
    success,
    isLoading,
    handleChange,
    handleSubmit,
  };
};
