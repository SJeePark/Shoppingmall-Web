import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = ({setAuthenticate}) => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser=(event)=>{
    event.preventDefault();   //<Form>을 사용하게 된다면 preventDefault 함수를 사용하여 리프레쉬되는 걸 막아준다. 
    console.log("login user function issue")
    dispatch(authenticateAction.login(id, password))
    navigate('/');
  }
  return (
  <div>
      <Container>
      <Form onSubmit={(event)=>loginUser(event)}>  {/*Form은 입력받은 정보를 백엔드로 보내고 싶을 때 사용*/}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control width={'50%'} type="email" placeholder="Enter email" onChange={(event)=>setId(event.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} />
      </Form.Group>
      <Button variant="danger" type="submit">   {/*type이 submit이면 onClick 불가, onSubmit으로 설정*/}
        Login
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default Login
