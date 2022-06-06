import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Genre } from './entities/genre.entity';

@ApiTags('genre')
@Controller('genre')
export class GenreController {
  constructor(private readonly genderService: GenreService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new genre',
  })
  create(@Body() dto: CreateGenreDto): Promise<Genre> {
    return this.genderService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'List all genders',
  })
  findAll(): Promise<Genre[]> {
    return this.genderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'List all games by related genre',
  })
  findAllGamesRelation(@Param('id') id: string) {
    return this.genderService.findAllGamesRelation(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edit a genre by Id',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateGenreDto,
  ): Promise<Genre> {
    return this.genderService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remove a genre by Id',
  })
  delete(@Param('id') id: string) {
    return this.genderService.delete(id);
  }
}
