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

function post_student(schoolId='',classId='',studentAdded)
{
  return axios.post('https://ajyarms.azurewebsites.net/schools/'+schoolId+'/batches/'+classId+"/students/",studentAdded,config);
}
function get_subject(schoolId = '',classId = '',subjectId='')
{
  
    return axios.get('https://ajyarms.azurewebsites.net/schools/'+schoolId+'/semesters/1/batches/'+classId+'/subjects/'+subjectId);
}

function post_subject(schoolId = 1,classId = '',subjectAdded)
{
    return axios.post('https://ajyarms.azurewebsites.net/schools/'+schoolId+'/semesters/1/batches/'+classId+'/subjects/',subjectAdded,config);
}

export {
  get_school,
  post_school,
  get_class,
  post_class,
  get_student,
  post_student,
  get_subject,
  post_subject
}



