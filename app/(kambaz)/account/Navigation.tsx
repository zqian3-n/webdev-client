"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AccountNavigation() {
  const pathname = usePathname();
  return (
    <div id="wd-account-navigation" className="wd list-group text-lg">
      <Link
        href="/account/signin"
        className={
          pathname === "/account/signin"
            ? "list-group-item active"
            : "list-group-item"
        }
      >
        Signin
      </Link>
      <Link
        href="/account/signup"
        className={
          pathname === "/account/signup"
            ? "list-group-item active"
            : "list-group-item"
        }
      >
        Signup
      </Link>
      <Link
        href="/account/profile"
        className={
          pathname === "/account/profile"
            ? "list-group-item active"
            : "list-group-item"
        }
      >
        Profile
      </Link>
    </div>
  );
}
