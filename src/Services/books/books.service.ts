import { ObjectId } from 'mongoose';
import { Injectable, BadRequestException } from '@nestjs/common';
import { BookDTO } from '../../DTO/books.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class BooksService {

    constructor(
        private  readonly bookRepository : BookRepository
    ){}

    async saveBook(newBook: BookDTO) : Promise<Book> {
        return await this.bookRepository.saveBook(newBook);
    }

}
