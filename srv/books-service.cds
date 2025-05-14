using {hcr.mpc.bookshop as bookshop} from '../db/schema';

service BooksService {
    entity Books as projection on bookshop.Books;
}
