import AssignmentItem from "./AssignmentItem";
export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <h2>Assignments</h2>
      <input
        id="wd-search-assignment"
        placeholder="Search for Assignments"
        aria-label="Search for Assignments"
      />
      <button id="wd-add-assignment-group" type="button">
        + Group
      </button>
      <button id="wd-add-assignment" type="button">
        + Assignment
      </button>
      <hr />
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button type="button">+</button>
      </h3>
      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="a1"
          title="A1 - ENV + HTML"
          details="Due Sep 27 | 100 points"
        />
        <AssignmentItem
          cid={cid}
          aid="a2"
          title="A2 - CSS + TAILWIND"
          details="Due Oct 11 | 100 points"
        />
        <AssignmentItem
          cid={cid}
          aid="a3"
          title="A3 - JS + REACT"
          details="Due Oct 25 | 100 points"
        />
      </ul>
    </div>
  );
}
