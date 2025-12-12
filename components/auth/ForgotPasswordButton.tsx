interface ForgotPasswordButtonProps {
  onClick: () => void;
}

export default function ForgotPasswordButton({ onClick }: ForgotPasswordButtonProps) {
  return (
    <div className="mt-4 text-center">
      <button
        onClick={onClick}
        className="text-sm text-blue-600 hover:text-blue-500"
        type="button"
      >
        Forgot your password?
      </button>
    </div>
  );
}