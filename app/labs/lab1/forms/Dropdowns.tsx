export default function Dropdowns() {
  return (
    <div id="wd-dropdowns">
      <h5>Dropdowns</h5>
      <label htmlFor="wd-select-one-genre">Favorite genre</label>
      <select id="wd-select-one-genre">
        <option>Comedy</option>
        <option>Drama</option>
        <option>Fantasy</option>
      </select>
      <br />
      <label htmlFor="wd-select-many-genre">More genres</label>
      <select id="wd-select-many-genre" multiple>
        <option>Comedy</option>
        <option>Drama</option>
        <option>Fantasy</option>
      </select>
    </div>
  );
}
