import React from 'react';
import {get_student,get_semester,get_exam,get_marks} from './Components/API';
import StudentTableComponent from './Components/StudentTableComponent';
import MarksTableComponent from './Components/MarksTableComponent';
class ViewStudent extends React.Component {

  componentDidMount()
  {
    const schoolId = this.props.match.params.SchoolId;
    const classId = this.props.match.params.ClassId;
    const studentId = this.props.match.params.StudentId;
    //console.log(schoolId+" "+classId);
    //console.log(this.props);
    get_student(schoolId,classId,studentId)
      .then(res => {
        const students = res.data;
        this.setState({StudentsPresent:[students]})
      })  
    get_semester(schoolId)
    .then(res => {
      const semesters = res.data;
      this.setState({SemestersPresent:semesters})
    })

    

  }

  constructor(props)
  {
    super(props);
    
    this.state =
    {
      StudentsPresent:[],
      SemestersPresent:[],
      ExamsPresent:[],
      marks:[],
      semesterselected :'',
      examselected :'',
      
    }
    this.myfun = this.myfun.bind(this);
  }

  
myfun(value){
    const schoolId = this.props.match.params.SchoolId;
    const classId = this.props.match.params.ClassId;
    this.setState({semesterselected:value})
    this.setState({examselected:''})
    console.log("Class Id"+classId)
  get_exam(schoolId,value,classId)
    .then(res => {
      const exams = res.data;
      this.setState({ExamsPresent:exams})
    })
}
myfunexam(value)
{
  this.setState({examselected:value});
  const schoolId = this.props.match.params.SchoolId;
  console.log("School Id "+schoolId+' semester '+this.state.semesterselected+' exam: '+value +' student: '+this.props.match.params.StudentId)
  get_marks(schoolId,this.state.semesterselected,value,this.props.match.params.StudentId)
    .then(res => {
      const mark = res.data;
      this.setState({marks:mark})
      console.log("Marks obtained: ",this.state.marks)
    })
    
}
  render()
  {
    //console.log(this.state)
    return (
        <div className="row h-100 justify-content-center m-3 align-items-center" style={{fontSize:12 ,color:"black"}}>
          
          
          <p style={{fontSize:20}}> Students details are:</p>
          <div className="col-sm-12"> 
            <div style={{background:'white'}}>
                      <StudentTableComponent data={this.state.StudentsPresent} headers={["Student Id","Name","Date Of Birth","Address","Email","Nationality","Enrollment Date","Zipcode","City","State","Country","SchoolId","BatchId","Mobile Number","Gender"]}/>
            </div>
          </div>

          <div className="col-sm-6"> 
            <p style={{fontSize:20}}> Select semester:</p>
            <div > 
              <select id="semester" name="semester" onChange={(event)=>this.myfun(event.target.value)}>
              <option defaultChecked="">Please Select</option>
              {this.state.SemestersPresent.map((header,index)=>{
              return(<option key={index}>{header.id}</option>);
                    })}
              </select>
            </div>
          </div>

          <div className="col-sm-6"> 
          <p style={{fontSize:20}}> Select exam:</p>
          <select  id="exam" name="exam" onChange={(event)=>this.myfunexam(event.target.value)}>
                <option defaultChecked="">Please Select</option>
                {this.state.ExamsPresent.map((header,index)=>{
                  return(<option key={index}>{`${header.id} `}</option>);
                    })}
              </select>
          </div>
          
          <div className="col-sm-12"> 
            <p style={{fontSize:20}}> Marks for Semester {this.state.semesterselected} and Exam {this.state.examselected} are: </p>
          
            <div style={{background:'white'}}>
                      <MarksTableComponent data={this.state.marks} headers={["Subject Id","Marks Obtained"]}/>
            </div>
          </div> 
          <br />

        </div>
      );
  }
}

export default ViewStudent;
