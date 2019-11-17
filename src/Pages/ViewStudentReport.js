import React from 'react';
import {get_class,get_school,get_student,get_semester,get_exam,get_marks} from './Components/API';

import SubjectTableComponent from './Components/SubjectTableComponent';
import StudentTableComponent from './Components/StudentTableComponent';
import Button from 'react-bootstrap/Button';
import MarksTableComponent from './Components/MarksTableComponent';

class ViewStudentReport extends React.Component{
    componentDidMount()
    {
      get_school()
        .then(res => {
          const schools = res.data;
          this.setState({schoolsPresent:schools})
          console.log(this.state.schoolsPresent);

          
        })  
    }
  
    constructor(props)
    {
      super(props);
      
      this.state =
      {
       
        schoolsPresent:[],
        classesPresent:[],
        studentsPresent:[],
        schoolselected :'',
        classselected :'',
        studentselected :'',
        StudentsPresent:[],
        SemestersPresent:[],
        ExamsPresent:[],
        marks:[],
        semesterselected :'',
        examselected :''
        
      }
        this.myfun = this.myfun.bind(this);
    }
  
    
    myfun(value)
    {
        console.log(value);
        get_class(value).then(res=>{ 
            const classes = res.data;
            this.setState({classesPresent:classes})
            console.log(this.state.classesPresent);
            this.setState({schoolselected:value})
        })
    }

    myfunclass(value)
    {
        console.log(value);
        this.setState({classselected:value})
        get_student(this.state.schoolselected,value).then(res=>{ 
            const students = res.data;
            this.setState({studentsPresent:students})
            console.log(this.state.studentsPresent);
        })
       
        
    }

    myfunstudent(value)
    {
        
        get_student(this.state.schoolselected,this.state.classselected,value)
        .then(res => {
            const students = res.data;
            this.setState({studentselected:value})
            this.setState({StudentsPresent:[students]})
            console.log(this.state.schoolselected+" "+this.state.classselected+" "+this.state.studentselected);
        })  
        get_semester(this.state.schoolselected)
        .then(res => {
        const semesters = res.data;
        this.setState({SemestersPresent:semesters})
        })
        
    }
    myfunsemester(value){
        const schoolId = this.state.schoolselected;
        const classId = this.state.classselected;
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
      const schoolId = this.state.schoolselected;
      console.log("School Id "+schoolId+' semester '+this.state.semesterselected+' exam: '+value +' student: '+this.state.studentselected)
      get_marks(schoolId,this.state.semesterselected,value,this.state.studentselected)
        .then(res => {
          const mark = res.data;
          this.setState({marks:mark})
          console.log("Marks obtained: ",this.state.marks)
        })
        
    }
    render()
    {
        // const SchoolId = this.state.schoolselected;
        // const ClassId = this.state.classselected;
        //console.log("Render "+SchoolId+" "+ClassId);
        return(
            <div className="row h-100 justify-content-center align-items-center" style={{"color":"black", "fontSize":12}}>
                
                <p style={{fontSize:20}}>School &nbsp;
                <select onChange={(event)=>this.myfun(event.target.value)}>
                <option defaultChecked="">Select School</option>
                    {this.state.schoolsPresent.map((header,index)=>{
                    return(<option key={index}>{header.id}</option>);
                        })}
                </select></p>

                &nbsp; <p style={{fontSize:20}}>Class &nbsp;

                <select onChange={(event)=>this.myfunclass(event.target.value)}>
                <option defaultChecked="">Select Class</option>
                    {this.state.classesPresent.map((header,index)=>{
                    return(<option key={index}>{header.id}</option>);
                        })}
                </select> </p>

                &nbsp; <p style={{fontSize:20}}>Student &nbsp;

                <select onChange={(event)=>this.myfunstudent(event.target.value)}>
                <option defaultChecked="">Select Student</option>
                    {this.state.studentsPresent.map((header,index)=>{
                    return(<option key={index}>{header.id}</option>);
                        })}
                </select> </p>
                
              
                <div className="col-sm-12"> 
                    <br />
                    <br />
                    <p style={{fontSize:20}}> Students details are:</p>
                    <div style={{background:'white'}}>
                            <StudentTableComponent data={this.state.StudentsPresent} headers={["Student Id","Name","Date Of Birth","Address","Email","Nationality","Enrollment Date","Zipcode","City","State","Country","SchoolId","BatchId","Mobile Number","Gender"]}/>
                    </div>
                </div>

                <div className="col-sm-6"> 
                    <p style={{fontSize:20}}> Select semester:</p>
                    <div > 
                    <select id="semester" name="semester" onChange={(event)=>this.myfunsemester(event.target.value)}>
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

export default ViewStudentReport;