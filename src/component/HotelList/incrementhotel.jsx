import { Box } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  ibotton: {
    alignItems: "center",
    background: "#FFFFFF",
    height: "2rem",
    borderColor: "#8B8B8B",
    borderRadius: "2500rem",
    borderStyle: "solid",
    borderWidth: "1px",
    display: "flex",
    width: "2rem",
    justifyContent: "center",
  },
});
const Counter = () => {
  const classes = useStyle();
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Box sx={{ width:350, display: "flex", alignItems:'center', justifyContent:'space-between', padding: 2 }}>
        <div>
        Guests
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:"20px" }}> 
          <div>
            <button className={classes.ibotton} onClick={decrement}>
              -
            </button>
          </div>
          <div>
            <h4>{count}</h4>
          </div>
          <div>
        <button className={classes.ibotton} onClick={increment}> 
          +
        </button>

          </div>
        </div>
      </Box>
    </>
  );
};

export default Counter;
