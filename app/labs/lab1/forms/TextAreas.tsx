export default function TextAreas() {
  return (
    <div id="wd-textarea">
      <h5>Text area</h5>
      <label htmlFor="wd-bio">Bio</label>
      <br />
      <textarea id="wd-bio" rows={3} defaultValue="A short introduction" />
    </div>
  );
}
