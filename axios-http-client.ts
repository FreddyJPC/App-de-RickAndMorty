import axios from 'axios';
import { HttpCliente } from './http-client.interface';

export class AxiosHttpClient implements HttpCliente {
  async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url);
    return response.data;
  }
}
