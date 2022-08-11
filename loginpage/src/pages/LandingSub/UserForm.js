import React from "react";
import "../css/AddUser.css"

function UserForm () {

    return (
        <div className="user">

        <h2>
            ADD USER
        </h2>

        <div className="Form-Container2">

            <div className="formm">
                <form action="">
                    <label for="fname">First name <span>*</span>:</label>
                    <input type="text" id="fname" name="fname"/><br></br>
                    
                    <label for="lname">Last name<span>*</span>:</label>
                    <input type="text" id="lname" name="lname"/><br></br>
                    
                    <label for="nickname">Nick name<span>*</span>:</label>
                    <input type="text" id="nickname" name="nickname"/><br></br>
                    
                    <label for="dob">Date of Birth<span>*</span>:</label>
                    <input type="text" id="dob" name="dob"/><br></br>
                    
                    <label for="startdate">Start Date<span>*</span>:</label>
                    <input type="text" id="startdate" name="startdate"/><br></br>

                    <label for="gender">Gender<span>*</span>:</label>
                    <select name="contactode" id="contactcode">
                    <option value=""></option>  
                    <option value="Male">Male</option> 
                    <option value="Female">Female</option> 
                    </select><br></br>



                    <label for="email">Email<span>*</span>:</label>
                    <input type="text" id="email" name="email"/><br></br>

                </form>

            </div>

            <div className="formm">
                <form action="">

                <label for="address">Address<span>*</span>:</label>
                <input type="text" id="address" name="address"/><br></br>

                <label for="contact">Contact Number<span>*</span>:</label>
                <select name="contactode" id="contactcode">
                    <option value=""></option>  
                    <option value="+91">+91</option>  
                    
                </select><br></br>

                <label for="contactone">Contact Number<span>*</span>:</label>
                <input type="text" id="contactone" name="contactone"/><br></br>

                <label for="status">Status<span>*</span>:</label>
                <select name="status" id="status">
                    <option value=""></option>  
                    <option value="waiting">waiting</option>  
                    <option value="approved">approved</option>  
                </select><br></br>

                
                <label for="photo">Photo<span>*</span>:</label>
                <input type="file" id="photo" name="photo"/><br></br>

                <label for="save"></label>
                <input type="submit" value="Save"/><br></br>


                </form>
            </div>
            
            
        
        </div>
        
        </div>
    );

}

export default UserForm;