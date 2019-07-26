import React from "react";
// A React component is a function that returns a React element.
// React elements are created with the `React.createElement()` method
// or JSX tags.

// Your React component's names must be in PascalCase. Those whose
// names do not begin with an upper case letter will interpreted
// as plain HTML tag.
function BidDetails(props) {
  return (
    <div>
      <p>
        ${props.price}
        <br />
        <small>Bidded {props.created_at}</small>
      </p>
    </div>
  );
}

export { BidDetails };
