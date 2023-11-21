import React from 'react';
import FontSizeAdjuster from './FontSizeAdjuster';

const App = () => {
  return (
    <div>
      <h1>Your App</h1>
      <FontSizeAdjuster defaultSize={16} />
    </div>
  );
};

export default App;