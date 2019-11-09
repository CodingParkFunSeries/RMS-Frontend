import axios from "axios";


const config = 
{
  headers:{
            'Content-Type': 'application/json'
          }
}

function get_school(id ='')
{
  return axios.get('https://ajyarms.azurewebsites.net/schools/'+id)
}

const post_school = (school)=>{

  return axios.post('https://ajyarms.azurewebsites.net/schools/',school,config);
}

export {
  get_school,
  post_school
}



