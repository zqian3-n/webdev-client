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
        {[1, 2, 3, 4, 5].map((n) => (
          <li key={n}>
            <Link
              id={n === 4 ? "wd-lab4-link" : undefined}
              href={`/labs/lab${n}`}
            >
              Lab {n}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" id="wd-kambaz-link">
        Kambaz
      </Link>
    </div>
  );
}
