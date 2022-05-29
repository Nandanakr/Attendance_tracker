import './App.css';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Attendance } from './components/Attendance';
import { SignIn } from './components/SignIn';

function App() {
  return (

    <BrowserRouter> 
    <div className="App">
     <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Attendance Tracker</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>                
      <Nav.Link as={Link} to="/attendance">Attendance</Nav.Link>
      <Nav.Link as={Link} to="/signIn" >SignIn</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>
<div>
  <Routes>
    <Route path="/attendance" element={<Attendance/>}/>
    <Route path="/signIn" element={<SignIn/>}/>

  </Routes>

</div>
      
    </div>
    </BrowserRouter>    
  );
}

export default App;
