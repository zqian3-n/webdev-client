/* eslint-disable @next/next/no-img-element -- Chapter 1 explicitly practices the native HTML img tag. */
export default function Images() {
  return (
    <section id="wd-images">
      <h4>Image tag</h4>
      <p>Loading an image from the internet:</p>
      <img
        id="wd-starship"
        src="https://upload.wikimedia.org/wikipedia/commons/1/11/Starship_SN15_flap_and_nosecone_(51437260707).jpg"
        alt="Starship rocket"
        width="220"
      />
      <br />
      <p>Loading a local image:</p>
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        alt="Tesla Bot (Optimus) humanoid robot"
        width="120"
      />
      <br />
      <img
        id="wd-your-image"
        src="/computer.svg"
        alt="Drawing of a computer"
        width="120"
      />
      <br />
      <img
        id="wd-ai-image"
        src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
        alt="HTML5 logo"
        width="100"
      />
      <p>
        Photo credits:{" "}
        <a href="https://commons.wikimedia.org/wiki/File:Starship_SN15_flap_and_nosecone_(51437260707).jpg">
          Starship by Lars Plougmann
        </a>{" "}
        (
        <a href="https://creativecommons.org/licenses/by-sa/2.0/">
          CC BY-SA 2.0
        </a>
        );{" "}
        <a href="https://commons.wikimedia.org/wiki/File:Optimus_Tesla.jpg">
          Optimus by Benjamin Ceci
        </a>{" "}
        (public domain);{" "}
        <a href="https://www.w3.org/html/logo/">HTML5 logo by W3C</a>.
      </p>
    </section>
  );
}
