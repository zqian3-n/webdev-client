import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <p>Zhihao Qian</p>
      <a id="wd-github" href="https://github.com/zqian3-n/webdev-client">
        My GitHub repository
      </a>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">
            Lab 4
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
      </ul>
      {/* The shared TOC already supplies wd-kambaz-link on this page. */}
      <Link href="/">Kambaz</Link>
    </div>
  );
}
