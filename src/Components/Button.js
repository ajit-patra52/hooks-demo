import { useState } from "react";

export default function Button({ count }) {
  const [btnClickCount, setbtnClickCount] = useState(count);

  return (
    <button onClick={() => setbtnClickCount(btnClickCount + 1)}>
      Button clicked {btnClickCount}
    </button>
  );
}
