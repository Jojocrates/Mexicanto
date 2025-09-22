export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white shadow-lg rounded-xl border p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-xl font-bold">{children}</h3>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`space-y-2 ${className}`}>{children}</div>;
}
