import Link from "next/link";
export default function Navigation({ cid }: { cid: string }) {
  return (
    <nav id="wd-courses-navigation">
      {[
        ["home", "Home"],
        ["modules", "Modules"],
        ["piazza", "Piazza"],
        ["zoom", "Zoom"],
        ["assignments", "Assignments"],
        ["quizzes", "Quizzes"],
        ["grades", "Grades"],
        ["people/table", "People"],
      ].map(([path, label]) => (
        <div key={path}>
          <Link
            id={`wd-course-${path.split("/")[0]}-link`}
            href={`/courses/${cid}/${path}`}
          >
            {label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
