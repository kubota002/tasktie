export interface Client {
    name: string,
    reading: string,
    address: string,
    phone: number,
    email: string,
}

export interface Clients {
    client: Client[]
}