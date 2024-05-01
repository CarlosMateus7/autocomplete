import { useState } from 'react';
import { AutoComplete } from '../components/Words';
import { useWords } from '../hooks/useWords';

export function App() {

  const {  data: {words}, error:{error}} = useWords();
  const [selected, setSelected] = useState("");

  return (
    <div className='App'>
      <h1 className='title'>Auto Complete Component</h1>
      <div>
        {error ? (
          <li>{error.error}</li>
        ) : words && (
         <AutoComplete words={words} onChange={(val) => setSelected(val)} value={selected} />
        )}
      </div>
    </div>
  );
}
