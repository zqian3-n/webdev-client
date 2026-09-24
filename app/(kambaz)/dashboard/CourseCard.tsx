import Link from "next/link";
export default function CourseCard({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="wd-dashboard-course"
      style={{ border: "1px solid #ccc", width: 250, margin: 10, padding: 12 }}
    >
      <h3 className="wd-dashboard-course-title">{title}</h3>
      <p>{description}</p>
      <Link href={`/courses/${id}/home`}>Go</Link>
    </div>
  );
}
