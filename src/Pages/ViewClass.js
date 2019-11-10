import React from 'react';
import AddSubject from './AddSubject';
import AddStudent from './AddStudent';
class ViewClass extends React.Component{

    render()
    {
        const SchoolId = this.props.match.params.SchoolId;
        const ClassId = this.props.match.params.ClassId;
        //console.log(SchoolId+" "+ClassId);
        return(
            <div className="justify-content-center align-items-center">
                School : {SchoolId}
                <br />
                Class : {ClassId}
                <AddSubject SchoolId ={SchoolId} ClassId = {ClassId}/>
                <br />
                <AddStudent SchoolId ={SchoolId} ClassId = {ClassId}/>
                
                

            </div>
        );
        
    }
}

export default ViewClass;