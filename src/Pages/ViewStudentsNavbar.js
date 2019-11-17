import React from 'react';

import {get_class,get_school, get_student} from './Components/API';

import StudentTableComponent from './Components/StudentTableComponent';
import Button from 'react-bootstrap/Button';

class ViewStudentsNavbar extends React.Component{
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
        

        get_student(this.state.schoolselected,value).then(res=>{ 
            const students = res.data;
            this.setState({studentsPresent:students})
            console.log(this.state.studentsPresent);
        })
        
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
                
                Class &nbsp;  

                <select onChange={(event)=>this.myfunclass(event.target.value)}>
                <option defaultChecked="">Please Select</option>
                    {this.state.classesPresent.map((header,index)=>{
                    return(<option key={index}value={header.id}>{header.className}</option>);
                        })}
                </select> 
                
                &nbsp; of School &nbsp;  
                <select onChange={(event)=>this.myfun(event.target.value)}>
                <option defaultChecked="">Please Select</option>
                    {this.state.schoolsPresent.map((header,index)=>{
                    return(<option key={index}value={header.id}>{header.name}</option>);
                        })}
                </select>
                

                

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


                
                
                

            </div>
        );
        
    }
}

export default ViewStudentsNavbar;