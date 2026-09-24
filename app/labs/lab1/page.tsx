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
      <h4>Props and children</h4>
      <HighlightedParagraph
        text="Props can change the appearance of a paragraph."
        backgroundColor="lightyellow"
        color="black"
      />
      <HighlightedParagraph
        text="My first component with props."
        backgroundColor="lightblue"
        color="navy"
      />
      <HighlightedParagraph
        text="Another example with different colors."
        backgroundColor="lightgreen"
        color="darkgreen"
      />
      <HighlightedBox backgroundColor="lightyellow" color="black">
        <h5>My goals</h5>
        <ul>
          <li>Build pages</li>
          <li>Learn HTML</li>
        </ul>
      </HighlightedBox>
      <HighlightedBox backgroundColor="lightblue" color="navy">
        <h5>Example box</h5>
        <p>A heading and a paragraph can be nested.</p>
      </HighlightedBox>
      <hr />
      <AnchorTag />
    </div>
  );
}
