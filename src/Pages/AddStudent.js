import React from 'react';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import StudentTableComponent from './Components/StudentTableComponent';
import MockClass1Studentdata from './mockdata/class1studentdata';
class AddStudent extends React.Component {

  componentDidMount()
  {
    this.setState({StudentsPresent:MockClass1Studentdata})
    console.log(this.props);  
  }

  constructor(props)
  {
    super(props);
    this.initialStudentDetail = {
      StudentId:'',
      StudentName : "",
      StudentAddress : "",
      StudentContactNo : "",
      StudentDateOfBirth : ""
    }
    this.state =
    {
      StudentsPresent:[],
      NewStudent:this.initialStudentDetail
    }
  }

  addStudent ()
  {
    this.setState({
        StudentsPresent:[...this.state.StudentsPresent,this.state.NewStudent],
        NewStudent:this.initialStudentDetail
    })
  }
  handleChange(event)
  {
      this.setState({NewStudent:{
          ...this.state.NewStudent,
          [event.target.name]:event.target.value
      }})
  }

  render()
  {
    return (
        <div>
          

          <div style={{background:'white'}}>
                    <StudentTableComponent data={this.state.StudentsPresent} headers={["Student Id","Name","Address","Contact No","Date Of Birth"]}/>
          </div>

          <br />

          <InputGroup className="mb-3" style = {{width:"50%"}}>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:110}}>Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange.bind(this)}
                value={this.state.NewStudent.StudentName}
                name='StudentName'
                />
            </InputGroup>

            

            <InputGroup className="mb-3" style = {{width:"50%"}}>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:110}}>Address</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange.bind(this)}
                value={this.state.NewStudent.StudentAddress}
                name='StudentAddress'
                />
            </InputGroup>

            

            <InputGroup className="mb-3" style = {{width:"50%"}}>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:110}}>Contact No</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange.bind(this)}
                value={this.state.NewStudent.StudentContactNo}
                name='StudentContactNo'
                />
            </InputGroup>

            

            <InputGroup className="mb-3" style = {{width:"50%"}}>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:110}}>Date of Birth</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange.bind(this)}
                value={this.state.NewStudent.StudentDateOfBirth}
                name='StudentDateOfBirth'
                />
            </InputGroup>

            
              <Button variant="outline-danger" onClick={this.addStudent.bind(this)}>
                  Add Student
              </Button>
    
              
            
            
          
        </div>
      );
  }
}

export default AddStudent;
