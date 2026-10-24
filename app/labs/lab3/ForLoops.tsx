export default function ForLoops() {
  let stringArray1 = ["string1", "string3"];
  let stringArray2: string[] = [];
  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
  }
  const stringArray3: string[] = [];
  for (let i = 0; i < stringArray1.length; i++) {
    stringArray3.push(stringArray1[i].toLowerCase());
  }
  return (
    <div id="wd-for-loops">
      <h4>Looping through arrays</h4>
      stringArray2 = {stringArray2}
      <p>lowercase = {JSON.stringify(stringArray3)}</p>
      <hr />
    </div>
  );
}
