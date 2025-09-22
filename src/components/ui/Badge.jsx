export function Badge({ children, className = "" }) {
  return (
    <span className={`px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 ${className}`}>
      {children}
    </span>
  );
}
