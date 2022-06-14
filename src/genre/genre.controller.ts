import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { UserValid } from 'src/user/isAdmin.decorator';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';
import { GenreService } from './genre.service';

@ApiTags('genre')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new genre',
  })
  create(@UserValid() user: User, @Body() dto: CreateGenreDto): Promise<Genre> {
    return this.genreService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'List all genres',
  })
  findAll(@UserValid() user: User): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'List all games by related genre',
  })
  findAllGamesRelation(@UserValid() user: User, @Param('id') id: string) {
    return this.genreService.findAllGamesRelation(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edit a genre by Id',
  })
  update(
    @UserValid() user: User,
    @Param('id') id: string,
    @Body() dto: UpdateGenreDto,
  ): Promise<Genre> {
    return this.genreService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remove a genre by Id',
  })
  delete(@UserValid() user: User, @Param('id') id: string) {
    return this.genreService.delete(id);
  }
}
