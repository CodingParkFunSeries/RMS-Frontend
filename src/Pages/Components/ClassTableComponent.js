import React,{Component} from 'react';
import Table from 'react-bootstrap/Table';

class ClassTableComponent extends Component{
    render(){
        const {data,headers,SchoolId} = this.props;
        console.log(data);
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
                            title="Explore this Class"
                            onClick={()=>{window.open('/ViewClass/'+SchoolId+"/"+dataentry.id,'_self')}}>  {dataentry.id}
                        </td>
                        <td>{dataentry.schoolId}</td>
                        <td>{dataentry.className}</td>
                        <td>{''+dataentry.isActive}</td>
                    </tr>
                  )
              })}
            </tbody>
          </Table>
        )
    }
}

export default ClassTableComponent;