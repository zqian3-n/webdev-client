import Link from "next/link";
export default function NotFound() {
  return (
    <div id="wd-not-found">
      <h2>Page Not Found</h2>
      <p>This page is not available yet.</p>
      <Link id="wd-not-found-dashboard-link" href="/dashboard">
        Back to Dashboard
      </Link>
    </div>
  );
}
