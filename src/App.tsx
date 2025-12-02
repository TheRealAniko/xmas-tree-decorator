import React from 'react';
import TreeCanvas from './components/TreeCanvas';
import OrnamentPalette from './components/OrnamentPalette';


const App: React.FC = () => {
  return (
    <div>
      <h1>Christmas Tree Decorator</h1>
      <TreeCanvas />
      <OrnamentPalette />
    </div>
  );
};

export default App;
