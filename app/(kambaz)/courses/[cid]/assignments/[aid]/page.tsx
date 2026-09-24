import Link from "next/link";
export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor">
      <h2>Assignment Editor</h2>
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <label htmlFor="wd-description">Description</label>
      <br />
      <textarea
        id="wd-description"
        rows={4}
        defaultValue="Submit a link to your work."
      />
      <br />
      <label htmlFor="wd-points">Points</label>
      <input id="wd-points" type="number" defaultValue={100} />
      <br />
      <label htmlFor="wd-group">Assignment Group</label>
      <select id="wd-group">
        {["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECT"].map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
      <br />
      <label htmlFor="wd-display-grade-as">Display Grade as</label>
      <select id="wd-display-grade-as">
        <option>Percentage</option>
        <option>Points</option>
      </select>
      <br />
      <label htmlFor="wd-submission-type">Submission Type</label>
      <select id="wd-submission-type">
        <option>Online</option>
        <option>On Paper</option>
      </select>
      <fieldset>
        <legend>Online Entry Options</legend>
        {[
          ["wd-text-entry", "Text Entry"],
          ["wd-website-url", "Website URL"],
          ["wd-media-recordings", "Media Recordings"],
          ["wd-student-annotation", "Student Annotation"],
          ["wd-file-upload", "File Upload"],
        ].map(([id, label]) => (
          <div key={id}>
            <input id={id} type="checkbox" />
            <label htmlFor={id}>{label}</label>
          </div>
        ))}
      </fieldset>
      <h3>Assign</h3>
      <label htmlFor="wd-assign-to">Assign to</label>
      <input id="wd-assign-to" defaultValue="Everyone" />
      <br />
      <label htmlFor="wd-due-date">Due</label>
      <input id="wd-due-date" type="date" />
      <br />
      <label htmlFor="wd-available-from">Available from</label>
      <input id="wd-available-from" type="date" />
      <br />
      <label htmlFor="wd-available-until">Until</label>
      <input id="wd-available-until" type="date" />
      <br />
      <Link id="wd-cancel" href={`/courses/${cid}/assignments`}>
        Cancel
      </Link>{" "}
      <Link id="wd-save" href={`/courses/${cid}/assignments`}>
        Save
      </Link>
    </div>
  );
}
