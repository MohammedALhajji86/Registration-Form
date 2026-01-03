interface Props {
  show: boolean;
}

export default function SuccessMessage({ show }: Props) {
  if (!show) return null;

  return (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center text-green-700 font-medium">
      تم التسجيل بنجاح!
    </div>
  );
}
