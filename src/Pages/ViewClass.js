import React from 'react';

import ViewSubject from './ViewSubject';

import ViewAllStudent from './ViewAllStudent';

class ViewClass extends React.Component{

    render()
    {
        const SchoolId = this.props.match.params.SchoolId;
        const ClassId = this.props.match.params.ClassId;
        console.log(SchoolId+" "+ClassId);
        return(
            <div className="justify-content-center align-items-center" style={{"color":"black", "fontSize":20}}>
                
                Class {ClassId} of School {SchoolId}
                
                <ViewSubject SchoolId ={SchoolId} ClassId = {ClassId}/>
                
                <br />
                <ViewAllStudent SchoolId ={SchoolId} ClassId = {ClassId}/>
                {/* <AddStudent SchoolId ={SchoolId} ClassId = {ClassId}/> */}
                
                

            </div>
        );
        
    }
}

export default ViewClass;