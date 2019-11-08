import React,{Component} from 'react';
import Table from 'react-bootstrap/Table';

class StudentTableComponent extends Component{

    render()
    {
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
                {data.map((dataentry,index)=>{
                    return(
                        <tr key={index}>
                            
                            <td 
                                style={{cursor:'pointer'}}
                                title="Explore this Student"
                                onClick={()=>{window.open('/ViewStudent/'+dataentry.StudentId,'_self')}}>  {dataentry.StudentId}
                            </td>
                            <td>{dataentry.StudentName}</td>
                            <td>{dataentry.StudentAddress}</td>
                            <td>{dataentry.StudentContactNo}</td>
                            <td>{dataentry.StudentDateOfBirth}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        );
    }
}

export default StudentTableComponent;