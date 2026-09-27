import type { Metadata } from "next";
// import "./globals.css"; // Chapter 1 uses browser-default HTML styles.
export const metadata: Metadata = {
  title: "Kambaz - Zhihao Qian",
  description: "Web Development Lab 1",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
