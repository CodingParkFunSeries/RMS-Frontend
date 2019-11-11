import React from 'react';
import Button from 'react-bootstrap/Button';
import ClassTableComponent from './Components/ClassTableComponent';
import {get_class,} from './Components/API'

class CreateSchool extends React.Component {

  componentDidMount()
  {
    const schoolid = this.props.match.params.SchoolId;
    get_class(schoolid)
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
    const schoolid = this.props.match.params.SchoolId;
    this.props.history.push("/CreateSingleClassroom/"+schoolid);
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
        <div className="App" style={{color:"black"}}>
          
          <div className="row h-100 justify-content-center m-3 align-items-center">
            <div className="col-sm-12"> 
            <p style={{fontSize:20}}>Classes present in <strong>School {SchoolId}</strong> are: </p>
              <em>Click on a class to explore it.</em>
              <br/>
              <br/>
              <br/>
              <div style={{background:'white'}}>
                        <ClassTableComponent data={this.state.ClassesPresent} headers={["Class Id","ClassName","isActive"]} SchoolId ={SchoolId}/>
              </div>
            </div>

            <div className="col-sm-12">
              

              
              
                <Button variant="outline-danger" onClick={this.createClass.bind(this)}>
                    Add more classes
                </Button>

              
            
            </div>
          </div>
        </div>
      );
  }
}

export default CreateSchool;
