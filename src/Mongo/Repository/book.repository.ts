import { Injectable } from "@nestjs/common";
import { InjectModel, InjectConnection } from "@nestjs/mongoose";
import { Model, Connection, ObjectId } from 'mongoose';
import { Book } from "../Interfaces/book.interface";
import { BookDTO } from "../../DTO/books.dto";

@Injectable()
export class BookRepository{

    constructor(
        @InjectModel('books') private readonly bookModel: Model<Book>
    ){}

    async saveBook(newBook : BookDTO): Promise<Book>{
        const createdBook = new this.bookModel(newBook);
        return createdBook.save();
    }

}