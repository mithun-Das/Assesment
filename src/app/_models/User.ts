export interface User{
    id: number;
    name: string;
    email: string;
    username: string;
    address: Address;
    phone: string;
}

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
}