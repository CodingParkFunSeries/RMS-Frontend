import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import SchoolTableComponent from './Components/SchoolTableComponent';
import mockschooldata from './mockdata/schooldata';

class  AdminHomePage extends Component {
    componentDidMount(){
        this.setState({schoolsPresent:mockschooldata})  
    }
    constructor(props){
        super(props);
        this.initialSchoolDetail = {
            SchoolName:'',
        }
        this.state={
            schoolsPresent:[] , 
            newschool:this.initialSchoolDetail
        }
    }
    createschool (){
        this.setState({
            schoolsPresent:[...this.state.schoolsPresent,this.state.newschool],
            newschool:this.initialSchoolDetail
        })
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
            <div className="App">
                
                <div style={{background:'white'}}>
                    <SchoolTableComponent data={this.state.schoolsPresent} headers={["School ID","School Name"]} />
                </div>
                
                <br />
                <InputGroup className="mb-3" style = {{width:"50%"}}>
                    <InputGroup.Prepend>
                    <InputGroup.Text 
                        id="inputGroup-sizing-default"
                        style={{width:100}}
                    >Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Enter School name"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.newschool.SchoolName}
                        name='SchoolName'
                    />
                </InputGroup>

                <Button variant="outline-danger" onClick={this.createschool.bind(this)}>
                    Create School
                </Button>                
            </div>
        );
    }
}

export default AdminHomePage;
