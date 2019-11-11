import React from 'react';
import './App.css';
import CreateSchool from './Pages/CreateSchool';
import AddStudent from './Pages/AddStudent';
import CreateClassroom from './Pages/CreateClassroom';
import AddSubject from './Pages/AddSubject';
import ViewClass from './Pages/ViewClass';
import ViewStudent from './Pages/ViewStudent';

import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ViewSchools from './Pages/ViewSchools';


 
function App() {
  return (
    // <AdminHomePage/>
    //<CreateSchool/>
    //<AddStudent/>

    <BrowserRouter>
    
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Report Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title="Schools" id="basic-nav-dropdown">
          <NavDropdown.Item href="/ViewSchools">View Schools</NavDropdown.Item>
          <NavDropdown.Item href="/CreateSchool">Create School</NavDropdown.Item>
        </NavDropdown>
          <Nav.Link href="/createclassroom/1">Classrooms</Nav.Link>
          <Nav.Link href="#link">Students</Nav.Link>
          <Nav.Link href="#link">View Student Report</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
      <div className="App">
      <Route exact path='/' component={ViewSchools}/>
      <Route path='/ViewSchools' component={ViewSchools}/>
      <Route  path='/CreateSchool' component={CreateSchool}/>
      <Route  path='/AddStudent' component={AddStudent}/>
      <Route  path='/CreateClassroom/:SchoolId' component={CreateClassroom}/>
      <Route  path='/AddSubject' component={AddSubject}/>
      <Route  path='/ViewClass/:SchoolId/:ClassId' component={ViewClass}/>
      <Route  path='/ViewStudent/:SchoolId/:ClassId/:StudentId' component={ViewStudent}/>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
