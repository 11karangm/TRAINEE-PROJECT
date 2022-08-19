
import React from "react";


function DarkExample({users}) {
  return (
    <div>
          <table>
            
          <thead>
          <th>Image</th>
            
            <th>First Name</th>
          
            <th>Maiden Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Password</th>
            <th>BirthDate</th>
          
            
            
          </thead>
          <tbody>

          {users&&users.map((data,index)=>(
          <tr>
            <td><img src={data.image} style={{width:50,height:50}}/></td>
            
          <td>{data.firstName}</td>
          
          <td>{data.maidenName}</td>
          <td>{data.age}</td>
          <td>{data.gender}</td>
          <td id="emaail">{data.email}</td>
          <td>{data.phone}</td>
          <td>{data.username}</td>
          <td>{data.password}</td>
          <td>{data.birthDate}</td>
        
          
          
          
          
          
        </tr>

        ))}
          
          </tbody>
        </table>
    </div>
  );
}

export default DarkExample;