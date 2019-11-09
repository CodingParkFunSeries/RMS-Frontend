import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import SubjectTableComponent from './Components/SubjectTableComponent';
import MockClass1Subjectdata from './mockdata/class1subjectdata';
class AddSubject extends React.Component {

  componentDidMount()
  {
    this.setState({SubjectsPresent:MockClass1Subjectdata})
  }

  constructor(props)
  {
    super(props);
    this.initialSubjectDetail = {
      Subject:'',
      Teacher : '',
    }
    this.state =
    {
      SubjectsPresent:[],
      NewSubject:this.initialSubjectDetail
    }
  }

  addStudent ()
  {
    this.setState({
        SubjectsPresent:[...this.state.SubjectsPresent,this.state.NewSubject],
        NewSubject:this.initialSubjectDetail
    })
  }
  handleChange(event)
  {
      this.setState({NewSubject:{
          ...this.state.NewSubject,
          [event.target.name]:event.target.value
      }})
  }

  render()
  {
    
    return (
        <div>
          

            
          <div style={{background:'white'}}>
                    <SubjectTableComponent data={this.state.SubjectsPresent} headers={["Subject","Teacher Name"]}/>
          </div>

          <br />

          <InputGroup className="mb-3" style = {{width:"50%"}}>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:110}}>Subject</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange.bind(this)}
                value={this.state.NewSubject.Subject}
                name='Subject'
                />
            </InputGroup>

            

            <InputGroup className="mb-3" style = {{width:"50%"}}>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:110}}>Teacher</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange.bind(this)}
                value={this.state.NewSubject.Teacher}
                name='Teacher'
                />
            </InputGroup>

           

            
              <Button variant="outline-danger" onClick={this.addStudent.bind(this)}>
                  Add Subject
              </Button>
    
              
            
            
          
        </div>
      );
  }
}

export default AddSubject;
