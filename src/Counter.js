import React, { useEffect, useState } from "react";
const Counter = () => {
  const [value, setValue] = useState(1);

  
  const increment = () => setValue(value + 1);
  
  return (
    <div>
     
      <button onClick={increment}>Value: {value}</button>
      
    </div>
  );
};

export default Counter;
