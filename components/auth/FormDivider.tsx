export default function FormDivider() {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/20"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-3 bg-gray-800 text-gray-400">Or continue with email</span>
      </div>
    </div>
  );
}