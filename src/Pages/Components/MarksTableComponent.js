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
                        return(<td key={index}>{header}</td>)
                    })}
                </tr>
                </thead>
                <tbody>
                {data.map((dataentry,index)=>{
                    return(
                        <tr key={index}>
                            <td>{''+dataentry.subjectId}</td>
                            <td>{''+dataentry.marks}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        );
    }
}

export default StudentTableComponent;