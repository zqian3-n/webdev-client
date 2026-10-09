"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group rounded-none text-lg"
    >
      <Link
        href={`/courses/${cid}/home`}
        id="wd-course-home-link"
        className={
          pathname === `/courses/${cid}/home` ||
          pathname?.startsWith(`/courses/${cid}/home/`)
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Home
      </Link>
      <Link
        href={`/courses/${cid}/modules`}
        id="wd-course-modules-link"
        className={
          pathname === `/courses/${cid}/modules` ||
          pathname?.startsWith(`/courses/${cid}/modules/`)
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Modules
      </Link>
      <Link
        href={`/courses/${cid}/piazza`}
        id="wd-course-piazza-link"
        className={
          pathname === `/courses/${cid}/piazza` ||
          pathname?.startsWith(`/courses/${cid}/piazza/`)
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Piazza
      </Link>
      <Link
        href={`/courses/${cid}/zoom`}
        id="wd-course-zoom-link"
        className={
          pathname === `/courses/${cid}/zoom` ||
          pathname?.startsWith(`/courses/${cid}/zoom/`)
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Zoom
      </Link>
      <Link
        href={`/courses/${cid}/assignments`}
        id="wd-course-assignments-link"
        className={
          pathname === `/courses/${cid}/assignments` ||
          pathname?.startsWith(`/courses/${cid}/assignments/`)
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Assignments
      </Link>
      <Link
        href={`/courses/${cid}/quizzes`}
        id="wd-course-quizzes-link"
        className={
          pathname === `/courses/${cid}/quizzes` ||
          pathname?.startsWith(`/courses/${cid}/quizzes/`)
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Quizzes
      </Link>
      <Link
        href={`/courses/${cid}/grades`}
        id="wd-course-grades-link"
        className={
          pathname === `/courses/${cid}/grades` ||
          pathname?.startsWith(`/courses/${cid}/grades/`)
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Grades
      </Link>
      <Link
        href={`/courses/${cid}/people/table`}
        id="wd-course-people-link"
        className={
          pathname === `/courses/${cid}/people/table` ||
          pathname?.startsWith(`/courses/${cid}/people/table/`)
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        People
      </Link>
    </div>
  );
}
