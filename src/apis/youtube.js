import  axios from 'axios';


//this api key will be used by our users .....actually this key can be public...
//we can restrict key in google developer console....like only localhost...etc

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  
});
//explore this code in youtube list api doc....
