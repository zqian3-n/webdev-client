import TOC from "./TOC";
export default function LabsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <table>
      <tbody>
        <tr>
          <td valign="top" width="180">
            <TOC />
          </td>
          <td valign="top">{children}</td>
        </tr>
      </tbody>
    </table>
  );
}
