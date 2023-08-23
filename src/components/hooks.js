import React,{ useState } from "react";
// import './components/Mystyle.css'

const Hook = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");


    return(
        <div className="inputDiv">
            <input type="text" name="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
            <input type="email" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>
    );
}




export default Hook;
