export interface HttpCliente {
    get<T>(url: string): Promise<T>;
  }
  