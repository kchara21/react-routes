import React from "react";
import { useParams } from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();
  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in
        ducimus, iure error modi corrupti assumenda inventore ipsam dolores
        voluptatibus impedit asperiores repellendus? Impedit magni mollitia
        ullam facilis nam. Tempore.
      </p>
    </div>
  );
};

export default Topic;
