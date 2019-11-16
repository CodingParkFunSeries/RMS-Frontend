import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import {post_subject} from './Components/API';
class AddSubject extends React.Component {

  

  constructor(props)
  {
    super(props);
    
    const schoolId = this.props.match.params.SchoolId;
    const classId = this.props.match.params.ClassId;
    this.initialSubjectDetail = {
      name:'',
      description : '',
      schoolId : schoolId,
      semesterId : '1',
      batchId : classId,
    }
    this.state =
    {
      
      NewSubject:this.initialSubjectDetail
    }
  }

  addStudent ()
  {
    

    const schoolId = this.props.match.params.SchoolId;
    const classId = this.props.match.params.ClassId;

    post_subject(schoolId,classId,this.state.NewSubject).then(res => {
      this.setState({
        NewSubject:this.initialSubjectDetail
      })
      this.props.history.push("/ViewClass/"+schoolId+"/"+classId);
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
    console.log("Inside Add Subject");
    return (


      <div className="App" style={{color:"black"}}>
          
        
      <div className="row h-100 justify-content-center align-items-center" style={{fontSize:12}}>
          
          

          <br />

          <div className="col-sm-12">
          
          <InputGroup className="mb-3" >
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:110}}>Subject</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder = "Subject Name"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange.bind(this)}
                value={this.state.NewSubject.name}
                name='name'
                />
            </InputGroup>

            

            <InputGroup className="mb-3" >
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:110}}>Description</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder = "Description"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange.bind(this)}
                value={this.state.NewSubject.description}
                name='description'
                />
            </InputGroup>

           

            
              <Button variant="outline-danger" onClick={this.addStudent.bind(this)}>
                  Add Subject
              </Button>
    
              </div>  
            
            
          </div>
        </div>
      );
  }
}

export default AddSubject;
