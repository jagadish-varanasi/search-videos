import  axios from 'axios';

const KEY='AIzaSyDoXxm4zYEwjM3OePvOPIPkNJQjI8omIcA';
//this api key will be used by our users .....actually this key can be public...
//we can restrict key in google developer console....like only localhost...etc

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
   params:{
       part:'snippet',
       maxResults:5,
       key:KEY
   }
});
//explore this code in youtube list api doc....
