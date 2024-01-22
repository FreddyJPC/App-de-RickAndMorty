import { HttpCliente } from './http-client.interface';

const fetch = import('node-fetch').then((mod) => mod.default);

export class FetchHttpClient implements HttpCliente {
    async get<T>(url: string): Promise<T> {
        const response = await (await fetch)(url);
        return response.json() as T;
    }
}

