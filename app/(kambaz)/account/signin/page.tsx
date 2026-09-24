import Link from "next/link";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input id="wd-username" placeholder="username" aria-label="Username" />
      <br />
      <input
        id="wd-password"
        type="password"
        placeholder="password"
        aria-label="Password"
      />
      <br />
      <Link href="/dashboard" id="wd-signin-btn">
        Sign in
      </Link>
      <br />
      <Link href="/account/signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
