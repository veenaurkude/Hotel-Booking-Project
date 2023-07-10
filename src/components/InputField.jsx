import React from "react";
import TextField from "@mui/material/TextField";

function InputField(props) {
  return (
    <div>
      {/* <label className="formLabel" htmlFor={props.id}>{props.label}</label> */}
      {/* <TextField
        style={{width:"100%"}}
        // id="outlined-required"
        type={props.type || "text"}
        id={props.id}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      /> */}

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
