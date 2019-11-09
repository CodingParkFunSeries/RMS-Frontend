import React from 'react';
import AddSubject from './AddSubject';
import AddStudent from './AddStudent';
class ViewClass extends React.Component{

    render()
    {
        return(
            <div>
                <AddStudent />
                <br />
                <AddSubject />

            </div>
        );
        
    }
}

export default ViewClass;