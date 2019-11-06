import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {Link} from 'react-router-dom'

class SchoolTable extends Component{
    render(){
        const {data,headers} = this.props;
        return(
            <Table striped bordered hover>
            <thead>
              <tr>
                {headers.map((header,index)=>{
                    return(<td key={index}>{header}</td>)
                })}
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((key,index)=>{
                  return(
                    <tr key={index}>
                        <td>{key}</td>
                        <Link to='/createclassroom'>
                            <td>{data[key].schoolname}</td>
                        </Link>
                        <td>{data[key].strength}</td>
                    </tr>
                  )
              })}
            </tbody>
          </Table>
        )
    }
}
class  AdminHomePage extends Component {
    componentDidMount(){
        const schoolsPresent = require('./mockdata/schooldata.json');
        this.setState({schoolsPresent})  
    }
    constructor(props){
        super(props);   
        this.state={
            schoolsPresent:{} , 
            newschool:{
                name:'',
                strength:''
            }
        }
    }
    createschool (){
        let newid = 'sid'+(Object.keys(this.state.schoolsPresent).length+1);
        this.setState({schoolsPresent:{...this.state.schoolsPresent,[newid]:{
            schoolname:this.state.newschool.name,
            strength:this.state.newschool.strength
        }}})
        this.setState({newschool:{
            name:'',
            strength:'',
            sid:''
        }})
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
                    <SchoolTable data={this.state.schoolsPresent} headers={["School ID","School Name","Strength"]}/>
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
                        value={this.state.newschool.name}
                        name='name'
                    />
                </InputGroup>

                <InputGroup className="mb-3" style = {{width:"50%"}}>
                    <InputGroup.Prepend>
                    <InputGroup.Text 
                        style={{width:100}}
                        id="inputGroup-sizing-default">Strength</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Enter School Strength"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.newschool.strength}
                        name='strength'
                        type='number'
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
