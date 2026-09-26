import CourseCard from "./CourseCard";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2>
      <div
        id="wd-dashboard-courses"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <CourseCard
          id="1234"
          image="/images/react.svg"
          title="CS1234 React JS"
          description="Full Stack software development"
        />
        <CourseCard
          id="2345"
          image="/images/node.svg"
          title="CS2345 Node JS"
          description="Server side JavaScript"
        />
        <CourseCard
          id="3456"
          image="/images/mongodb.svg"
          title="CS3456 MongoDB"
          description="NoSQL Databases"
        />
      </div>
    </div>
  );
}
