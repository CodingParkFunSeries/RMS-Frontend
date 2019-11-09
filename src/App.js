import React from 'react';
import './App.css';
import  AdminHomePage from './Pages/AdminHomePage';
import CreateSchool from './Pages/CreateSchool';
import AddStudent from './Pages/AddStudent';
import CreateClassroom from './Pages/CreateClassroom';
import AddSubject from './Pages/AddSubject';
import ViewClass from './Pages/ViewClass';
import ViewStudent from './Pages/ViewStudent';

import {BrowserRouter,Route} from 'react-router-dom';
 
function App() {
  return (
    // <AdminHomePage/>
    //<CreateSchool/>
    //<AddStudent/>

    <BrowserRouter>
      <div className="App">
      <Route exact path='/' component={AdminHomePage}/>
      <Route  path='/CreateSchool' component={CreateSchool}/>
      <Route  path='/AddStudent' component={AddStudent}/>
      <Route  path='/CreateClassroom/:SchoolId' component={CreateClassroom}/>
      <Route  path='/AddSubject' component={AddSubject}/>
      <Route  path='/ViewClass/:SchoolId/:ClassId' component={ViewClass}/>
      <Route  path='/ViewStudent' component={ViewStudent}/>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
