const API_KEY = 'live_V8EsmExld6Okd0OBf9udUFyWl6QlLsJfvhJC0xkT660gyUXaFgqE0hV0EpcgEXTt';

const options = {
  headers: {
    'x-api-key': API_KEY,
  },
};
export function fetchBreeds() {
    return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`, options)
  .then(response => response.json());
}

export function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, options)
  .then(response => response.json());
}