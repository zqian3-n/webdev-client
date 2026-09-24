import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <input id="wd-username" placeholder="username" aria-label="Username" />
      <br />
      <input
        id="wd-password"
        type="password"
        placeholder="password"
        aria-label="Password"
      />
      <br />
      <input
        id="wd-password-verify"
        type="password"
        placeholder="verify password"
        aria-label="Verify password"
      />
      <br />
      <Link href="/account/profile">Sign up</Link>
      <br />
      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}
