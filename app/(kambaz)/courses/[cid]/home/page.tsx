import Modules from "../modules/page";
import CourseStatus from "./CourseStatus";
export default function Home() {
  return (
    <div id="wd-home" style={{ display: "flex", gap: 30 }}>
      <div>
        <h2>Home</h2>
        <Modules />
      </div>
      <CourseStatus />
    </div>
  );
}
