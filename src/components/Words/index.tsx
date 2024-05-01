import { useState } from "react";
import { Word } from "../../model";
import '../../styles.css';

export const AutoComplete = ({ words }: Word) => {
  const [searchWord, setSearchWord] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  // Function to filter words based on the current query
  const lookWord = async (word: string) => {
    const filteredWords = await filterWords(word);
    setSearchWord(filteredWords);
  };

  // Asynchronous function to filter words
  const filterWords = async (text: string) => {
    return new Promise<string[]>((resolve) => {
      const filteredWords = words.filter((word: string) =>
        word.toLowerCase().includes(text.toLowerCase())
      );
      resolve(filteredWords);
      setQuery(text);
    });
  };

  // Function that will highlight the matching word
  const hilightMatchingText = (word: string) => {
    // create a regular expression to match the query text
    const pattern = new RegExp("(" + query + ")", "gi");
    // Add bold tag for the highleight
    const newWord = word.replace(pattern, `<b>${query}</b>`);
    return newWord;
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Auto-complete"
        onChange={(e) => lookWord(e.target.value)}
      />

      <div className="word-list">
        {searchWord.length
          ? searchWord.map((word: string, index) => <div className= "word-item" key={index}>
             <div dangerouslySetInnerHTML={{ __html: hilightMatchingText(word) }}/>
          </div>)
           : words.map((word: string, index) => <div className= "word-item" key={index} >{word}</div>
           )
          }
      </div>
    </div>
  );
};