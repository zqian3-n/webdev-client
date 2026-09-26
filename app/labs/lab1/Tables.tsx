export default function Tables() {
  const grades = [85, 90, 95, 88, 92, 91, 87, 94, 96, 89];
  const topics = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Components",
    "Forms",
    "State",
    "Routing",
    "APIs",
    "Review",
  ];
  const dates = [
    "2/3/21",
    "2/10/21",
    "2/17/21",
    "2/24/21",
    "3/3/21",
    "3/10/21",
    "3/17/21",
    "3/24/21",
    "3/31/21",
    "4/7/21",
  ];
  const average = grades.reduce((a, b) => a + b, 0) / grades.length;
  return (
    <section id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, i) => (
            <tr key={i}>
              <td>Q{i + 1}</td>
              <td align="center">{topics[i]}</td>
              <td align="center">{dates[i]}</td>
              <td align="right">{grade}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">{average.toFixed(1)}</td>
          </tr>
        </tfoot>
      </table>
      <h5>My weekly schedule</h5>
      <table id="wd-your-table" border={1}>
        <thead>
          <tr>
            <th>Day</th>
            <th align="center">Topic</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>HTML</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>Next.js</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>Practice</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
