import React from 'react';

import ViewSubject from './ViewSubject';

import ViewAllStudent from './ViewAllStudent';
import {get_class,get_school} from './Components/API'

class ViewClass extends React.Component{

    componentDidMount()
  {
    const schoolid = this.props.match.params.SchoolId;
    const classId = this.props.match.params.ClassId;
    get_class(schoolid,classId)
      .then(res => {
        const classes = res.data;
        this.setState({classname:classes.className})
        get_school(schoolid)
        .then(res => {
          const school = res.data;
          this.setState({schoolname:school.name})
          console.log("School name"+this.state.schoolname)
        })
      })
    console.log(this.state.ClassesPresent)
  }
  constructor(props)
  {
    super(props);
    
    this.state =
    {
      schoolname:'',
      classname:''
    }
  }
    render()
    {
        const SchoolId = this.props.match.params.SchoolId;
        const ClassId = this.props.match.params.ClassId;
        console.log(SchoolId+" "+ClassId);
        return(
            <div className="justify-content-center align-items-center" style={{"color":"black", "fontSize":20}}>
                
                Class <strong>{this.state.classname}</strong> of School <strong>{this.state.schoolname}</strong>
                
                <ViewSubject SchoolId ={SchoolId} ClassId = {ClassId}/>
                
                <br />
                <ViewAllStudent SchoolId ={SchoolId} ClassId = {ClassId}/>
                {/* <AddStudent SchoolId ={SchoolId} ClassId = {ClassId}/> */}
                
                

            </div>
        );
        
    }
}

export default ViewClass;