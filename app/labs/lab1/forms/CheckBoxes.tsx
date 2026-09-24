export default function CheckBoxes() {
  return (
    <div id="wd-checkboxes">
      <h5>Checkboxes</h5>
      {["comedy", "drama", "fantasy", "scifi"].map((g) => (
        <span key={g}>
          <input id={`wd-chkbox-${g}`} type="checkbox" />
          <label htmlFor={`wd-chkbox-${g}`}>{g}</label>
        </span>
      ))}
    </div>
  );
}
