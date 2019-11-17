import React from 'react';
import {get_class,get_school, get_subject, get_student} from './Components/API';

import SubjectTableComponent from './Components/SubjectTableComponent';
import StudentTableComponent from './Components/StudentTableComponent';
import Button from 'react-bootstrap/Button';

class ViewSingleClass extends React.Component{
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
        subjectsTaught:[],
        studentsPresent:[],
        schoolselected :'',
        classselected :'',
        
      }
      //this.myfun = this.myfun.bind(this);
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
        get_subject(this.state.schoolselected,value).then(res=>{ 
            const subjects = res.data;
            this.setState({subjectsTaught:subjects})
            console.log(this.state.subjectsTaught);
        })

        get_student(this.state.schoolselected,value).then(res=>{ 
            const students = res.data;
            this.setState({studentsPresent:students})
            console.log(this.state.studentsPresent);
        })
        
    }
    addSubjects()
  {
    const schoolId = this.state.schoolselected;
    const classId = this.state.classselected;
    // console.log(schoolId+" "+classId);
    // console.log(this.props);
    // console.log("/AddSubject/"+schoolId+"/"+classId);
    this.props.history.push("/AddSubject/"+schoolId+"/"+classId);

  }
  addStudents()
  {
    const schoolId = this.state.schoolselected;
    const classId = this.state.classselected;
    this.props.history.push("/AddStudent/"+schoolId+"/"+classId);
  }
    render()
    {
        // const SchoolId = this.state.schoolselected;
        // const ClassId = this.state.classselected;
        //console.log("Render "+SchoolId+" "+ClassId);
        return(
            <div className="justify-content-center align-items-center" style={{"color":"black", "fontSize":20}}>
                
                Class 

                <select onChange={(event)=>this.myfunclass(event.target.value)}>
                <option defaultChecked="">Please Select</option>
                    {this.state.classesPresent.map((header,index)=>{
                    return(<option key={index}>{header.id}</option>);
                        })}
                </select> 
                
                of School 
                <select onChange={(event)=>this.myfun(event.target.value)}>
                <option defaultChecked="">Please Select</option>
                    {this.state.schoolsPresent.map((header,index)=>{
                    return(<option key={index}>{header.id}</option>);
                        })}
                </select>
                

                <div className="row h-100 justify-content-center align-items-center" style={{fontSize:12}}>
                    <div> 
                        <p style={{fontSize:20}}>Subjects taught are :</p>
                        <div style={{background:'white'}}>
                                <SubjectTableComponent data={this.state.subjectsTaught} headers={["Subject Id","Subject Name","Description"]}/>
                        </div>

                        <Button variant="outline-danger" onClick={this.addSubjects.bind(this)}>
                                Add more subjects
                            </Button>
                    </div>
                </div>

                <div className="row h-100 justify-content-center m-3 align-items-center" style={{fontSize:12}}>
  
                    <div className="col-sm-8"> 
                    <p style={{fontSize:20}}> Students present are:</p>
                    </div>
                    <div className="col-sm-8"> 
                    <div style={{background:'white'}}>
                                <StudentTableComponent data={this.state.studentsPresent} headers={["Student Id","Name","Date Of Birth","Address","Email","Nationality","Enrollment Date","Zipcode","City","State","Country","SchoolId","BatchId","Mobile Number","Gender"]}/>
                    </div>
                    <Button variant="outline-danger" onClick={this.addStudents.bind(this)}>
                                Add more students
                    </Button>
                    </div>
                    <br />
                    <br />
                
                
                </div>


                {/* <ViewSubject SchoolId ={SchoolId} ClassId = {ClassId}/>
                
                <br />
                <ViewAllStudent SchoolId ={SchoolId} ClassId = {ClassId}/> */}
                {/* <AddStudent SchoolId ={SchoolId} ClassId = {ClassId}/> */}
                
                

            </div>
        );
        
    }
}

export default ViewSingleClass;