import React from 'react';
import Button from 'react-bootstrap/Button';
import StudentTableComponent from './Components/StudentTableComponent';

import {get_student} from './Components/API';
import { withRouter } from 'react-router-dom';


class ViewAllStudent extends React.Component {

  componentDidMount()
  {
    const schoolId = this.props.SchoolId;
    const classId = this.props.ClassId;
    get_student(schoolId,classId)
      .then(res => {
        const students = res.data;
        this.setState({StudentsPresent:students})
        
      })
    
  }

  constructor(props)
  {
    super(props);
    
    
    
    this.state =
    {
      StudentsPresent:[],
      
    }
  }

  addStudents()
  {
    const schoolId = this.props.SchoolId;
    const classId = this.props.ClassId;
    this.props.history.push("/AddStudent/"+schoolId+"/"+classId);
  }
  render()
  {
    
    //console.log("Addstudent "+SchoolId+" "+ClassId);
    return (
      
      
      <div className="row h-100 justify-content-center m-3 align-items-center" style={{fontSize:12}}>
  
          <div className="col-sm-8"> 
          <p style={{fontSize:20}}> Students present are:</p>
          </div>
          <div className="col-sm-8"> 
          <div style={{background:'white'}}>
                    <StudentTableComponent data={this.state.StudentsPresent} headers={["Student Id","Name","Date Of Birth","Address","Email","Nationality","Enrollment Date","Zipcode","City","State","Country","SchoolId","BatchId","Mobile Number","Gender"]}/>
          </div>
          <Button variant="outline-danger" onClick={this.addStudents.bind(this)}>
                    Add more students
          </Button>
          </div>
          <br />
          <br />
          
          
        </div>
      );
  }
}

export default withRouter(ViewAllStudent);
