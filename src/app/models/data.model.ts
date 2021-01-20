
export interface Commodities {
    id: number,
    attributes : {
        avg_price: number;
        logo: string;
        logo_dark: string;
        name: string;
        symbol: string;
    }
}

export interface Cryptocoins {
    id: number;
    name: string;
    symbol: string;
}

export interface Flat {
    id: number;
    name: string;
    symbol: string;
}

export interface Indexes {
    id: number;
    name: string;
    symbol: string;
}



