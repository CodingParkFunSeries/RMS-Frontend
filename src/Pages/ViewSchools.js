import React,{Component} from 'react';
import SchoolTableComponent from './Components/SchoolTableComponent';
import {get_school} from './Components/API';
import Button from 'react-bootstrap/Button';


class  ViewSchools extends Component {
    componentDidMount(){

        get_school().then(res => {
        const schools = res.data;
        this.setState({schoolsPresent:schools})
      })
         
          
    }
    constructor(props){
        super(props);
        this.initialSchoolDetail = {
            SchoolName:'',
            SchoolAddress:'',
            SchoolAddedString:''
        }
        this.state={
            schoolsPresent:[] , 
            newschool:this.initialSchoolDetail
        }
    }
    createschool ()
    {
        this.props.history.push("/CreateSchool")
    }

        
    
    handleChange(event){
        this.setState({newschool:{
            ...this.state.newschool,
            [event.target.name]:event.target.value
        }})
    }
    render()
    {
        
        return (
            <div  style={{width: "100%"}}>

                

                <div className="row h-100 justify-content-center align-items-center">

                    <div className="col-sm-8" style={{color:"black"}}>
                        
                        <p style={{fontsize:20}}>
                            All schools present in the system are:
                        </p>
                        <p >
                            <i>Click on the School name of the school which you want to explore.</i>
                        </p>
                        <div style={{background:'white'}}>
                            <SchoolTableComponent data={this.state.schoolsPresent} headers={["School ID","School Name", "School Address"]} />
                        </div>

                        
                       

                        <Button variant="outline-warning" onClick={this.createschool.bind(this)}>
                            Add more schools
                        </Button>
                    </div>
                
                    
                </div>
            </div>
        );
    }
}

export default ViewSchools;
