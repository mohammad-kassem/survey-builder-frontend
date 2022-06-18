import React from "react";

function Button({color, text, onClick}){
    return(
      <button className={`btn ${color}`}
      onClick={onClick}>
        {text}
      </button>  
    )
}

Button.defaultProps = {
    color: "steelblue",
}

export default Button;