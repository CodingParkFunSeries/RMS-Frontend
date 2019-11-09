import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import SchoolTableComponent from './Components/SchoolTableComponent';
import {get_school,post_school} from './Components/API';



class  AdminHomePage extends Component {
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
            SchoolAddress:''
        }
        this.state={
            schoolsPresent:[] , 
            newschool:this.initialSchoolDetail
        }
    }
    createschool (){
        const school = {
            "name": this.state.newschool.SchoolName,
            "address": this.state.newschool.SchoolAddress

        } 
        console.log(school);
        
        post_school(school).then(res => {
            this.setState({
                newschool:this.initialSchoolDetail
            })
    
            get_school().then(res => {
            const schools = res.data;
            this.setState({schoolsPresent:schools})
          })
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

                <div class="row h-100 justify-content-center m-3 align-items-center">

                    <div class="col-sm-8">
                        Click on the School name of the school which you want to explore.
                        <div style={{background:'white'}}>
                            <SchoolTableComponent data={this.state.schoolsPresent} headers={["School ID","School Name", "School Address"]} />
                        </div>
                    </div>
                
                    <div class="col-sm-4">
                        Add a new school.
                        <InputGroup className="mb-3" >
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

                        <InputGroup className="mb-3" >
                            <InputGroup.Prepend>
                            <InputGroup.Text 
                                id="inputGroup-sizing-default"
                                style={{width:100}}
                            >Address</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Enter School address"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.newschool.SchoolAddress}
                                name='SchoolAddress'
                            />
                        </InputGroup>

                        <Button variant="outline-danger" onClick={this.createschool.bind(this)}>
                            Create School
                        </Button>                
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminHomePage;
