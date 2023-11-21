import React, { useState } from 'react';

const FontSizeAdjuster = ({ defaultSize }) => {
  const [fontSize, setFontSize] = useState(defaultSize);

  const increaseFontSize = () => {
    setFontSize(fontSize + 2); // Increase font size by 2 units
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2); // Decrease font size by 2 units
  };

  return (
    <div>
      <div style={{ fontSize: `${fontSize}px`, marginBottom: '10px' }}>
        Text with adjustable size
      </div>
      <button
        onClick={increaseFontSize}
        style={{ backgroundColor: 'green', color: 'white', marginRight: '5px' }}
      >
        Increase Font Size
      </button>
      <button
        onClick={decreaseFontSize}
        style={{ backgroundColor: 'red', color: 'white' }}
      >
        Decrease Font Size
      </button>
    </div>
  );
};

export default FontSizeAdjuster;