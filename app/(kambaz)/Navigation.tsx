import Link from "next/link";
export default function Navigation() {
  return (
    <nav id="wd-kambaz-navigation">
      <a id="wd-neu-link" href="https://www.northeastern.edu">
        Northeastern
      </a>
      <br />
      <Link id="wd-account-link" href="/account">
        Account
      </Link>
      <br />
      <Link id="wd-dashboard-link" href="/dashboard">
        Dashboard
      </Link>
      <br />
      <Link id="wd-course-link" href="/dashboard">
        Courses
      </Link>
      <br />
      <Link id="wd-calendar-link" href="/calendar">
        Calendar
      </Link>
      <br />
      <Link id="wd-inbox-link" href="/inbox">
        Inbox
      </Link>
      <br />
      <Link id="wd-labs-link" href="/labs">
        Labs
      </Link>
    </nav>
  );
}
