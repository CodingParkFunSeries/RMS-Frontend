import React,{Component} from 'react';
import Table from 'react-bootstrap/Table';

class StudentTableComponent extends Component{

    render()
    {
        const {data,headers} = this.props;
        //console.log(data)
        return(
            <Table striped bordered hover>
                <thead>
                <tr>
                    {headers.map((header,index)=>{
                        return(<td key={index}><strong>{header}</strong></td>)
                    })}
                </tr>
                </thead>
                <tbody>
                {data.map((dataentry,index)=>{
                    return(
                        <tr key={index}
                            style={{cursor:'pointer'}}
                            title="Explore this Student"
                            onClick={()=>{window.open('/ViewStudent/'+dataentry.schoolId+'/'+dataentry.batchId+'/'+dataentry.id,'_self')}}
                        >
                            
                            <td 
                                >  {dataentry.id}
                            </td>
                            <td>{''+dataentry.name}</td>
                            <td>{''+dataentry.birthdate}</td>
                            <td>{''+dataentry.address}</td>
                            <td>{''+dataentry.email}</td>
                            <td>{''+dataentry.nationality}</td>
                            <td>{''+dataentry.enrollmentDate}</td>
                            <td>{''+dataentry.zipCode}</td>
                            <td>{''+dataentry.city}</td>
                            <td>{''+dataentry.state}</td>
                            <td>{''+dataentry.country}</td>
                            <td>{''+dataentry.schoolId}</td>
                            <td>{''+dataentry.batchId}</td>
                            <td>{''+dataentry.mobileNumber}</td>
                            <td>{''+dataentry.gender}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        );
    }
}

export default StudentTableComponent;