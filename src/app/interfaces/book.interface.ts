import { Pageable, Sort } from "./common.interface";

export interface BookPage {
    content:          Book[];
    pageable:         Pageable;
    last:             boolean;
    totalElements:    number;
    totalPages:       number;
    number:           number;
    sort:             Sort;
    size:             number;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface Book {
    id:          number;
    title:       string;
    slug:        string;
    description: string;
    price:       number;
    coverPath:   string;
    filePath:    string;
    createdAt:   string;
    updatedAt:   null;
}
