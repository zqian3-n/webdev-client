"use client";
// Forms.tsx imports this single personal form. Defaults are part of the static A1 prototype.
export default function YourForm() {
  return (
    <section>
      <h4>Student Profile</h4>
      <form id="wd-your-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="student-first-name">First name</label>
        <input id="student-first-name" name="firstName" defaultValue="Zhihao" />
        <br />
        <label htmlFor="student-last-name">Last name</label>
        <input id="student-last-name" name="lastName" defaultValue="Qian" />
        <br />
        <label htmlFor="student-password">Password</label>
        <input
          id="student-password"
          name="password"
          type="password"
          autoComplete="new-password"
        />
        <br />
        <label htmlFor="student-bio">Why I am taking this course</label>
        <br />
        <textarea
          id="student-bio"
          name="bio"
          rows={4}
          cols={50}
          defaultValue="I am a second-year, full-time Computer Science graduate student at Northeastern University. I want to build useful websites, understand React components, and connect user interfaces to databases."
        />
        <br />
        <fieldset>
          <legend>Class standing</legend>
          <div>
            <input
              id="standing-Freshman"
              name="standing"
              type="radio"
              value="Freshman"
            />
            <label htmlFor="standing-Freshman">Freshman</label>
          </div>
          <div>
            <input
              id="standing-Sophomore"
              name="standing"
              type="radio"
              value="Sophomore"
            />
            <label htmlFor="standing-Sophomore">Sophomore</label>
          </div>
          <div>
            <input
              id="standing-Junior"
              name="standing"
              type="radio"
              value="Junior"
            />
            <label htmlFor="standing-Junior">Junior</label>
          </div>
          <div>
            <input
              id="standing-Senior"
              name="standing"
              type="radio"
              value="Senior"
            />
            <label htmlFor="standing-Senior">Senior</label>
          </div>
          <div>
            <input
              id="standing-Graduate"
              name="standing"
              type="radio"
              value="Graduate"
              defaultChecked
            />
            <label htmlFor="standing-Graduate">Graduate</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Study mode</legend>
          <input
            id="mode-full-time"
            name="mode"
            type="radio"
            value="full-time"
            defaultChecked
          />
          <label htmlFor="mode-full-time">Full-time</label>
          <input
            id="mode-part-time"
            name="mode"
            type="radio"
            value="part-time"
          />
          <label htmlFor="mode-part-time">Part-time</label>
        </fieldset>
        <fieldset>
          <legend>Learning interests</legend>
          <div>
            <input
              id="interest-HTML"
              name="interests"
              type="checkbox"
              value="HTML"
              defaultChecked
            />
            <label htmlFor="interest-HTML">HTML</label>
          </div>
          <div>
            <input
              id="interest-React"
              name="interests"
              type="checkbox"
              value="React"
              defaultChecked
            />
            <label htmlFor="interest-React">React</label>
          </div>
          <div>
            <input
              id="interest-Databases"
              name="interests"
              type="checkbox"
              value="Databases"
              defaultChecked
            />
            <label htmlFor="interest-Databases">Databases</label>
          </div>
          <div>
            <input
              id="interest-Accessibility"
              name="interests"
              type="checkbox"
              value="Accessibility"
            />
            <label htmlFor="interest-Accessibility">Accessibility</label>
          </div>
        </fieldset>
        <label htmlFor="student-major">Major</label>
        <select id="student-major" name="major" defaultValue="CS">
          <option value="" disabled>
            Select your major
          </option>
          <option value="CS">Computer Science</option>
          <option value="IS">Information Systems</option>
          <option value="DS">Data Science</option>
          <option value="OTHER">Other</option>
        </select>
        <br />
        <label htmlFor="student-topics">
          Topics to explore (Ctrl-click to select several)
        </label>
        <br />
        <select
          id="student-topics"
          name="topics"
          multiple
          size={4}
          defaultValue={["REACT", "DATABASES"]}
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="REACT">React</option>
          <option value="DATABASES">Databases</option>
        </select>
        <br />
        <label htmlFor="student-email">School email</label>
        <input
          id="student-email"
          name="email"
          type="email"
          defaultValue="qian.zhi@northeastern.edu"
        />
        <br />
        <label htmlFor="student-year">Expected graduation year</label>
        <input
          id="student-year"
          name="graduationYear"
          type="number"
          min={2026}
          max={2040}
          defaultValue={2027}
        />
        <br />
        <label htmlFor="student-start">Program start date</label>
        <input
          id="student-start"
          name="startDate"
          type="date"
          defaultValue="2025-09-01"
        />
        <br />
        <label htmlFor="student-interest">
          Excitement about this course (0-10)
        </label>
        <input
          id="student-interest"
          name="excitement"
          type="range"
          min={0}
          max={10}
          defaultValue={8}
        />
        <br />
        <button id="wd-your-form-save" type="submit">
          Save
        </button>
        <button id="wd-your-form-cancel" type="button">
          Cancel
        </button>
      </form>
    </section>
  );
}
