import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";
import ListTags from "./ListTags";
import Tables from "./Tables";
import Images from "./Images";
import Forms from "./forms/Forms";
import HighlightedParagraph from "./HighlightedParagraph";
import HighlightedBox from "./HighlightedBox";
import AnchorTag from "./AnchorTag";
export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <HeadingTags />
      <hr />
      <ParagraphTag />
      <hr />
      <ListTags />
      <hr />
      <Tables />
      <hr />
      <Images />
      <hr />
      <Forms />
      <hr />
      <section id="wd-highlighted-paragraph">
        <h3>Highlighted Paragraph</h3>
        <HighlightedParagraph text="Default highlight: light yellow background, orange border." />
        <HighlightedParagraph
          text="Custom props: light blue background, navy border, thicker width, more rounding."
          backgroundColor="lightblue"
          borderColor="navy"
          borderWidth={4}
          borderRadius={16}
        />
        <HighlightedParagraph
          text="Another variation: misty rose background, crimson border, square corners."
          backgroundColor="#ffe4e1"
          borderColor="crimson"
          borderWidth="3px"
          borderRadius="0px"
        />
        <HighlightedParagraph
          text="I am learning how to run and understand my own website."
          backgroundColor="#fff3e0"
          borderColor="#9a3412"
          borderWidth={2}
          borderRadius={6}
        />
        <HighlightedParagraph
          text="Props let the same component render with different colors."
          backgroundColor="lavender"
          borderColor="purple"
          borderWidth={3}
          borderRadius={12}
        />
      </section>
      <section id="wd-highlighted-box">
        <h3>Highlighted Box</h3>
        <HighlightedBox
          backgroundColor="lavender"
          borderColor="purple"
          borderWidth={3}
          borderRadius={12}
        >
          <h4>Callout</h4>
          <p>
            This box wraps <strong>any</strong> children - headings, lists, and
            more.
          </p>
          <ul>
            <li>backgroundColor</li>
            <li>borderColor</li>
            <li>borderWidth</li>
            <li>borderRadius</li>
          </ul>
        </HighlightedBox>
        <HighlightedBox
          backgroundColor="#e8f5e9"
          borderColor="green"
          borderRadius={20}
        >
          <p>
            A second box with different style props wrapping different content.
          </p>
        </HighlightedBox>
        <HighlightedBox
          backgroundColor="lightblue"
          borderColor="navy"
          borderRadius={4}
        >
          <h4>Zhihao Qian - My goals</h4>
          <ul>
            <li>Understand the HTML on my pages.</li>
            <li>Learn how components fit together.</li>
            <li>Publish my first assignment website.</li>
          </ul>
        </HighlightedBox>
        <HighlightedBox backgroundColor="honeydew" borderColor="seagreen">
          <h4>Sample nested content</h4>
          <ul>
            <li>p</li>
            <li>table</li>
            <li>form</li>
          </ul>
        </HighlightedBox>
      </section>
      <hr />
      <AnchorTag />
    </div>
  );
}
