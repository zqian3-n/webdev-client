export default function AnchorTag() {
  return (
    <section>
      <h4>Anchor tag</h4>
      <a id="wd-lipsum" href="https://www.lipsum.com">
        Lorem ipsum
      </a>
      <br />
      <a id="wd-github" href="https://github.com/zqian3-n/webdev-client">
        GitHub repository
      </a>
      <br />
      <a id="wd-your-link" href="https://www.northeastern.edu">
        Northeastern University
      </a>
      <br />
      <a id="wd-your-github" href="https://github.com/zqian3-n">
        My GitHub
      </a>
      <br />
      <a
        id="wd-ai-link"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
      >
        HTML table documentation
      </a>
      <p>
        <a href="#wd-anchor-bottom">Jump to bottom</a>
      </p>
      <p id="wd-anchor-bottom">Bottom of links</p>
    </section>
  );
}
