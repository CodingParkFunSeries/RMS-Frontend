import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
function AdminHomePage() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Link to='/CreateSchool'>
            <Button variant="outline-danger">
              Create School
            </Button>
        </Link>
          
        
        <br />
        <Link to='/CreateClassroom'>
            <Button variant="outline-info">
            Create Classroom
            </Button>
        </Link>

        <br />

        <Link to='/AddStudent'>
            <Button variant="outline-warning">
            Add Student
            </Button>
        </Link>

        

          

          
        
        
      </header>
    </div>
  );
}

export default AdminHomePage;
