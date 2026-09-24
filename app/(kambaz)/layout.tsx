import Navigation from "./Navigation";
export default function KambazLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <table>
      <tbody>
        <tr>
          <td valign="top" width="170">
            <Navigation />
          </td>
          <td valign="top" width="100%">
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
