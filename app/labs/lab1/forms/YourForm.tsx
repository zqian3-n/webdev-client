"use client";
export default function YourForm() {
  return (
    <section>
      <h4>Student Profile</h4>
      <form id="wd-your-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="student-name">Name</label>
        <input id="student-name" name="name" defaultValue="Zhihao Qian" />
        <br />
        <label htmlFor="student-email">Email</label>
        <input
          id="student-email"
          type="email"
          name="email"
          defaultValue="student@example.com"
        />
        <br />
        <label htmlFor="student-bio">About me</label>
        <br />
        <textarea
          id="student-bio"
          name="bio"
          defaultValue="Computer science student learning web development."
        />
        <br />
        <label htmlFor="student-role">Role</label>
        <select id="student-role" name="role">
          <option>Student</option>
          <option>Teaching Assistant</option>
        </select>
        <br />
        <label htmlFor="student-year">Year</label>
        <input
          id="student-year"
          type="number"
          min="1"
          max="6"
          defaultValue="2"
        />
        <br />
        <label htmlFor="student-start">Start date</label>
        <input id="student-start" type="date" defaultValue="2026-09-01" />
        <br />
        <label htmlFor="student-interest">Interest level</label>
        <input
          id="student-interest"
          type="range"
          min="0"
          max="10"
          defaultValue="7"
        />
        <br />
        <fieldset>
          <legend>Study mode</legend>
          <input id="mode-online" type="radio" name="mode" defaultChecked />
          <label htmlFor="mode-online">Online</label>
          <input id="mode-campus" type="radio" name="mode" />
          <label htmlFor="mode-campus">Campus</label>
        </fieldset>
        <input id="student-html" type="checkbox" defaultChecked />
        <label htmlFor="student-html">Learning HTML</label>
        <br />
        <label htmlFor="student-password">Password</label>
        <input id="student-password" type="password" />
        <br />
        <button type="submit">Save</button>
        <button type="reset">Cancel</button>
      </form>
    </section>
  );
}
