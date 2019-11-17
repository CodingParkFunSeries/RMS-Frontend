import React from 'react';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {post_class,get_school} from './Components/API'

class CreateSingleClassroomNavbar extends React.Component {
    componentDidMount()
  {
      get_school().then(res => 
        {
            const schools = res.data;
            this.setState({SchoolsPresent:schools})
        })
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
        SchoolsPresent:[],
        NewClass:this.initialClassDetail,
        deleteclassid:''
    }
    console.log(this.state.NewClass);
  }
  createClass ()
  {
    

    const classAdded = {
                            "schooloId": this.state.NewClass.schoolId,
                            "className": this.state.NewClass.className,
                            "isActive": this.state.NewClass.isActive,

                        } 
  
    const schoolid = this.props.match.params.SchoolId;
    post_class(schoolid,classAdded).then(res =>
        {
            this.setState({NewClass:this.initialClassDetail});
            this.props.history.push("/createclassroom/"+schoolid);
        })

  }
  handleChange(event)
  {
      this.setState({NewClass:{
          ...this.state.NewClass,
          [event.target.name]:event.target.value
      }})
  }
  myfun(value)
  {
    
        this.props.history.push("/CreateSingleClassroomNavbar/"+value);
      
  }
  render()
  {
      return(
        <div className="App" style={{color:"black"}}>
          
        <div className="row h-100 justify-content-center m-3 align-items-center">
          

          <div className="col-sm-12">
            
            <p style={{fontSize:20}}>
            Create a Classroom in School &nbsp;

                <select onChange={(event)=>this.myfun(event.target.value)}>
                
                {this.state.SchoolsPresent.map((header,index)=>{
                return(<option key={index} value={header.id}>{header.name}</option>);
                      })}
                </select>
                
                 
              </p>
            <br />
            <br />
            <InputGroup className="mb-3" >
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:140}}>Class Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder = "Enter the class name"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange.bind(this)}
                value={this.state.NewClass.className}
                name='className'
                />
            </InputGroup>

            <InputGroup className="mb-3" >
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:140}}>Active or IsActive</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder = "True or False"
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

            
          </div>
        </div>
      </div>
      );
  }
}

export default CreateSingleClassroomNavbar;