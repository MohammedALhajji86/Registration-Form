"use client";
import LoginForm from "@/components/LoginForm";
import SuccessMessage from "@/components/SuccessMessage";
import { useLoginForm } from "@/hooks/useLoginForm";

export default function Home() {
  const { formData, errors, success, isLoading, handleChange, handleSubmit } =
    useLoginForm();
  return (
    <main>
      <div className="auth_gradient_background" dir="rtl">
        <div className="auth_container">
          <div className="text-center mb-8">
            <h1 className="login_title">تسجيل الدخول</h1>
          </div>
          <SuccessMessage show={success} />
          <LoginForm
            formData={formData}
            errors={errors}
            isLoading={isLoading}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </main>
  );
}
