import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <label htmlFor="wd-username">Username</label>
      <input id="wd-username" defaultValue="zhihao" />
      <br />
      <label htmlFor="wd-password">Password</label>
      <input id="wd-password" type="password" />
      <br />
      <label htmlFor="wd-firstname">First name</label>
      <input id="wd-firstname" defaultValue="Zhihao" />
      <br />
      <label htmlFor="wd-lastname">Last name</label>
      <input id="wd-lastname" defaultValue="Qian" />
      <br />
      <label htmlFor="wd-dob">Date of birth</label>
      <input id="wd-dob" type="date" />
      <br />
      <label htmlFor="wd-email">Email</label>
      <input
        id="wd-email"
        type="email"
        defaultValue="qian.zhi@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-role">Role</label>
      <select id="wd-role" defaultValue="STUDENT">
        <option value="STUDENT">Student</option>
        <option value="FACULTY">Faculty</option>
      </select>
      <br />
      <Link href="/account/signin">Sign out</Link>
    </div>
  );
}
