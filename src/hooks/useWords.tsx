import {useEffect, useState} from 'react';
import { fetchWords } from '../api';
import { NetworkError } from '../model';

interface useWordsProps {
    data: {words: string[]}
    error: {error: NetworkError | null}
}

export const useWords = (): useWordsProps =>{
    const [words, setWords] = useState<string[]>([]);
    const [error, setError] = useState<NetworkError | null>(null);

    useEffect(()=>{
        const fetchDWords = async () =>{
            try{
                const data = await fetchWords();
                setWords(data);
            }catch (err){
                const errorMessage = err instanceof Error ? err.message : String(err);
                setError({ error: errorMessage });
            }
        }
        fetchDWords()
    },[])
 
    return{
        data: {words},
        error: {error}
    }
}