import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserList = () => {

    const [listOfUSer, setListOfUSer] = useState([]);// where to store the returned data
    const [error, setError] = useState(null);// where to store the coming errors
    
        

        useEffect(() => {

            function fetchData() {// the function to fetch data from the api
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                // handle success
                setListOfUSer(response.data);
                console.log(response);
                })
                .catch(function (error) {
                // handle error
                setError(error);
                console.log(error);
                })
            }
 
            fetchData();
        }, []);
    console.log(listOfUSer);
    console.log(error);

 

  return (
    <div>
        UserList 
     
    <hr/>
    {/* {JSON.stringify(listOfUSer)}
    <hr/> */}
    <table><thead><tr><th>#</th><th> Name</th><th>Username</th><th>E-mail</th><th>Phone</th><th>Website</th></tr></thead><tbody>
        {
            listOfUSer.map((u)=>           <tr><td>{u.id}</td><td>{u.name}</td><td>{u.username}</td><td>{u.email}</td><td>{u.phone}</td><td>{u.website}</td></tr>  )
        }
        </tbody>
    </table>
    <hr/>
    {JSON.stringify(error)}
    </div>
  )
}

export default UserList;