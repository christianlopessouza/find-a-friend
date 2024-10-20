export interface PostalCode{
    id?: number,
    code?: string,
    address?: string,
    city?: City,
}

export interface City{
    id?: number,
    name?: string,
    state?: State
}

export interface State{
    id?: number,
    name?: string    
}