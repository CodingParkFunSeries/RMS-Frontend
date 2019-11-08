import React from 'react';


import StudentTableComponent from './Components/StudentTableComponent';
import MockClass1Studentdata from './mockdata/studentdata';
class ViewStudent extends React.Component {

  componentDidMount()
  {
    this.setState({StudentsPresent:MockClass1Studentdata})
    console.log(this.props);  
  }

  constructor(props)
  {
    super(props);
    
    this.state =
    {
      StudentsPresent:[],
      
    }
  }

  

  render()
  {
    return (
        <div>
          

          <div style={{background:'white'}}>
                    <StudentTableComponent data={this.state.StudentsPresent} headers={["Student Id","Name","Address","Contact No","Date Of Birth"]}/>
          </div>

          <br />

          

            
              
    
              
            
            
          
        </div>
      );
  }
}

export default ViewStudent;
