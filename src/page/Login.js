import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser=(event)=>{
    event.preventDefault();   //<Form>을 사용하게 된다면 preventDefault 함수를 사용하여 리프레쉬되는 걸 막아준다. 
    console.log("login user function issue")
    setAuthenticate(true);
    navigate('/');
  }
  return (
  <div>
      <Container>
      <Form onSubmit={(event)=>loginUser(event)}>  {/*Form은 입력받은 정보를 백엔드로 보내고 싶을 때 사용*/}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
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
