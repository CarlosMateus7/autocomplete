// fetch words from the api
export const fetchWords = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=20');
      if (!response.ok) {
        throw new Error('Failed to fetch words');
      }
      const data: string[] = await response.json();
      return data; 
    } catch (error) {
      console.error('Error fetching words:', error);
      throw error;
    }
  };
  