import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class InputField extends React.Component{
    render(){
      const {name,onChange,value} = this.props;
      let result = name.replace( /([A-Z])/g, " $1" );
      let lable = result.charAt(0).toUpperCase() + result.slice(1);
      let placeholder="Enter the "+lable;
      return(
        <InputGroup className="mb-3" >
              <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default" style={{width:140}}>{lable}</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder={placeholder}
              onChange={(event)=>onChange(name,event.target.value)}
              value={value}
              name='StudentDateOfBirth'
              />
          </InputGroup>
      )
    }
  }
  export default InputField;