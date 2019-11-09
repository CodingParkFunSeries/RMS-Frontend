import React,{Component} from 'react';
import Table from 'react-bootstrap/Table';

class SchoolTableComponent extends Component{
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
                        <td>{dataentry.Schoolid}</td>
                        <td 
                            style={{cursor:'pointer'}}
                            title="Explore this School"
                            onClick={()=>{window.open('/createclassroom/'+dataentry.Schoolid,'_self')}}>  {dataentry.SchoolName}
                        </td>
                    </tr>
                  )
              })}
            </tbody>
          </Table>
        )
    }
}

export default SchoolTableComponent;