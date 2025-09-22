export function Button({ children, onClick, className = "", disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg font-semibold transition-colors
        ${disabled ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}
        ${className}`}
    >
      {children}
    </button>
  );
}
