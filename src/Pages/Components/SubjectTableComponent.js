import React,{Component} from 'react';
import Table from 'react-bootstrap/Table';

class SubjectTableComponent extends Component{
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
              {data.map((dataentry,index)=>{
                  return(
                    <tr key={index}>
                        <td>{dataentry.Subject}</td>
                        <td>{dataentry.Teacher}</td>
                    </tr>
                  )
              })}
            </tbody>
          </Table>
        )
    }
}

export default SubjectTableComponent;