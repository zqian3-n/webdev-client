export default function RadioButtons() {
  return (
    <div id="wd-radio-buttons">
      <h5>Radio buttons</h5>
      <p>Favorite genre</p>
      {["comedy", "drama", "fantasy", "scifi"].map((g) => (
        <span key={g}>
          <input id={`wd-radio-${g}`} type="radio" name="genre" value={g} />
          <label htmlFor={`wd-radio-${g}`}>{g}</label>
        </span>
      ))}
      <p>Frequency</p>
      {["daily", "weekly", "rarely"].map((g) => (
        <span key={g}>
          <input id={`wd-radio-${g}`} type="radio" name="frequency" value={g} />
          <label htmlFor={`wd-radio-${g}`}>{g}</label>
        </span>
      ))}
    </div>
  );
}
