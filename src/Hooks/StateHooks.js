import { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

function StateHooks() {
  const initCount = 0;
  const [count, setCount] = useState(initCount);
  return (
    <Card
      variant="outlined"
      style={{ margin: "10px", border: "2px solid gray" }}
    >
      <p>You clicked {count} times</p>
      <div
        style={{
          display: "flex",
          gap: "5px",
          top: "10px",
          marginBottom: "10px",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <Button
          variant="contained"
          onClick={() => count > initCount && setCount(count - 1)}
        >
          Decrement
        </Button>

        <Button variant="contained" onClick={() => setCount(initCount)}>
          Reset
        </Button>
      </div>
    </Card>
  );
}

export default StateHooks;
