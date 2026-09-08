import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
          404
        </p>
        <h1
          className="font-display mt-4 text-4xl font-bold"
          style={{ color: "var(--text)" }}
        >
          Page Not Found
        </h1>
        <p className="mt-4" style={{ color: "var(--text-muted)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-xl px-6 py-3 text-sm font-semibold transition-all hover:scale-105"
          style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
        >
          ← Back Home
        </Link>
      </div>
    </div>
  );
}
