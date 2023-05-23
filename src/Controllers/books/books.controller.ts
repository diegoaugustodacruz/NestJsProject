import { Controller, Get, Post, Body, BadRequestException, Delete, Param, Put, Patch } from '@nestjs/common';
import { BooksService } from 'src/Services/books/books.service';
import { BookDTO } from '../../DTO/books.dto';
import { Book } from 'src/Mongo/Interfaces/book.interface';

@Controller('books')
export class BooksController {

  constructor(
      private readonly booksService: BooksService
  ){}

  @Get()
  getAllBooks(): string {
    return 'Todos livros estao aqui';
  }

  @Post()
  async saveBook(@Body() newBook : BookDTO): Promise<Book> {
        return await this.booksService.saveBook(newBook);
    }

  @Patch()
  updateBook(): string{
    return 'Esse livro foi atualizado';
  }

  @Delete()
  deleteBook(): string{
    return 'esse livro foi deletado';
  }
}
