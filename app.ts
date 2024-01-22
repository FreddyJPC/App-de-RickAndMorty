import { AxiosHttpClient } from './axios-http-client';
import { FetchHttpClient } from './fetch-http-client';
import { HttpCliente } from './http-client.interface';

interface CharacterData {
    results: any[];
}

const rickAndMortyApiUrl = 'https://rickandmortyapi.com/api/character/';

async function fetchCharacters(httpClient: HttpCliente, characterId?: number): Promise<void> {
    try {
        const characters: CharacterData = await httpClient.get(rickAndMortyApiUrl);

        if (characterId) {
            const character = characters.results.find((character) => character.id === characterId);
            console.log('Character:', character);
        } else {
            console.log('List of Characters:', characters.results);
        }
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

const axiosClient = new AxiosHttpClient();
fetchCharacters(axiosClient, 8);

const fetchClient = new FetchHttpClient();
fetchCharacters(fetchClient, 8);
