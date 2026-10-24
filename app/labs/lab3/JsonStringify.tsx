export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      <p>course = {JSON.stringify({ course: "RS101", credits: 4 })}</p>
      <hr />
    </div>
  );
}
