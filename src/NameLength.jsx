import React from "react";

function NameLength({ name }) {
  return (
    <p className="name-length">
      Did you know that {name} is {name.length} characters long?!
    </p>
  );
}

export default NameLength;
