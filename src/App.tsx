import TreeCanvas from './components/TreeCanvas';
import OrnamentPalette from './components/OrnamentPalette';
import './App.css';
import type { OrnmantKind, PlacedOrnament } from './types/ornaments';
import { useState } from 'react';

const App = () => {
  const [selectedOrnament, setSelectedOrnament] = useState<OrnmantKind | null>(null);
  const [placedOrnaments, setPlacedOrnaments] = useState<PlacedOrnament[]>([]);

  const handlePlaceOrnament = (x: number, y: number) => {
    if (!selectedOrnament) return;

    const newOrnament: PlacedOrnament = {
      id: crypto.randomUUID(),
      kind: selectedOrnament,
      x,
      y,
    };

    setPlacedOrnaments((prev) => [...prev, newOrnament]);
  };

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1>Christmas Tree Decorator</h1>
        </header>
        <main className="app-main">
          <section className='tree-section'>
            <TreeCanvas onPlace={handlePlaceOrnament} ornaments={placedOrnaments} />
          </section>
          <section className='palette-section'>
            <OrnamentPalette
              selected={selectedOrnament}
              onSelect={setSelectedOrnament}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
