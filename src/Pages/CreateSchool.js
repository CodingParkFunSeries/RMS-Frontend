import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
class CreateSchool extends React.Component{

  render()
  {
    return (
        <div>
          
            

            <InputGroup className="mb-3" style = {{width:"50%"}}>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Enter School name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>

              <Button variant="outline-danger">
                  Create School
              </Button>
    
              
            
            
          
        </div>
      );
  }
}


export default CreateSchool;
