import React from 'react';
import TreeCanvas from './components/TreeCanvas';
import OrnamentPalette from './components/OrnamentPalette';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1>Christmas Tree Decorator</h1>
        </header>
        <main className="app-main">
          <section className='tree-section'>
            <TreeCanvas />
          </section>
          <section className='palette-section'>
            <OrnamentPalette />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
