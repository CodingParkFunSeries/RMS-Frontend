import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import SubjectTableComponent from './Components/SubjectTableComponent';
import {get_subject,post_subject} from './Components/API';
class AddSubject extends React.Component {

  componentDidMount()
  {
    
    //console.log('Hi from add subject')
    const schoolId = this.props.SchoolId;
    const classId = this.props.ClassId;
    get_subject(schoolId,classId)
      .then(res => {
        const subjects = res.data;
        this.setState({SubjectsPresent:subjects})
        //console.log("Subjects read",this.state.SubjectsPresent);
      })
      
  }

  constructor(props)
  {
    super(props);
    const schoolId = this.props.SchoolId;
    const classId = this.props.ClassId;
    
    this.initialSubjectDetail = {
      name:'',
      description : '',
      schoolId : schoolId,
      semesterId : '1',
      batchId : classId,
    }
    this.state =
    {
      SubjectsPresent:[],
      NewSubject:this.initialSubjectDetail
    }
  }

  addStudent ()
  {
    

    const schoolId = this.props.SchoolId;
    const classId = this.props.ClassId;

    post_subject(schoolId,classId,this.state.NewSubject).then(res => {
      this.setState({
        NewSubject:this.initialSubjectDetail
      })
      get_subject(schoolId,classId)
      .then(res => {
        const subjects = res.data;
        this.setState({SubjectsPresent:subjects})
        // console.log("Subject present are: ",this.state.SubjectsPresent) 
      })
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
      <div className="row h-100 justify-content-center align-items-center" style={{fontSize:12}}>
          
          <div className="col-sm-7"> 
            <p style={{fontSize:20}}>Subjects taught are :</p>
            <div style={{background:'white'}}>
                      <SubjectTableComponent data={this.state.SubjectsPresent} headers={["Subject Id","Subjetc Name","Description"]}/>
            </div>
          </div>

          <br />

          <div className="col-sm-5 ">
          <p style={{fontSize:20}}> Add a subject in class </p>
          <InputGroup className="mb-3" style = {{width:"50%"}}>
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

            

            <InputGroup className="mb-3" style = {{width:"50%"}}>
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
      );
  }
}

export default AddSubject;
