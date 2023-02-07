import React, { useState } from "react";
import Fields from "../Components/Fields";
import axios from 'axios';
function Btn() {
//   const [textValue, setTextValue] = useState("");
const [error, setError] = useState("");
  const [showTextField, setShowTextField] = useState(false);
  const [formData, setFormData] = useState({
    userID:"",
    name:"",
    priority:""

});

const handleChange = e => {

    setFormData({ ...formData, [e.target.name]: e.target.value });

}

    // console.log(formData)

  const handleAddClick = () => {
    setShowTextField(true);
  };

  const handleDoneClick = async () => {
    // try {
    //   const response = await fetch("your-post-api-endpoint", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ text: textValue }),
    //   });
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error(error);
    // }
    axios.post('http://localhost:8000/tasks', formData)
    .then(res => {
        // sessionStorage.setItem('user', formData.username); 
        console.log("print")                       
    })
    .catch(err => {
        setError("User name already exists");
    
    });
  };

  return (
    <div>
      {showTextField ? (
         <div className="row mx-5">
        <Fields iconName="person" type="text" idName="name" onChange={handleChange} value={formData.userID} placeholder="User ID" />
        <Fields iconName="person" type="text" idName="name" onChange={handleChange} value={formData.name} placeholder="Name" />
        <Fields iconName="person" type="text" idName="name" onChange={handleChange} value={formData.priority} placeholder="Priority" />
        </div>
      ) : null}
      {formData.userID!=='' ? (
        <button onClick={handleDoneClick}>Done</button>
      ) : (
        <button onClick={handleAddClick}>Add</button>
      )}
    </div>
  );
}

export default Btn;
