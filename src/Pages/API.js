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

function get_class(schoolId = 1,classId = '')
{
    return axios.get('https://ajyarms.azurewebsites.net/schools/'+schoolId+'/batches/'+classId)
}
function post_class(schoolid,classAdded)
{
  return axios.post('https://ajyarms.azurewebsites.net/schools/'+schoolid+'/batches/',classAdded,config)
}

function get_student(schoolId='',classId='',studentId='')
{
  return axios.get('https://ajyarms.azurewebsites.net/schools/'+schoolId+'/batches/'+classId+"/students/"+studentId);
}
export {
  get_school,
  post_school,
  get_class,
  post_class,
  get_student
}



