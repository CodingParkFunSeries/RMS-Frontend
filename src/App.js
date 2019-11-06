import React from 'react';
import './App.css';
import  AdminHomePage from './Pages/AdminHomePage';
import CreateSchool from './Pages/CreateSchool';
import AddStudent from './Pages/AddStudent';
import CreateClassroom from './Pages/CreateClassroom';
import {BrowserRouter,Route} from 'react-router-dom';
 
function App() {
  return (
    // <AdminHomePage/>
    //<CreateSchool/>
    //<AddStudent/>

    <BrowserRouter>
      <Route exact path='/' component={AdminHomePage}/>
      <Route  path='/CreateSchool' component={CreateSchool}/>
      <Route  path='/AddStudent' component={AddStudent}/>
      <Route  path='/CreateClassroom' component={CreateClassroom}/>
    </BrowserRouter>
  );
}

export default App;
