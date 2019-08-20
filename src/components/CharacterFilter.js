import React from 'react'
import { Form, Button } from 'semantic-ui-react'

export default function CharacterFilter({ filterOption, filterOptions, handleChange }) {
  return (
    <div>
      <Form>
        <Button.Group>
          {
            filterOptions.map(race =>
              <Button
                key={race}
                className={`${filterOption === race ? 'selected' : ''}`}
                onClick={(e, { value }) => handleChange(race)}
                >{race}</Button>
            )
          }
        </Button.Group>
        {
          filterOption ?
            <Form.Field>
              Filtered By: <b>{filterOption}</b>
            </Form.Field> : <Form.Field />
        }
      </Form>
    </div>
  )
}
