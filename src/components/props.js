import React from "react";


const Pro = (props) => {
    return(
        <div>
            <h1 style={{textAlign:'center'}}>{props.name}</h1>
            <h4 style={{textAlign:'center'}}>{props.model}</h4>
        </div>
    )
}

export default Pro;