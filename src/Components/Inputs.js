import { useState } from "react";
import Button from "./Button";

function Inputs() {
  const [count] = useState(0);
  return <Button count={count} />;
}

export default Inputs;
