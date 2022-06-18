import React from "react";

function Button(color, text){
    return(
      <button className={`btn ${color}`}>
        {text}
      </button>  
    )
}

Button.defaultProps = {
    color: "steelblue",
}

export default Button;