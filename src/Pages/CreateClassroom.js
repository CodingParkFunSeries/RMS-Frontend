import React from 'react';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ClassTableComponent from './Components/ClassTableComponent';
import axios from 'axios';

class CreateSchool extends React.Component {

  componentDidMount()
  {
    const schoolid = this.props.match.params.SchoolId;
    axios.get('https://ajyarms.azurewebsites.net/schools/'+schoolid+'/batches/')
      .then(res => {
        const classes = res.data;
        this.setState({ClassesPresent:classes})
      })
    console.log(this.state.ClassesPresent)
  }

  constructor(props)
  {
    super(props);
    this.initialClassDetail = {
      schoolId:''+this.props.match.params.SchoolId,
      className:'',
      isActive:''
    }
    this.state =
    {
      ClassesPresent:[],
      NewClass:this.initialClassDetail,
      deleteclassid:''
    }
  }

  createClass ()
  {
    

    const classadded = {
      "schooloId": this.state.NewClass.schoolId,
      "className": this.state.NewClass.className,
      "isActive": this.state.NewClass.isActive,

  } 
  console.log(classadded);
  const config = {
      headers:{
          'Content-Type': 'application/json'
      }
      
  }
  const schoolid = this.props.match.params.SchoolId;
  axios.post('https://ajyarms.azurewebsites.net/schools/'+schoolid+'/batches/',classadded,config)
  .then(res => {
      this.setState({
          NewClass:this.initialClassDetail
      })

      axios.get('https://ajyarms.azurewebsites.net/schools/'+schoolid+'/batches/')
      .then(res => {
        const classes = res.data;
        this.setState({ClassesPresent:classes})
      })
})
.catch((error)=>{console.log(
    'error',
    error
)})
  }
  handleChange(event)
  {
      this.setState({NewClass:{
          ...this.state.NewClass,
          [event.target.name]:event.target.value
      }})
  }
  handleDeleteChange(event){
    this.setState({deleteclassid:event.target.value})
  }
  deleteClass()
  {
    console.log('Class deleted is '+this.state.deleteclassid)
  }
  render()
  {
    let SchoolId= this.props.match.params.SchoolId;
    return (
        <div className="App">
          
            
          <div style={{background:'white'}}>
                    <ClassTableComponent data={this.state.ClassesPresent} headers={["Class Id","School Id","ClassName","isActive"]} SchoolId ={SchoolId}/>
          </div>

          <br />

          

            <InputGroup className="mb-3" style = {{width:"50%"}}>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:140}}>Class Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange.bind(this)}
                value={this.state.NewClass.className}
                name='className'
                />
            </InputGroup>

            <InputGroup className="mb-3" style = {{width:"50%"}}>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:140}}>Active or IsActive</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange.bind(this)}
                value={this.state.NewClass.isActive}
                name='isActive'
                />
            </InputGroup>

            
            
              <Button variant="outline-danger" onClick={this.createClass.bind(this)}>
                  Create Classroom
              </Button>

            <br />

              <InputGroup className="mb-3" style = {{width:"70%"}}>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:80}}>Class Id</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                placeholder = "Enter the class ID of the class you want to delete"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleDeleteChange.bind(this)}
                value={this.state.deleteclassid}
                />
            </InputGroup>

            <Button variant="outline-danger" onClick={this.deleteClass.bind(this)}>
                  Delete Classroom
              </Button>
            
            
          
        </div>
      );
  }
}

export default CreateSchool;
