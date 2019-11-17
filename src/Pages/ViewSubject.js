import React from 'react';
import Button from 'react-bootstrap/Button';
import SubjectTableComponent from './Components/SubjectTableComponent';
import {get_subject} from './Components/API';
import { withRouter } from 'react-router-dom';
class ViewSubject extends React.Component {

  componentDidMount()
  {
    
    //console.log('Hi from add subject')
    
    const schoolId = this.props.SchoolId;
    const classId = this.props.ClassId;
    console.log("Hi from add ViewSubject"+schoolId+" "+classId);
    get_subject(schoolId,classId)
      .then(res => {
        const subjects = res.data;
        this.setState({SubjectsPresent:subjects})
        console.log("Subjects read",this.state.SubjectsPresent);
      })
      
  }

  constructor(props)
  {
    super(props);
    this.state =
    {
      SubjectsPresent:[],
      
    }
  }
  addSubjects()
  {
    const schoolId = this.props.SchoolId;
    const classId = this.props.ClassId;
    // console.log(schoolId+" "+classId);
    // console.log(this.props);
    // console.log("/AddSubject/"+schoolId+"/"+classId);
    this.props.history.push("/AddSubject/"+schoolId+"/"+classId);

  }
  render()
  {
    return (
      <div className="row h-100 justify-content-center align-items-center" style={{fontSize:12}}>
          <div> 
            <p style={{fontSize:20}}>Subjects taught are :</p>
            <div style={{background:'white'}}>
                      <SubjectTableComponent data={this.state.SubjectsPresent} headers={["Subject Id","Subject Name","Description"]}/>
            </div>

            <Button variant="outline-danger" onClick={this.addSubjects.bind(this)}>
                    Add more subjects
                </Button>
          </div>
        </div>
      );
  }
}

export default withRouter(ViewSubject);
