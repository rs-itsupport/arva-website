import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center" data-reveal="up">
        <h1 className="text-7xl font-bold font-serif text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-navy text-navy-foreground px-6 py-2.5 text-xs uppercase tracking-wider transition-colors hover:bg-navy/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
