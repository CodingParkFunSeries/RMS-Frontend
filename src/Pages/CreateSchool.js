import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import {post_school} from './Components/API';



class  CreateSchool extends Component {
    
    constructor(props){
        super(props);
        this.initialSchoolDetail = {
            SchoolName:'',
            SchoolAddress:'',
            
        }
        this.state={
             
            newschool:this.initialSchoolDetail,
            SchoolAddedString:''
        }
    }
    createschool (){
        const school = {
            "name": this.state.newschool.SchoolName,
            "address": this.state.newschool.SchoolAddress

        } 
        console.log(school);
        
        post_school(school).then(res => {
            this.setState({newschool:this.initialSchoolDetail})
            // var message = "New school has been added successfully!! To view all schools present <a href=\"\\Viewschools\">Click</a> here."
            // this.setState({SchoolAddedString:message})
            this.props.history.push("/ViewSchools");
            
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
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-sm-12" style={{color:"black" }}>
                        <p style={{fontsize:200}}>Add a new school.</p>
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

                        <Button variant="outline-success" onClick={this.createschool.bind(this)}>
                            Create School
                        </Button> 

                        {/* <p style={{fontsize:10, color:"red"}}>
                        <div dangerouslySetInnerHTML={{__html: this.state.SchoolAddedString}} />
                          
                        </p>                */}
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateSchool;
