import React, { useState, useCallback } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("red");

  const handleChangeColor = useCallback((event) => {
    setColor(event.target.value);
  }, []);

  return (
    <div>
      <h2>Chọn màu:</h2>
      <select value={color} onChange={handleChangeColor}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>
      <p style={{ color: color }}>Màu bạn chọn: {color}</p>
    </div>
  );
};

export default ColorPicker;
