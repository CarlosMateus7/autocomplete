import { AutoComplete } from '../components/Words';
import { useWords } from '../hooks/useWords';

export function App() {

  const {  data: {words}, error:{error}} = useWords();

  return (
    <div className='App'>
      <h1 className='title'>Auto Complete Component</h1>
      <div>
        {error ? (
          <li>{error.error}</li>
        ) : words && (
         <AutoComplete words={words} />
        )}
      </div>
    </div>
  );
}
