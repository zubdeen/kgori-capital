"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          color: "#0b0b0c",
          fontFamily: "system-ui, -apple-system, Segoe UI, Arial, sans-serif",
          padding: "2rem",
        }}
      >
        <main style={{ maxWidth: "34rem" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#6e1a26",
            }}
          >
            Kgori Capital
          </p>
          <h1 style={{ margin: "1rem 0 0", fontSize: "2.25rem", lineHeight: 1.05 }}>
            The site could not load.
          </h1>
          <p style={{ margin: "1rem 0 0", color: "#5c5c61", lineHeight: 1.7 }}>
            Please try again. If the problem continues, call +267 3915990 or email
            info@kgoricapital.com.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "1.75rem",
              border: 0,
              background: "#6e1a26",
              color: "#ffffff",
              padding: "0.9rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
          <p style={{ marginTop: "1.5rem", fontSize: "0.75rem", color: "#5c5c61" }}>
            {error.digest ? `Reference: ${error.digest}` : null}
          </p>
        </main>
      </body>
    </html>
  );
}
