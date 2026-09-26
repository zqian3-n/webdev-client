"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default function CourseCard({
  id,
  title,
  description,
  image,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
}) {
  const router = useRouter();
  return (
    <div
      className="wd-dashboard-course"
      style={{ border: "1px solid #ccc", width: 250, margin: 10, padding: 12 }}
    >
      <Link className="wd-dashboard-course-link" href={`/courses/${id}/home`}>
        <Image src={image} width={200} height={150} alt={title} />
        <h3>{title}</h3>
      </Link>
      <p className="wd-dashboard-course-title">{description}</p>
      <button type="button" onClick={() => router.push(`/courses/${id}/home`)}>
        Go
      </button>
    </div>
  );
}
