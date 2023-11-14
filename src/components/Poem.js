import * as React from "react";
import "../styles/poem.css";
import { PoemContext } from '../PoemProvider';

export default function Poem() {
  const { currVerse } = React.useContext(PoemContext);

  const getVerseClassName = (verseNumber) => {
    return `verse ${currVerse === verseNumber ? "active" : ""}`;
  };

  return (
    <div className="poem-container">
      <div id="verse1" className={getVerseClassName(1)}>
        <p>
          <span className="black-text">Black,</span>
          <br /><span className="dormant-text">dormant,</span>
          <br />commemorating all of the lives that can’t speak.
          <br />It <span className="shimmer-text">shimmers,</span>
          <br />to remind society that it is there.
        </p>
      </div>
      <div id="verse2" className={getVerseClassName(2)}>
        <p>
          It lies there,
          <br />knowing that if it flies around,
          <br />then <i><span className="glass-text">glass</span></i> would have a <span className="problem-text">problem</span> with it,
          <br />thus the rock is <span className="encased-text">encased</span> in a gravel lot to lay with <span className="relatives-text">relatives.</span>
          <br />Relatives that have been <span className="crushed-text">crushed</span> to dust,
          <br /><span className="crushed-text">crushed</span> by the <i><span className="glass-text">glass</span></i> <span className="standard-text">standard.</span>
        </p>
      </div>
      <div id="verse3" className={getVerseClassName(3)}>
        <p>
          The rock lies there convinced that its purpose is to remain,
          <br />as a <span className="placeholder-text">placeholder,</span>
          <br />as a <span className="filler-text">filler,</span>
          <br />when really the rock is <span className="more-text">more</span> than that.
        </p>
      </div>
      <div id="verse4" className={getVerseClassName(4)}>
        <p>
          <br />It <span className="radiate-text">radiates</span> its surroundings with its <i>uniqueness</i>,
          <br />and covers the notions of being both,
          <br /><span className="black-text">black,</span>
          <br />and <span className="dormant-text">dormant.</span>
        </p>
      </div>
    </div>
  );
}
