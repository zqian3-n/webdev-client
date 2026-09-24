"use client";
import TextFields from "./TextFields";
import TextAreas from "./TextAreas";
import RadioButtons from "./RadioButtons";
import CheckBoxes from "./CheckBoxes";
import Dropdowns from "./Dropdowns";
import OtherInputTypes from "./OtherInputTypes";
import Buttons from "./Buttons";
import YourForm from "./YourForm";
export default function Forms() {
  return (
    <section id="wd-forms">
      <h4>Forms</h4>
      <form onSubmit={(event) => event.preventDefault()}>
        <TextFields />
        <TextAreas />
        <RadioButtons />
        <CheckBoxes />
        <Dropdowns />
        <OtherInputTypes />
        <Buttons />
      </form>
      <YourForm />
    </section>
  );
}
