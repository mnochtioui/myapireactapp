import React, { useEffect, useState } from "react";

const DoGET = () => {
 const [data, setData] = useState([]);// where to store the returned data
 const [error, setError] = useState(null);// where to store the coming errors
 useEffect(() => {
   function fetchData() {// the function to fetch data from the api
     fetch("https://hn.algolia.com/api/v1/search?query=redux")
       .then(res => res.json())
       .then(res => setData(res.hits))
       .catch(err => setError(err));
   }

   fetchData();
 }, []);

//  console.log("data >> "+JSON.stringify(data));
//  console.log("error >> "+JSON.stringify(error));
 return <div>
  <h1>Hello API</h1>
 
   {JSON.stringify(data)}
  <hr />
  {JSON.stringify(error)}
  <hr />
  <ul>
       {data.map(course => (
         <li>
           <a href={course.url}> {course.title}</a>
         </li>
       ))}
     </ul>
 </div>;
};
export default DoGET;