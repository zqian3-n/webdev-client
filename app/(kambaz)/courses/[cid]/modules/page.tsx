import Module from "./Module";
import Lesson from "./Lesson";
export default function Modules() {
  return (
    <div>
      <h2>Modules</h2>
      <button type="button">Collapse All</button>
      <button type="button">View Progress</button>
      <select defaultValue="publish-all" aria-label="Publish modules">
        <option value="publish-all">Publish All</option>
      </select>
      <button type="button">+ Module</button>
      <ul id="wd-modules">
        <Module title="Week 1 - Course Introduction">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what web development is</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">Chapter 1 - HTML</li>
            <li className="wd-content-item">Creating user interfaces</li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">Creating a React application</li>
          </Lesson>
        </Module>
        <Module title="Week 2 - CSS">
          <Lesson title="READING">
            <li className="wd-content-item">Styles and selectors</li>
          </Lesson>
        </Module>
        <Module title="Week 3 - JavaScript">
          <Lesson title="READING">
            <li className="wd-content-item">JavaScript basics</li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}
