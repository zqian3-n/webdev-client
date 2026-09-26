export default function TextFields() {
  return (
    <div>
      <h5>Text fields</h5>
      <label htmlFor="wd-text-fields-username">Username</label>
      <input id="wd-text-fields-username" placeholder="jdoe" />
      <br />
      <label htmlFor="wd-text-fields-password">Password</label>
      <input id="wd-text-fields-password" type="password" />
      <br />
      <label htmlFor="wd-text-fields-first-name">First name</label>
      <input id="wd-text-fields-first-name" defaultValue="Alice" />
      <br />
      <label htmlFor="wd-text-fields-last-name">Last name</label>
      <input id="wd-text-fields-last-name" defaultValue="Wonderland" />
      <br />
      <label htmlFor="wd-text-fields-email">Email</label>
      <input id="wd-text-fields-email" type="email" />
      <br />
      <label htmlFor="wd-text-fields-salary-start">Salary</label>
      <input
        id="wd-text-fields-salary-start"
        type="number"
        min={0}
        defaultValue={100000}
      />
      <br />
      <label htmlFor="wd-text-fields-rating">Rating</label>
      <input
        id="wd-text-fields-rating"
        type="range"
        min="0"
        max="10"
        defaultValue={5}
      />
      <br />
      <label htmlFor="wd-text-fields-dob">Birthday</label>
      <input id="wd-text-fields-dob" type="date" defaultValue="2000-01-21" />
    </div>
  );
}
