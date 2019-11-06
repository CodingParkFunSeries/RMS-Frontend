import React from 'react';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
class CreateSchool extends React.Component {
  render()
  {
    return (
        <div className="App">
          
            
          <InputGroup className="mb-3" style = {{width:"50%"}}>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Enter Class Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            
              <Button variant="outline-danger">
                  Create Classroom
              </Button>
    
              
            
            
          
        </div>
      );
  }
}

export default CreateSchool;
