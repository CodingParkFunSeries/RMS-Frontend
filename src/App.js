import React from 'react';
import './App.css';
import CreateSchool from './Pages/CreateSchool';
import AddStudent from './Pages/AddStudent';
import CreateClassroom from './Pages/CreateClassroom';
import CreateSingleClassroom from './Pages/CreateSingleClassroom';
import CreateSingleClassroomNavbar from './Pages/CreateSingleClassroomNavbar';
import CreateSingleStudent from './Pages/CreateSingleStudent';
import ViewAllClasses from './Pages/ViewAllClasses';

import AddSubject from './Pages/AddSubject';
import ViewClass from './Pages/ViewClass';
import ViewSingleClass from './Pages/ViewSingleClass';
import ViewStudent from './Pages/ViewStudent';
import ViewStudentsNavbar from './Pages/ViewStudentsNavbar';
import ViewAllStudent from './Pages/ViewAllStudent';

import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ViewSchools from './Pages/ViewSchools';
import ViewStudentReport from './Pages/ViewStudentReport';


 
function App() {
  return (
    // <AdminHomePage/>
    //<CreateSchool/>
    //<AddStudent/>

    <BrowserRouter>
    
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Report Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title="Schools" id="basic-nav-dropdown">
          <NavDropdown.Item href="/ViewSchools">View Schools</NavDropdown.Item>
          <NavDropdown.Item href="/CreateSchool">Create School</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Classrooms" id="basic-nav-dropdown">
          <NavDropdown.Item href="/ViewAllClasses/1">View Classrooms</NavDropdown.Item>
          <NavDropdown.Item href="/CreateSingleClassroomNavbar/1">Create Classroom</NavDropdown.Item>
          <NavDropdown.Item href="/ViewSingleClass">View Single Classroom</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Students" id="basic-nav-dropdown">  
          <NavDropdown.Item href="/ViewStudentsNavbar/">Students in a class</NavDropdown.Item>
          <NavDropdown.Item href="/CreateSingleStudent/">Add students</NavDropdown.Item>
        </NavDropdown>
          <Nav.Link href="/ViewStudentReport">View Student Report</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
      <div className="App">
      <Route exact path='/' component={ViewSchools}/>
      
      <Route path='/ViewSchools' component={ViewSchools}/>
      <Route  path='/CreateSchool' component={CreateSchool}/>
      

      <Route  path='/CreateClassroom/:SchoolId' component={CreateClassroom}/>
      <Route  path='/CreateSingleClassroom/:SchoolId' component={CreateSingleClassroom}/>
      <Route  path='/CreateSingleClassroomNavbar/:SchoolId' component={CreateSingleClassroomNavbar}/>
      <Route  path='/ViewAllClasses/:SchoolId' component={ViewAllClasses}/>

      <Route  path='/AddSubject/:SchoolId/:ClassId' component={AddSubject}/>
      <Route  path='/AddStudent/:SchoolId/:ClassId' component={AddStudent}/>
      <Route  path='/ViewClass/:SchoolId/:ClassId' component={ViewClass}/>
      <Route  path='/ViewSingleClass/' component={ViewSingleClass}/>
      <Route  path='/ViewStudentsNavbar/' component={ViewStudentsNavbar}/>
      <Route  path='/CreateSingleStudent/' component={CreateSingleStudent}/>
      
      <Route  path='/ViewStudent/:SchoolId/:ClassId/:StudentId' component={ViewStudent}/>
      <Route  path='/ViewAllStudent/:SchoolId/:ClassId/' component={ViewAllStudent}/>
      <Route  path='/ViewStudentReport/' component={ViewStudentReport}/>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
