export default function Dropdowns() {
  return (
    <div id="wd-dropdowns">
      <h5>Dropdowns</h5>
      <label htmlFor="wd-select-one-genre">Favorite genre</label>
      <select id="wd-select-one-genre" defaultValue="SCIFI">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option value="SCIFI">Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
      </select>
      <br />
      <label htmlFor="wd-select-many-genre">More genres</label>
      <select
        id="wd-select-many-genre"
        multiple
        defaultValue={["COMEDY", "SCIFI"]}
      >
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option value="SCIFI">Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
      </select>
    </div>
  );
}
