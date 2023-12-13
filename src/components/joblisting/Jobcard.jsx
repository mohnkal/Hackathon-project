import React from "react";
import "./Jobcard.css";

export default function Jobcard() {
  return (
    <div>
      {/* Outer section of the card */}
      <div className="card_container">
        {/* All divs aligned horizontally */}

        {/* Div accomodating job title */}
        <div className="card_title">
          <h3>Software Engineer</h3>
        </div>

        {/* Div Accomadating Budget */}
        <div className="card_budget">
          <p>Budget: 200k USD</p>
        </div>

        {/* Div accomadating description */}
        <div className="card_description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            eligendi quisquam vero consequatur minima porro laboriosam autem
            iure aspernatur delectus eum obcaecati laborum nam debitis inventore
            corporis architecto, modi numquam!
          </p>
        </div>
        <div className="seeMoreButton">
            <button>See more...</button>
        </div>
      </div>
    </div>
  );
}
