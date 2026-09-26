import Link from "next/link";
export default function TOC() {
  return (
    <nav id="wd-labs-toc">
      <Link href="/" id="wd-toc-kambaz-link">
        Kambaz
      </Link>
      <br />
      <Link href="/labs">Labs</Link>
      <br />
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n}>
          <Link
            id={n === 4 ? "wd-toc-lab4-link" : undefined}
            href={`/labs/lab${n}`}
          >
            Lab {n}
          </Link>
          <br />
        </span>
      ))}
      <Link
        id="wd-toc-book-link"
        href="https://webdev-client.vercel.app/book/ch1"
      >
        Chapter 1
      </Link>
      <p>Zhihao Qian - learning web development</p>
    </nav>
  );
}
