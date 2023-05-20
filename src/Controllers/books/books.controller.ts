import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';

import {BookDTO} from '../../DTO/books.dto';

@Controller('books')
export class BooksController {
  @Get()
  getAllBooks(): string {
    return 'Todos livros estao aqui';
  }

  @Post()
  saveBook(@Body() newBook: BookDTO): BookDTO{
    return newBook;
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
