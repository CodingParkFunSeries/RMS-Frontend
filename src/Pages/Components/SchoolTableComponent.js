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
                    return(<td key={index}><strong>{header}</strong></td>)
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((dataentry,index)=>{
                  return(
                    <tr key={index} style={{cursor:'pointer'}}
                    title="Explore this School"
                    onClick={()=>{window.open('/createclassroom/'+dataentry.id,'_self')}}>
                        <td>{dataentry.id}</td>
                        <td 
                            >  {dataentry.name}
                        </td>
                        <td>{dataentry.address}</td>
                    </tr>
                  )
              })}
            </tbody>
          </Table>
        )
    }
}

export default SchoolTableComponent;