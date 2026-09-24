export default function HighlightedParagraph({
  text,
  backgroundColor,
  color,
}: {
  text: string;
  backgroundColor: string;
  color: string;
}) {
  return (
    <p
      id="wd-highlighted-paragraph"
      style={{ backgroundColor, color, padding: 8 }}
    >
      {text}
    </p>
  );
}
