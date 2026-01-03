import { FormData, FormErrors } from "../types/form";

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateForm = (formData: FormData) => {
  const errors: FormErrors = {};

  if (!formData.name.trim()) errors.name = "الاسم مطلوب";

  if (!formData.email) {
    errors.email = "البريد الإلكتروني مطلوب";
  } else if (!validateEmail(formData.email)) {
    errors.email = "البريد الإلكتروني غير صحيح";
  }

  if (!formData.password) errors.password = "كلمة المرور مطلوبة";

  if (!formData.confirmPassword) {
    errors.confirmPassword = "تأكيد كلمة المرور مطلوب";
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "كلمات المرور غير متطابقة";
  }

  return errors;
};
