import React from "react";
import TextField from "@mui/material/TextField";

function InputField(props) {
  return (
    <div>

      <TextField 
      variant="standard"
      style={{width:"100%"}}
      label={props.label} 
      type={props.type || "text"}
      id={props.id}
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
    
      />
      {props.errors && <p  className="error" style={{ color: "red", marginTop: "1px" }}>{props.errors}</p>}
    </div>
  );
}

export default InputField;
