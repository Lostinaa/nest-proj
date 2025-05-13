import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

interface User {
  id?: string;
  name?: string;
  email?: string;
  role?: 'RESEARCH' | 'IT' | 'ADMIN';
}

@Controller('users')
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */
  @Get() // GET /users or /users?role=value
  findAll() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: User) {
    return user;
  }

  @Patch(':id') //patch /user/:id
  update(@Param('id') id: string, @Body() userUpdate: Partial<User>) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
