import React, {useState} from 'react';
import './App.css';

const App=()=>{
  const [users,setUsers] = useState([]);
  const loadUsers= async()=>{
    
    const response= await fetch ("https://reqres.in/api/users?page=1");
    const jsonresponse = await
    response.json();
    setUsers(jsonresponse.data);
    
  };
  return (
    <div className="App">
      <div className="heder">
        <h1>LET'S<span>   NAACH</span></h1>
        
        <div align="right" className="btn"><button onClick={loadUsers}>Get Data</button></div>
      </div>
      <div className="details">
        {users.map(({id,email,first_name,last_name,avatar})=>(
          
            <div className="table">
              <table width="100%" height="490px">
                <tr className="pics"  align="center">

                  <td><img src={avatar}></img></td>
                </tr>
                
                <tr>
                  <tr>Id:{id}</tr>
                  <tr>Name:{first_name} {last_name}</tr>
                  <tr>Email:{email}</tr>
                </tr>
                
              </table>
            </div>
          
        ))}
      </div>
      

          
          
        
    </div>

    
  );
};
export default App;
