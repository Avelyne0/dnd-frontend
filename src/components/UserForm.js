import React, { useState } from 'react'
import {Form, Button} from 'semantic-ui-react'

const SignupForm = ({ submit, header }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
      <Form onSubmit={e => {
        e.preventDefault();
        submit({ email, password })
        setEmail('')
        setPassword('')
      }}>
        <span>{header}</span>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Field>
        <Form.Field>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
}

export default SignupForm


{/* <form onSubmit={e => {
  e.preventDefault();
  submit({ email, password })
  setEmail('')
  setPassword('')
}}>
  <span>{header}</span>
  <input placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
  <input placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
  <input type="submit" />
</form> */}