const GOOGLE_API_KEY = 'AIzaSyCK27EKwR9b-LR68r_fnVseCQg3SHo6Zt4';
const GOOGLE_CX = '50a9ad4bdf4004982';

interface SearchResult {
  title: string;
  link: string;
  snippet: string;
  pagemap?: {
    metatags?: Array<{
      'og:title'?: string;
      'og:description'?: string;
      'og:image'?: string;
    }>;
  };
}

interface SearchResponse {
  items: SearchResult[];
  searchInformation: {
    totalResults: string;
    searchTime: number;
  };
}

// Google Search API
export const searchGoogle = async (query: string): Promise<SearchResult[]> => {
  const URL = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
    query
  )}&key=${GOOGLE_API_KEY}&cx=${GOOGLE_CX}`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: SearchResponse = await response.json();
    return data.items;
  } catch (error) {
    console.error('Google Search Error:', error);
    throw error;
  }
};
