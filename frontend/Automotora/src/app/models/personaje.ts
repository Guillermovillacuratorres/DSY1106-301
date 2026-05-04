export interface Personaje{
    "items":Item[];
    "meta":Meta;
    "links":Link;
}



interface Item{
    "id": number;
    "name": string;
    "ki":  string;
    "maxKi": string;
    "race": string;
    "gender":  string;
    "description":  string;
    "image": string;
    "affiliation":  string;
    "deletedAt":  string;
}


interface Meta{
    "totalItems": number;
    "itemCount": number;
    "itemsPerPage": number;
    "totalPages": number;
    "currentPage": number;
}

interface Link{
    "first":string;
    "previous" :string;
    "next":string;
    "last":string;
}