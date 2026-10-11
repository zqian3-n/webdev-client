import Link from "next/link";
export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  const field = "w-full rounded border border-neutral-300 bg-white px-3 py-2";
  return (
    <div id="wd-assignments-editor" className="max-w-3xl space-y-5">
      <div>
        <label htmlFor="wd-name" className="mb-1 block">
          Assignment Name
        </label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={field} />
      </div>
      <div>
        <label htmlFor="wd-description" className="mb-1 block">
          Description
        </label>
        <textarea
          id="wd-description"
          rows={8}
          aria-label="Assignment description"
          className={field}
          defaultValue={`The assignment is available online.

Submit a link to the landing page of your Web application running on Vercel.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kambaz application
• Links to all relevant source code repositories

The Kambaz application should include a link to navigate back to the landing page.`}
        />
      </div>
      <div className="grid items-start gap-3 sm:grid-cols-[160px_1fr]">
        <label htmlFor="wd-points" className="pt-2 sm:text-right">
          Points
        </label>
        <input
          id="wd-points"
          defaultValue={100}
          type="number"
          className={field}
        />
        <label htmlFor="wd-group" className="pt-2 sm:text-right">
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
        <label htmlFor="wd-display-grade-as" className="pt-2 sm:text-right">
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="Percentage"
          className={field}
        >
          <option value="Percentage">Percentage</option>
        </select>
        <label htmlFor="wd-submission-type" className="pt-2 sm:text-right">
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            defaultValue="Online"
            className={field}
          >
            <option value="Online">Online</option>
          </select>
          <h4 className="my-4 font-semibold">Online Entry Options</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input id="wd-text-entry" type="checkbox" />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="flex items-center gap-2">
              <input id="wd-website-url" type="checkbox" defaultChecked />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="flex items-center gap-2">
              <input id="wd-media-recordings" type="checkbox" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="flex items-center gap-2">
              <input id="wd-student-annotation" type="checkbox" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="flex items-center gap-2">
              <input id="wd-file-upload" type="checkbox" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </div>
        </div>
        <span className="pt-2 sm:text-right">Assign</span>
        <div className="space-y-4 rounded border border-neutral-300 p-4">
          <div>
            <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
              Assign to
            </label>
            <input
              id="wd-assign-to"
              defaultValue="Everyone"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
              Due
            </label>
            <input
              id="wd-due-date"
              type="date"
              defaultValue="2024-05-13"
              className={field}
            />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <label
                htmlFor="wd-available-from"
                className="mb-1 block font-semibold"
              >
                Available from
              </label>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2024-05-06"
                className={field}
              />
            </div>
            <div>
              <label
                htmlFor="wd-available-until"
                className="mb-1 block font-semibold"
              >
                Until
              </label>
              <input id="wd-available-until" type="date" className={field} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2 border-t border-neutral-200 pt-4">
        <Link
          id="wd-cancel"
          href={`/courses/${cid}/assignments`}
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          id="wd-save"
          href={`/courses/${cid}/assignments`}
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
