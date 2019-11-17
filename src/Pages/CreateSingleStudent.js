import React from 'react';
import {get_class,get_school} from './Components/API';
import InputField from './Components/AddStudentInput'
import {post_student} from './Components/API';
import Button from 'react-bootstrap/Button';

class CreateSingleStudent extends React.Component{
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
        schoolId: '',
        batchId: '',
        mobileNumber: '',
        gender: ''
        
      }
      this.state =
      {
       
        schoolsPresent:[],
        classesPresent:[],
        subjectsTaught:[],
        studentsPresent:[],
        schoolselected :'',
        classselected :'',
        NewStudent:this.initialStudentDetail
        
      }
      //this.myfun = this.myfun.bind(this);
    }
  
    addStudent ()
  {
    console.log("New studnet is "+this.state.NewStudent)
    // this.setState({
    //     StudentsPresent:[...this.state.StudentsPresent,this.state.NewStudent],
    //     NewStudent:this.initialStudentDetail
    // })

    const schoolId = this.state.schoolselected;
    const classId = this.state.classselected;

    post_student(schoolId,classId,this.state.NewStudent).then(res => {
      this.setState({
        NewStudent:this.initialStudentDetail
      })
      this.props.history.push("/ViewClass/"+schoolId+"/"+classId); 
      
    })

    

  }
  handleChange(name,value)
  {
      this.setState({NewStudent:{
          ...this.state.NewStudent,
          [name]:value
      }})
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
                <div className="col-sm-12">
          <br />
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

export default CreateSingleStudent;