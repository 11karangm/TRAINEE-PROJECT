import userdetails from "../../assets/data";
import {images} from "../../assets/userimages/imagelog"


function DarkExample() {
  return (
    <div>
          <table>
            
          <thead>
            <th>Name</th>
            <th>Work</th>
            <th>Age</th>
          </thead>
          <tbody>

          {userdetails.map((data,index)=>(
          <tr>
          <td>{data.name}</td>
          <td>{data.work}</td>
          <td>{data.age}</td>
          
          
          
          
        </tr>

        ))}
          
          </tbody>
        </table>
    </div>
  );
}

export default DarkExample;