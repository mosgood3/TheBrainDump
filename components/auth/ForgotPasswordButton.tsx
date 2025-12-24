interface ForgotPasswordButtonProps {
  onClick: () => void;
}

export default function ForgotPasswordButton({ onClick }: ForgotPasswordButtonProps) {
  return (
    <div className="mt-4 text-center">
      <button
        onClick={onClick}
        className="text-sm text-blue-400 hover:text-blue-300"
        type="button"
      >
        Forgot your password?
      </button>
    </div>
  );
}