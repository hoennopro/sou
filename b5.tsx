import React, { useState, useMemo } from "react";

const RandomNumberGenerator = () => {
  const [trigger, setTrigger] = useState(0);

  const randomNumber = useMemo(() => {
    return Math.floor(Math.random() * 100) + 1;
  }, [trigger]);

  const generateRandomNumber = () => {
    setTrigger((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Số ngẫu nhiên: {randomNumber}</h2>
      <button onClick={generateRandomNumber}>Generate</button>
    </div>
  );
};

export default RandomNumberGenerator;
