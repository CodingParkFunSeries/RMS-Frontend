import React from 'react';

import Button from 'react-bootstrap/Button';
import StudentTableComponent from './Components/StudentTableComponent';
import InputField from './Components/AddStudentInput'
import {get_student,post_student} from './Components/API';



class AddStudent extends React.Component {

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
    const schoolId = this.props.SchoolId;
    const classId = this.props.ClassId;
    
    this.initialStudentDetail = {
      name: '',
      birthDate: '',
      address: '',
      email: '',
      nationality: '',
      enrollmentDate: '',
      zipCode: '',
      city: '',
      state: '',
      country: '',
      schoolId: schoolId,
      batchId: classId,
      mobileNumber: '',
      gender: ''
      
    }
    this.state =
    {
      StudentsPresent:[],
      NewStudent:this.initialStudentDetail
    }
  }

  addStudent ()
  {
    console.log("New studnet is "+this.state.NewStudent)
    // this.setState({
    //     StudentsPresent:[...this.state.StudentsPresent,this.state.NewStudent],
    //     NewStudent:this.initialStudentDetail
    // })

    const schoolId = this.props.SchoolId;
    const classId = this.props.ClassId;

    post_student(schoolId,classId,this.state.NewStudent).then(res => {
      this.setState({
        NewStudent:this.initialStudentDetail
      })
      get_student(schoolId,classId)
      .then(res => {
        const classes = res.data;
        this.setState({StudentsPresent:classes})
        console.log("Classes present are: ",this.state.StudentsPresent) 
      })
    })

    

  }
  handleChange(name,value)
  {
      this.setState({NewStudent:{
          ...this.state.NewStudent,
          [name]:value
      }})
  }

  render()
  {
    
    //console.log("Addstudent "+SchoolId+" "+ClassId);
    return (
      
      
      <div className="row h-100 justify-content-center m-3 align-items-center" style={{fontSize:12}}>
  <p style={{fontSize:20}}> Students present are:</p>
          <div className="col-sm-12"> 
          <div style={{background:'white'}}>
                    <StudentTableComponent data={this.state.StudentsPresent} headers={["Student Id","Name","Date Of Birth","Address","Email","Nationality","Enrollment Date","Zipcode","City","State","Country","SchoolId","BatchId","Mobile Number","Gender"]}/>
          </div>
          </div>
          <br />
          <br />
          
          <div className="col-sm-6">
          <p style={{fontSize:20}}> Add a student in classroom</p>
          {Object.keys(this.initialStudentDetail)
          .filter((key)=>{
              if(key!=='schoolId'&&key!=='batchId'){
                return true;
              }
              return false;
          })
          .map((key)=>{
            return(
              <InputField
                onChange={this.handleChange.bind(this)}
                name={key}
                value={this.state.NewStudent[key]}
                key={key}
              />
            )
          })}
          
            
              <Button variant="outline-danger" onClick={this.addStudent.bind(this)}>
                  Add Student
              </Button>
    
              
            
            
          </div>
        </div>
      );
  }
}

export default AddStudent;
