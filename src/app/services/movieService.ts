import axios from 'axios';

const apiKey = '8e85c673cemsh045f5ff13a464fap10136cjsn99506692af2f';
const apiHost = 'imdb236.p.rapidapi.com';

// Fetch movie image by ID
export const fetchMovieImage = async (id: number) => {
    const options = {
        method: 'GET',
        url: `https://imdb236.p.rapidapi.com/imdb/${id}`,
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': apiHost,
        },
    };

    try {
        const response = await axios.request(options);
        console.log("service result: ", response)
        return response.data; // Return only the image URL
    } catch (error) {
        console.error(`Error fetching image for ID ${id}:`, error);
        return null; // Handle errors gracefully
    }
};

// Fetch movie image by ID from OMDb
export const fetchMovieImage2 = async (id: number) => {
    const options = {
        method: 'GET',
        url: `https://www.omdbapi.com/?i=${id}&apikey=ff359f1e`,
    };

    try {
        const response = await axios.request(options);
        console.log("service result: ", response.data)
        return response.data; // Return only the image URL
    } catch (error) {
        console.error(`Error fetching image for ID ${id}:`, error);
        return null; // Handle errors gracefully
    }
};

// Fetch images for multiple movies
export const fetchMovieImagesBatch = async (movieData: any[]) => {
    const requests = movieData.map(async (movie: any) => {
        const id = movie['Const']; // Assuming column 1 is the movie ID (e.g., tt11198330)
        const url = movie['URL']
        const data = await fetchMovieImage2(id);        
        return { ...data, URL: url }; // Attach the image URL to the movie object
    });

    return Promise.all(requests); // Wait for all requests to complete
};
