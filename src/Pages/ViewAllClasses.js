import React from 'react';

import Button from 'react-bootstrap/Button';
import ClassTableComponent from './Components/ClassTableComponent';
import {get_class,get_school} from './Components/API'

class ViewAllClasses extends React.Component {

  componentDidMount()
  {
    const schoolid = this.props.match.params.SchoolId;
    get_school().then(res => {
      const schools = res.data;
      this.setState({SchoolsPresent:schools})
      get_class(schoolid)
      .then(res => {
        const classes = res.data;
        this.setState({ClassesPresent:classes})
      })
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
      SchoolsPresent:[],
      NewClass:this.initialClassDetail,
      deleteclassid:''
    }
  }

  createClass ()
  {
    const schoolid = this.props.match.params.SchoolId;
    this.props.history.push("/CreateSingleClassroom/"+schoolid)


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
  myfun(value)
  {
    get_class(value)
      .then(res => {
        const classes = res.data;
        this.setState({ClassesPresent:classes})
        this.props.history.push("/ViewAllClasses/"+value)
      })
  }
  render()
  {
    let SchoolId= this.props.match.params.SchoolId;
    return (
        <div className="App" style={{color:"black"}}>
          
          <div className="row h-100 justify-content-center m-3 align-items-center">
            <div className="col-sm-12"> 
              <p style={{fontSize:20}}>
                Classes present in School 

                <select onChange={(event)=>this.myfun(event.target.value)}>
                
                {this.state.SchoolsPresent.map((header,index)=>{
                return(<option key={index}>{header.id}</option>);
                      })}
                </select>
                
                are: 
              </p>
              <em>Click on a classto explore it.</em>
              <br/>
              <div>
                
              </div>
              <div style={{background:'white'}}>
                        <ClassTableComponent data={this.state.ClassesPresent} headers={["Class Id","ClassName","isActive"]} SchoolId ={SchoolId}/>
              </div>
            </div>

            <div className="col-sm-12">

          
              
              
              
              
                <Button variant="outline-danger" onClick={this.createClass.bind(this)}>
                    Add more classes
                </Button>

              <br />
              <br />
              {/* Delete a Classroom
              <br />
              <br />

                <InputGroup className="mb-3" >
                  <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-default" >Class Id</InputGroup.Text>
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
              </Button> */}
            
            </div>
          </div>
        </div>
      );
  }
}

export default ViewAllClasses;
