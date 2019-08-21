import React from "react";
import { Form, Button } from "semantic-ui-react";

const CharacterSort = ({ sortOptions, sortOption, handleChange }) => {
  return (
    <div>
      <Form>
        <h4>
          Sort by:
          <Button.Group>
            {sortOptions.map(opt => (
              <Button
                key={opt}
                className={sortOption === opt ? "selected" : ""}
                onClick={event => handleChange(event)}
                value={opt}
                selected={sortOption === opt}
              >{opt}</Button>
            ))}
          </Button.Group>
        </h4>
      </Form>
    </div>
  );
};

export default CharacterSort;
